import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are LuminexBot, the AI assistant for LuminexLabs — an AI-driven software company operating from Saudi Arabia, US, UK, and Dhaka, Bangladesh. You help potential clients learn about services and pricing.

Key services (always link to the full page URL when mentioning a service):
- AI-Driven Websites ($300, one-time, 5-7 days) → /services/ai-websites
- AI-Driven Apps ($500, one-time, 10-14 days) → /services/ai-apps
- RAG Solutions → /services/rag
- n8n Automation → /services/n8n
- LangFlow & LangChain → /services/langchain
- Cyber Security → /services/cyber-security
- AI Chatbots & Agents → /services/chatbots
- AI for Business → /services/ai-business
- AI Consultancy → /services/consultancy

Website: luminexlabs.io
Get-started page: /get-started

IMPORTANT RULES:
- When recommending a service, include its direct page URL (e.g. /services/rag, /services/cyber-security).
- NEVER use hash-based links like /#services or /#contact. Always use the full path.
- For general project inquiries, guide users to /get-started.
- Be concise, friendly, professional. Keep responses to 2-3 sentences max. Use emojis sparingly.`;

export async function POST(request) {
    try {
        const { message, history } = await request.json();
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ reply: getFallbackReply(message) });
        }

        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...(history || []).slice(-8).map(m => ({
                role: m.role === 'user' ? 'user' : 'assistant',
                content: m.text
            })),
            { role: 'user', content: message }
        ];

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages,
                max_tokens: 250,
                temperature: 0.7,
                stream: false
            })
        });

        if (!response.ok) {
            console.error('Groq API error:', response.status, await response.text());
            return NextResponse.json({ reply: getFallbackReply(message) });
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || getFallbackReply(message);
        return NextResponse.json({ reply });

    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json({ reply: getFallbackReply(message) });
    }
}

function getFallbackReply(message) {
    const lower = message.toLowerCase();
    if (lower.includes('price') || lower.includes('cost') || lower.includes('how much'))
        return "Our pricing is simple: AI-Driven Websites start at $300 (/services/ai-websites) and AI-Driven Apps at $500 (/services/ai-apps) — both one-time payments. Visit /get-started for a custom quote! 💰";
    if (lower.includes('rag') || lower.includes('retrieval'))
        return "Our RAG Solutions connect AI to your proprietary data for accurate, contextual responses. Learn more at /services/rag or start your project at /get-started! 🧠";
    if (lower.includes('security') || lower.includes('cyber'))
        return "We provide AI-powered cyber security: threat detection, penetration testing, zero-trust architecture, and compliance consulting. Details at /services/cyber-security 🛡️";
    if (lower.includes('chatbot') || lower.includes('agent'))
        return "We build intelligent AI chatbots and agents powered by GPT-4 and Claude, deployed across web, WhatsApp, Slack, and more. See /services/chatbots for details! 💬";
    if (lower.includes('automat') || lower.includes('n8n') || lower.includes('workflow'))
        return "We design end-to-end automation workflows with n8n — connecting 500+ services. Check out /services/n8n or tell us about your project at /get-started! ⚡";
    if (lower.includes('langchain') || lower.includes('langflow'))
        return "We build sophisticated AI orchestration systems with LangChain and LangFlow — multi-step agents, retrieval chains, and more. Details at /services/langchain 🔗";
    if (lower.includes('consult'))
        return "Our AI consultancy helps you identify opportunities, build roadmaps, and execute transformation. Learn more at /services/consultancy 🎯";
    if (lower.includes('website') || lower.includes('web'))
        return "We build stunning AI-powered websites with chatbots, smart personalization, and SEO — starting at $300. See /services/ai-websites or begin at /get-started! 🌐";
    if (lower.includes('app') || lower.includes('mobile'))
        return "Our AI-driven mobile apps come with intelligent features and cross-platform deployment — starting at $500. Details at /services/ai-apps! 📱";
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
        return "Hello! 👋 Welcome to LuminexLabs! I can help you with our AI services, pricing, or getting started. What interests you?";
    return "Great question! We offer AI websites (/services/ai-websites), apps (/services/ai-apps), RAG (/services/rag), automation (/services/n8n), and more. Visit /get-started to tell us about your project! 🚀";
}
