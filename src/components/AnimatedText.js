'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedText — letter-by-letter continuous wave animation.
 * Each character gently waves up/down in an infinite loop once visible.
 *
 * Props:
 *  - text: string (can include <em>, <br> tags)
 *  - tag: 'h1' | 'h2' | 'h3' | 'p'  (default 'h2')
 *  - className: additional CSS class
 *  - stagger: ms between each letter's animation offset (default 60)
 *  - style: inline style object
 */
export default function AnimatedText({ text, tag: Tag = 'h2', className = '', stagger = 60, style = {} }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Parse text into tokens — preserve <em>, <br> tags
    const letters = [];
    let charIndex = 0;
    let inTag = false;
    let tagBuffer = '';

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === '<') { inTag = true; tagBuffer += ch; continue; }
        if (inTag) { tagBuffer += ch; if (ch === '>') { inTag = false; letters.push({ type: 'tag', content: tagBuffer }); tagBuffer = ''; } continue; }
        if (ch === ' ') { letters.push({ type: 'space', index: charIndex++ }); }
        else if (ch === '\n') { letters.push({ type: 'break', index: charIndex }); }
        else { letters.push({ type: 'char', content: ch, index: charIndex++ }); }
    }

    const totalChars = charIndex;

    // Build JSX with word wrappers so mobile wraps by words, not by letters.
    const elements = [];
    let emphasis = false;
    let key = 0;
    let wordNodes = [];

    const flushWord = () => {
        if (!wordNodes.length) return;
        elements.push(
            <span key={`w-${key++}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {wordNodes}
            </span>
        );
        wordNodes = [];
    };

    for (const item of letters) {
        if (item.type === 'tag') {
            if (item.content === '<em>') emphasis = true;
            else if (item.content === '</em>') emphasis = false;
            else if (item.content === '<br>' || item.content === '<br/>') {
                flushWord();
                elements.push(<br key={`br-${key++}`} />);
            }
            continue;
        }

        if (item.type === 'break') {
            flushWord();
            elements.push(<br key={`br-${key++}`} />);
            continue;
        }

        if (item.type === 'space') {
            flushWord();
            elements.push(<span key={`s-${key++}`}> </span>);
            continue;
        }

        const delay = item.index * stagger;
        const totalDuration = totalChars * stagger + 2000;
        const baseStyle = {
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.4s ease ${delay}ms, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            animation: visible ? `letterWave ${totalDuration}ms ease-in-out ${delay}ms infinite` : 'none',
            willChange: 'transform, opacity',
        };

        if (emphasis) {
            wordNodes.push(
                <em key={`c-${key++}`} style={{ ...baseStyle, fontStyle: 'italic', background: 'linear-gradient(135deg, var(--text-secondary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {item.content}
                </em>
            );
        } else {
            wordNodes.push(<span key={`c-${key++}`} style={baseStyle}>{item.content}</span>);
        }
    }

    flushWord();

    return (
        <>
            <style>{`
                @keyframes letterWave {
                    0%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-6px); }
                    60% { transform: translateY(2px); }
                }
            `}</style>
            <Tag ref={ref} className={className} style={style} aria-label={text.replace(/<[^>]+>/g, '')}>
                {elements}
            </Tag>
        </>
    );
}
