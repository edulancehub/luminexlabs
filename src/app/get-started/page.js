'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { DoodleSparkle, DoodleStar, DoodleSquiggle, DoodlePlus, DoodleWave } from '@/components/Doodles';
import AnimatedText from '@/components/AnimatedText';
import styles from './page.module.css';

function GetStartedForm() {
    const searchParams = useSearchParams();
    const plan = searchParams.get('plan');
    const [formState, handleSubmit] = useForm('xgollwde');
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    let defaultService = '';
    if (plan === 'website') defaultService = 'AI-Driven Website ($300)';
    else if (plan === 'app') defaultService = 'AI-Driven App ($500)';

    useEffect(() => {
        if (!formState.succeeded) return;
        setShowSuccessToast(true);
        const timer = setTimeout(() => setShowSuccessToast(false), 5000);
        return () => clearTimeout(timer);
    }, [formState.succeeded]);

    return (
        <>
            <section className={styles.hero}>
                <div className="bg-character" style={{ top: '10%', left: '5%', fontSize: '200px' }}>🚀</div>
                <div className="bg-character" style={{ bottom: '15%', right: '3%', fontSize: '200px' }}>💡</div>
                <DoodleSparkle className={styles.doodle} style={{ position: 'absolute', top: '15%', right: '12%', color: 'var(--accent)', opacity: 0.45 }} />
                <DoodleStar className={styles.doodle} style={{ position: 'absolute', bottom: '22%', left: '10%', color: 'var(--warm-lavender)', opacity: 0.35 }} />
                <DoodleSquiggle className={styles.doodle} style={{ position: 'absolute', bottom: '35%', right: '6%', color: 'var(--accent)', opacity: 0.25 }} />
                <DoodlePlus className={styles.doodle} style={{ position: 'absolute', top: '28%', left: '6%', color: 'var(--warm-peach)', opacity: 0.3 }} />
                <span className="section-eyebrow"><span className="dot" /> Get Started</span>
                <AnimatedText text="Let's bring your<br>idea to life" tag="h1" className="section-heading" style={{ maxWidth: 600 }} stagger={35} />
                <p className="section-desc mx-auto">Tell us about your project. We&apos;ll craft a tailored proposal and get back within 24 hours.</p>
            </section>

            <section className={styles.formSection}>
                <div className="container">
                    <div className={styles.formCard}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}><label htmlFor="gs-name">Full Name *</label><input id="gs-name" name="name" placeholder="John Doe" autoComplete="name" required /></div>
                                <div className={styles.formGroup}><label htmlFor="gs-email">Email Address *</label><input id="gs-email" type="email" name="email" placeholder="john@example.com" autoComplete="email" required />
                                    <ValidationError prefix="Email" field="email" errors={formState.errors} className={styles.formError} />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}><label htmlFor="gs-phone">Phone Number</label><input id="gs-phone" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" /></div>
                                <div className={styles.formGroup}><label htmlFor="gs-company">Company</label><input id="gs-company" name="company" placeholder="Your company name" autoComplete="organization" /></div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}><label htmlFor="gs-service">Service *</label>
                                    <select id="gs-service" name="service" required defaultValue={defaultService}>
                                        <option value="" disabled>Choose a service...</option>
                                        <option>AI-Driven Website ($300)</option>
                                        <option>AI-Driven App ($500)</option>
                                        <option>RAG Solutions</option>
                                        <option>n8n Automation</option>
                                        <option>LangFlow / LangChain</option>
                                        <option>Cyber Security</option>
                                        <option>AI Chatbot</option>
                                        <option>AI for Business</option>
                                        <option>AI Consultancy</option>
                                        <option>Other / Custom</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}><label htmlFor="gs-budget">Budget Range</label>
                                    <select id="gs-budget" name="budget" defaultValue="">
                                        <option value="" disabled>Select budget...</option>
                                        <option>Under $500</option>
                                        <option>$500 — $1,000</option>
                                        <option>$1,000 — $5,000</option>
                                        <option>$5,000+</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}><label htmlFor="gs-timeline">Timeline</label>
                                <select id="gs-timeline" name="timeline" defaultValue="">
                                    <option value="" disabled>Preferred timeline...</option>
                                    <option>ASAP — start immediately</option>
                                    <option>Within 1-2 weeks</option>
                                    <option>Within a month</option>
                                    <option>Flexible timeline</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}><label htmlFor="gs-message">Project Details *</label><textarea id="gs-message" name="message" placeholder="Describe your project, goals, and any specific requirements..." autoComplete="off" required style={{ minHeight: 160 }} />
                                <ValidationError prefix="Message" field="message" errors={formState.errors} className={styles.formError} />
                            </div>
                            <button type="submit" disabled={formState.submitting} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                                {formState.submitting ? 'Submitting...' : 'Submit Your Project →'}
                            </button>
                        </form>
                    </div>
                    <div className={styles.benefits}>
                        <div className={styles.benefitItem}><div className={styles.benefitIcon}>⚡</div><h4>Fast Delivery</h4><p>5–14 day turnaround</p></div>
                        <div className={styles.benefitItem}><div className={styles.benefitIcon}>🤝</div><h4>Dedicated Support</h4><p>Direct line to your team</p></div>
                        <div className={styles.benefitItem}><div className={styles.benefitIcon}>💰</div><h4>No Hidden Fees</h4><p>Transparent one-time pricing</p></div>
                    </div>
                </div>
            </section>

            {showSuccessToast && (
                <div className={styles.formSuccessToast} role="status" aria-live="polite">
                    ✅ Project request submitted successfully. We&apos;ll contact you shortly.
                </div>
            )}
        </>
    );
}

export default function GetStartedPage() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
            <GetStartedForm />
        </Suspense>
    );
}
