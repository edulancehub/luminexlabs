'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        {
            label: 'Services', href: '/#services', children: [
                { label: 'AI Websites', href: '/services/ai-websites', emoji: '🌐' },
                { label: 'AI Apps', href: '/services/ai-apps', emoji: '📱' },
                { label: 'RAG Solutions', href: '/services/rag', emoji: '🧠' },
                { label: 'n8n Automation', href: '/services/n8n', emoji: '⚡' },
                { label: 'LangChain', href: '/services/langchain', emoji: '🔗' },
                { label: 'Cyber Security', href: '/services/cyber-security', emoji: '🛡️' },
                { label: 'AI Chatbots', href: '/services/chatbots', emoji: '💬' },
                { label: 'AI for Business', href: '/services/ai-business', emoji: '📊' },
                { label: 'Consultancy', href: '/services/consultancy', emoji: '🎯' },
            ]
        },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Global', href: '/#presence' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <img src="/favicon.png" alt="LuminexLabs" width={28} height={28} style={{ borderRadius: 6 }} />
                    </div>
                    <span>luminexlabs</span>
                </Link>

                {/* Overlay backdrop for mobile */}
                {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}

                <ul className={`${styles.menu} ${mobileOpen ? styles.mobileOpen : ''}`}>
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className={`${styles.menuItem} ${item.children ? styles.hasDropdown : ''}`}
                            onMouseEnter={() => item.children && setDropdown(item.label)}
                            onMouseLeave={() => setDropdown(null)}
                        >
                            <Link href={item.href} onClick={() => setMobileOpen(false)} className={styles.menuLink}>
                                {item.label}
                                {item.children && <span className={styles.arrow}>↓</span>}
                            </Link>
                            {item.children && dropdown === item.label && (
                                <div className={styles.dropdown}>
                                    {item.children.map((child) => (
                                        <Link key={child.label} href={child.href} className={styles.dropdownItem} onClick={() => { setMobileOpen(false); setDropdown(null); }}>
                                            <span className={styles.dropdownEmoji}>{child.emoji}</span>
                                            <span>{child.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                    {/* Mobile-only CTA */}
                    <li className={styles.mobileCta}>
                        <Link href="/get-started" className={styles.chatBtn} onClick={() => setMobileOpen(false)}>
                            Let&apos;s chat <span>👋</span>
                        </Link>
                    </li>
                </ul>

                <div className={styles.right}>
                    <Link href="/get-started" className={styles.chatBtn}>
                        Let&apos;s chat <span>👋</span>
                    </Link>
                </div>

                <button className={`${styles.toggle} ${mobileOpen ? styles.active : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
