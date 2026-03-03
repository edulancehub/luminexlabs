'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        onResize();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        };
    }, [mobileOpen]);

    const closeMobile = useCallback(() => {
        setMobileOpen(false);
        setDropdown(null);
    }, []);

    const handleDropdownToggle = useCallback((label) => {
        if (isMobile) {
            setDropdown(prev => prev === label ? null : label);
        }
    }, [isMobile]);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        {
            label: 'Services', href: '/services', children: [
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
        { label: 'Pricing', href: '/pricing' },
        { label: 'Global', href: '/global' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo} onClick={closeMobile}>
                    <div className={styles.logoIcon}>
                        <img src="/favicon.png" alt="LuminexLabs" width={28} height={28} style={{ borderRadius: 6 }} />
                    </div>
                    <span>luminexlabs</span>
                </Link>

                {/* Overlay backdrop for mobile */}
                {mobileOpen && <div className={styles.overlay} onClick={closeMobile} />}

                <ul className={`${styles.menu} ${mobileOpen ? styles.mobileOpen : ''}`}>
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className={`${styles.menuItem} ${item.children ? styles.hasDropdown : ''} ${dropdown === item.label ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => !isMobile && item.children && setDropdown(item.label)}
                            onMouseLeave={() => !isMobile && setDropdown(null)}
                        >
                            {item.children ? (
                                <>
                                    {/* On mobile: tap toggles dropdown. On desktop: it's a link. */}
                                    {isMobile ? (
                                        <button
                                            type="button"
                                            className={styles.menuLink}
                                            onClick={() => handleDropdownToggle(item.label)}
                                            aria-expanded={dropdown === item.label}
                                        >
                                            {item.label}
                                            <span className={`${styles.arrow} ${dropdown === item.label ? styles.arrowOpen : ''}`}>↓</span>
                                        </button>
                                    ) : (
                                        <Link href={item.href} className={styles.menuLink}>
                                            {item.label}
                                            <span className={styles.arrow}>↓</span>
                                        </Link>
                                    )}
                                    {(dropdown === item.label) && (
                                        <div className={styles.dropdown}>
                                            {item.children.map((child) => (
                                                <Link key={child.label} href={child.href} className={styles.dropdownItem} onClick={closeMobile}>
                                                    <span className={styles.dropdownEmoji}>{child.emoji}</span>
                                                    <span>{child.label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link href={item.href} onClick={closeMobile} className={styles.menuLink}>
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                    {/* Mobile-only CTA */}
                    <li className={styles.mobileCta}>
                        <Link href="/get-started" className={styles.chatBtn} onClick={closeMobile}>
                            Fix Your Product <span>🚀</span>
                        </Link>
                    </li>
                </ul>

                <div className={styles.right}>
                    <Link href="/get-started" className={styles.chatBtn}>
                        Fix Your Product <span>🚀</span>
                    </Link>
                </div>

                <button className={`${styles.toggle} ${mobileOpen ? styles.active : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
