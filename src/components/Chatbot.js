'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

/** Convert /path-style links in text to clickable <a> elements */
function renderMessageText(text) {
    // Match paths like /get-started, /services/rag etc.
    const parts = text.split(/(\/[a-z][a-z0-9\-\/]*)/gi);
    return parts.map((part, i) => {
        if (/^\/[a-z][a-z0-9\-\/]*$/i.test(part)) {
            return <a key={i} href={part} style={{ color: 'var(--accent, #e8734a)', textDecoration: 'underline', fontWeight: 600 }}>{part}</a>;
        }
        return part;
    });
}

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: "Hi there! 👋 I'm LuminexBot — your AI assistant. Ask me about our services, pricing, or anything else!" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesRef = useRef(null);

    useEffect(() => {
        if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, [messages, loading]);

    async function sendMessage() {
        const text = input.trim();
        if (!text || loading) return;

        const userMsg = { role: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text, history: messages })
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.reply || "Sorry, I couldn't process that. Please try again!" }]);
        } catch {
            setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting. Please try again in a moment!" }]);
        }
        setLoading(false);
    }

    return (
        <>
            <button className={`${styles.trigger} ${open ? styles.open : ''}`} onClick={() => setOpen(!open)} aria-label="Chat">
                {open ? '✕' : '💬'}
            </button>
            <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
                <div className={styles.header}>
                    <div className={styles.avatar}>🤖</div>
                    <div className={styles.info}><h4>LuminexLabs AI</h4><p>Powered by AI</p></div>
                    <div className={styles.status} />
                </div>
                <div className={styles.messages} ref={messagesRef}>
                    {messages.map((m, i) => (
                        <div key={i} className={`${styles.msg} ${m.role === 'user' ? styles.user : styles.bot}`}>{m.role === 'bot' ? renderMessageText(m.text) : m.text}</div>
                    ))}
                    {loading && (
                        <div className={`${styles.msg} ${styles.bot} ${styles.typing}`}>
                            <span /><span /><span />
                        </div>
                    )}
                </div>
                <div className={styles.inputArea}>
                    <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Type a message..." />
                    <button onClick={sendMessage} disabled={loading}>➤</button>
                </div>
            </div>
        </>
    );
}
