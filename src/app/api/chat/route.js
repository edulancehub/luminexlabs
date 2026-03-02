import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are LuminexBot, the AI assistant for LuminexLabs — an AI-driven software company operating from Saudi Arabia, US, UK, and Dhaka, Bangladesh. You help potential clients learn about services and pricing.

Key services:
- AI-Driven Websites ($300, one-time, 5-7 days)
- AI-Driven Apps ($500, one-time, 10-14 days)  
- RAG Solutions, n8n Automation, LangChain/LangFlow
- Cyber Security, AI Chatbots, AI for Business, AI Consultancy

We specialize in: web development, app development, AI solutions, machine learning, automation, and cybersecurity.

Be concise, friendly, professional. Guide users to /get-started for project inquiries. Keep responses to 2-3 sentences max. Use emojis sparingly.`;

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
        return "Our pricing is simple: AI-Driven Websites start at $300 and AI-Driven Apps at $500 — both one-time payments. Visit /get-started for a custom quote! 💰";
    if (lower.includes('website') || lower.includes('web'))
        return "We build stunning AI-powered websites with chatbots, smart personalization, and SEO — starting at $300. Head to /get-started to begin! 🌐";
    if (lower.includes('app') || lower.includes('mobile'))
        return "Our AI-driven mobile apps come with intelligent features and cross-platform deployment — starting at $500. Let's talk at /get-started! 📱";
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
        return "Hello! 👋 Welcome to LuminexLabs! I can help you with our AI services, pricing, or getting started. What interests you?";
    return "Great question! We offer AI websites ($300), apps ($500), RAG, automation, and more. Visit /get-started to tell us about your project! 🚀";
}
