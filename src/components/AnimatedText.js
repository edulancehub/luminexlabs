'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedText — letter-by-letter reveal with staggered animation.
 * Wraps each character in a <span> and triggers animation when the element
 * enters the viewport via IntersectionObserver.
 *
 * Props:
 *  - text: string (can include HTML via dangerouslySetInnerHTML if tag is set)
 *  - tag: 'h1' | 'h2' | 'h3' | 'p'  (default 'h2')
 *  - className: additional CSS class
 *  - stagger: ms between each letter (default 30)
 *  - style: inline style object
 */
export default function AnimatedText({ text, tag: Tag = 'h2', className = '', stagger = 30, style = {} }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Split text into spans — preserve HTML tags like <em>, <br>
    const letters = [];
    let charIndex = 0;
    let inTag = false;
    let tagBuffer = '';

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === '<') {
            inTag = true;
            tagBuffer += ch;
            continue;
        }
        if (inTag) {
            tagBuffer += ch;
            if (ch === '>') {
                inTag = false;
                letters.push({ type: 'tag', content: tagBuffer });
                tagBuffer = '';
            }
            continue;
        }
        if (ch === ' ') {
            letters.push({ type: 'space', index: charIndex++ });
        } else if (ch === '\n') {
            letters.push({ type: 'break', index: charIndex });
        } else {
            letters.push({ type: 'char', content: ch, index: charIndex++ });
        }
    }

    // Build JSX from parsed letters
    const elements = [];
    let currentEmphasis = false;
    let key = 0;

    for (const item of letters) {
        if (item.type === 'tag') {
            if (item.content === '<em>') currentEmphasis = true;
            else if (item.content === '</em>') currentEmphasis = false;
            else if (item.content === '<br>' || item.content === '<br/>') {
                elements.push(<br key={`br-${key++}`} />);
            }
            continue;
        }
        if (item.type === 'break') {
            elements.push(<br key={`br-${key++}`} />);
            continue;
        }
        if (item.type === 'space') {
            elements.push(
                <span key={`s-${key++}`} style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
            );
            continue;
        }

        const delay = item.index * stagger;
        const spanStyle = {
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotateX(0)' : 'translateY(40px) rotateX(-90deg)',
            transition: `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            willChange: 'opacity, transform',
        };

        if (currentEmphasis) {
            elements.push(
                <em key={`c-${key++}`} style={{ ...spanStyle, fontStyle: 'italic', background: 'linear-gradient(135deg, var(--text-secondary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {item.content}
                </em>
            );
        } else {
            elements.push(
                <span key={`c-${key++}`} style={spanStyle}>
                    {item.content}
                </span>
            );
        }
    }

    return (
        <Tag ref={ref} className={className} style={{ ...style, perspective: '600px' }} aria-label={text.replace(/<[^>]+>/g, '')}>
            {elements}
        </Tag>
    );
}
