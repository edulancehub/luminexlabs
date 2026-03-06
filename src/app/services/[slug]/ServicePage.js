'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiOpenai,
    SiVercel,
    SiGoogle,
    SiFlutter,
    SiFirebase,
    SiTensorflow,
    SiNodedotjs,
    SiPostgresql,
    SiLangchain,
    SiPython,
    SiFastapi,
    SiDocker,
    SiKubernetes,
    SiTwilio
} from 'react-icons/si';
import {
    FaCode,
    FaShieldAlt,
    FaBug,
    FaDatabase,
    FaChartLine,
    FaCogs,
    FaRobot,
    FaSitemap,
    FaGlobe
} from 'react-icons/fa';
import styles from './page.module.css';
import { DoodleSparkle, DoodleStar, DoodleSquiggle, DoodleArrowCurve, DoodlePlus, DoodleDots, DoodleSunBurst } from '@/components/Doodles';
import AnimatedText from '@/components/AnimatedText';

const techIconMap = {
    react: SiReact,
    nextjs: SiNextdotjs,
    tailwindcss: SiTailwindcss,
    openai: SiOpenai,
    vercel: SiVercel,
    googleanalytics: SiGoogle,
    flutter: SiFlutter,
    reactnative: SiReact,
    firebase: SiFirebase,
    tensorflowlite: SiTensorflow,
    nodejs: SiNodedotjs,
    postgresql: SiPostgresql,
    pinecone: FaDatabase,
    langchain: SiLangchain,
    openaiembeddings: SiOpenai,
    python: SiPython,
    fastapi: SiFastapi,
    n8n: FaSitemap,
    webhooks: FaSitemap,
    restapis: FaGlobe,
    langflow: SiLangchain,
    langgraph: SiLangchain,
    claude: FaRobot,
    siem: FaShieldAlt,
    idsips: FaShieldAlt,
    burpsuite: FaBug,
    nmap: FaShieldAlt,
    gpt4: SiOpenai,
    dialogflow: SiGoogle,
    twilio: SiTwilio,
    websocket: FaSitemap,
    tensorflow: SiTensorflow,
    scikitlearn: FaRobot,
    tableau: FaChartLine,
    powerbi: FaChartLine,
    sql: FaDatabase,
    strategyframeworks: FaCogs,
    dataassessment: FaChartLine,
    roimodeling: FaChartLine,
    changemanagement: FaCogs,
    workshops: FaSitemap,
    documentation: FaCode,
    chromadb: FaDatabase,
    docker: SiDocker,
    kubernetes: SiKubernetes
};

function normalizeTechLabel(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function getTechIcon(value) {
    return techIconMap[normalizeTechLabel(value)] || FaCode;
}

export default function ServicePage({ data, slug, related }) {
    const formRef = useRef(null);
    const [formState, handleSubmit] = useForm('xgollwde');
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [slug]);

    useEffect(() => {
        if (!formState.succeeded) return;
        if (formRef.current) formRef.current.reset();
        setShowSuccessToast(true);
        const timer = setTimeout(() => setShowSuccessToast(false), 5000);
        return () => clearTimeout(timer);
    }, [formState.succeeded]);

    if (!data) return null;

    const bgChars = data.bgChars || ['✨', '🔮'];

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <DoodleSparkle className={styles.doodle} style={{ position: 'absolute', top: '12%', right: '10%', color: 'var(--accent)', opacity: 0.45 }} />
                <DoodleStar className={styles.doodle} style={{ position: 'absolute', bottom: '20%', left: '8%', color: 'var(--warm-lavender)', opacity: 0.35 }} />
                <DoodleSquiggle className={styles.doodle} style={{ position: 'absolute', bottom: '32%', right: '5%', color: 'var(--accent)', opacity: 0.25 }} />
                <DoodlePlus className={styles.doodle} style={{ position: 'absolute', top: '30%', left: '4%', color: 'var(--warm-peach)', opacity: 0.3 }} />
                <div className={styles.icon}>{data.icon}</div>
                <span className="section-eyebrow"><span className="dot" /> {data.eyebrow}</span>
                <AnimatedText text={data.title} tag="h1" className="section-heading" stagger={35} />
                <p className="section-desc mx-auto">{data.subtitle}</p>
            </section>

            {/* Body */}
            <section className={styles.body}>
                <div className="container">
                    <DoodleArrowCurve className={styles.doodle} style={{ position: 'absolute', top: '4%', right: '2%', color: 'var(--accent)', opacity: 0.2 }} />
                    <DoodleDots className={styles.doodle} style={{ position: 'absolute', bottom: '6%', left: '1%', color: 'var(--text-tertiary)', opacity: 0.18 }} />
                    <DoodleSunBurst className={styles.doodle} style={{ position: 'absolute', top: '60%', right: '1%', color: 'var(--warm-lavender)', opacity: 0.2 }} />
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
                                    {(data.tech || []).map(t => {
                                        const TechIcon = getTechIcon(t);
                                        return (
                                            <span key={t} className={styles.techTag}>
                                                <span className={styles.techTagIcon}><TechIcon aria-hidden="true" /></span>
                                                <span>{t}</span>
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className={styles.sidebar}>
                            <div className={styles.formCard}>
                                <div className={styles.formBadgeRow}>
                                    <span className={styles.formBadge}>{data.icon} {data.title}</span>
                                    <span className={styles.formBadgeMuted}>Free Strategy Call</span>
                                </div>
                                <h3 className={styles.formTitle}>Interested?</h3>
                                <p className={styles.formSubtitle}>Fill in your details and we&apos;ll provide a free proposal.</p>
                                <form onSubmit={handleSubmit} ref={formRef}>
                                    <input type="hidden" name="service_interest" value={data.title} />
                                    <div className={styles.formGroup}><label htmlFor="service-name">Full Name *</label><input id="service-name" name="name" placeholder="John Doe" autoComplete="name" required /></div>
                                    <div className={styles.formGroup}><label htmlFor="service-email">Email Address *</label><input id="service-email" type="email" name="email" placeholder="john@example.com" autoComplete="email" required />
                                        <ValidationError prefix="Email" field="email" errors={formState.errors} className={styles.formError} />
                                    </div>
                                    <div className={styles.formGroup}><label htmlFor="service-phone">Phone</label><input id="service-phone" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" /></div>
                                    <div className={styles.formGroup}><label htmlFor="service-message">Project Details *</label><textarea id="service-message" name="message" placeholder="Tell us about your project..." required />
                                        <ValidationError prefix="Message" field="message" errors={formState.errors} className={styles.formError} />
                                    </div>
                                    <button type="submit" disabled={formState.submitting} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                                        {formState.submitting ? 'Submitting...' : 'Get Free Proposal →'}
                                    </button>
                                    {formState.submitting && <p className={styles.formStatus}>Submitting your request...</p>}
                                    {formState.succeeded && <p className={`${styles.formStatus} ${styles.formStatusSuccess}`}>✅ Submitted successfully. We&apos;ll contact you soon.</p>}
                                    {!formState.submitting && !formState.succeeded && Array.isArray(formState.errors) && formState.errors.length > 0 && (
                                        <p className={`${styles.formStatus} ${styles.formStatusError}`}>Could not submit right now. Please try again.</p>
                                    )}
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
                        <AnimatedText text="You might also like" className="section-heading" stagger={30} />
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

            {showSuccessToast && (
                <div className={styles.formSuccessToast} role="status" aria-live="polite">
                    ✅ Submitted successfully.
                </div>
            )}
        </>
    );
}
