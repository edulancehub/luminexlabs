'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicePage({ data, slug, related }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [slug]);

    if (!data) return null;

    const bgChars = data.bgChars || ['✨', '🔮'];

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="bg-character" style={{ top: '8%', left: '2%', fontSize: '220px' }}>{bgChars[0]}</div>
                <div className="bg-character" style={{ bottom: '10%', right: '3%', fontSize: '220px' }}>{bgChars[1]}</div>
                <div className={styles.icon}>{data.icon}</div>
                <span className="section-eyebrow"><span className="dot" /> {data.eyebrow}</span>
                <h1 className="section-heading">{data.title}</h1>
                <p className="section-desc mx-auto">{data.subtitle}</p>
            </section>

            {/* Body */}
            <section className={styles.body}>
                <div className="container">
                    <div className={styles.content}>
                        <div className="reveal">
                            <h2 className={styles.aboutTitle}>{data.aboutTitle}</h2>
                            <p className={styles.aboutDesc}>{data.desc1}</p>
                            <p className={styles.aboutDesc}>{data.desc2}</p>

                            <div className={styles.featureSection}>
                                <h3>What&apos;s included</h3>
                                <ul className={styles.featureList}>
                                    {(data.features || []).map(f => (
                                        <li key={f}><span className={styles.fIcon}>✓</span> {f}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.techSection}>
                                <h3>Technology Stack</h3>
                                <div className={styles.techTags}>
                                    {(data.tech || []).map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                                </div>
                            </div>
                        </div>

                        <div className={styles.sidebar + ' reveal reveal-delay-2'}>
                            <div className={styles.formCard}>
                                <h3 className={styles.formTitle}>Interested?</h3>
                                <p className={styles.formSubtitle}>Fill in your details and we&apos;ll provide a free proposal.</p>
                                <form action="https://formspree.io/f/xgollwde" method="POST">
                                    <input type="hidden" name="service_interest" value={data.title} />
                                    <div className={styles.formGroup}><label>Full Name *</label><input name="name" placeholder="John Doe" required /></div>
                                    <div className={styles.formGroup}><label>Email Address *</label><input type="email" name="email" placeholder="john@example.com" required /></div>
                                    <div className={styles.formGroup}><label>Phone</label><input name="phone" placeholder="+1 (555) 000-0000" /></div>
                                    <div className={styles.formGroup}><label>Project Details *</label><textarea name="message" placeholder="Tell us about your project..." required /></div>
                                    <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>Get Free Proposal →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className={styles.relatedSection}>
                <div className="container">
                    <div className="text-center reveal">
                        <span className="section-eyebrow"><span className="dot" /> More Services</span>
                        <h2 className="section-heading">You might also like</h2>
                    </div>
                    <div className={styles.relatedGrid}>
                        {(related || []).map(s => (
                            <Link href={`/services/${s.slug}`} key={s.slug} className={`${styles.relatedCard} reveal`}>
                                <div className={styles.relatedEmoji}>{s.icon}</div>
                                <h4>{s.title}</h4>
                                <p>{(s.subtitle || '').substring(0, 80)}...</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
