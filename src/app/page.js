'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import {
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiMeta,
  SiLangchain,
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
  SiVercel,
  SiStripe,
  SiTwilio,
  SiFigma,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiGithubactions,
  SiDatadog,
  SiSentry
} from 'react-icons/si';
import styles from './page.module.css';

const techLogos = [
  { name: 'OpenAI', icon: SiOpenai, color: '#10a37f' },
  { name: 'Anthropic', icon: SiAnthropic, color: '#d4a373' },
  { name: 'Gemini', icon: SiGoogle, color: '#4285F4' },
  { name: 'Meta AI', icon: SiMeta, color: '#0866FF' },
  { name: 'LangChain', icon: SiLangchain, color: '#ffffff' },
  { name: 'Hugging Face', icon: SiHuggingface, color: '#ffd21e' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
  { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Redis', icon: SiRedis, color: '#dc382d' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ecf8e' },
  { name: 'Firebase', icon: SiFirebase, color: '#ffca28' },
  { name: 'AWS', icon: SiAmazon, color: '#ff9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#f38020' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
  { name: 'Stripe', icon: SiStripe, color: '#635bff' },
  { name: 'Twilio', icon: SiTwilio, color: '#f22f46' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
  { name: 'Framer', icon: SiFramer, color: '#0055ff' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088ff' },
  { name: 'Datadog', icon: SiDatadog, color: '#632ca6' },
  { name: 'Sentry', icon: SiSentry, color: '#ffffff' }
];

export default function Home() {
  const [formState, handleSubmit] = useForm('xgollwde');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Counter animation
    document.querySelectorAll('[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 30);
    });

    // Scroll zoom
    const hero = document.querySelector(`.${styles.hero}`);
    if (hero) {
      const onScroll = () => {
        const progress = Math.min(window.scrollY / (hero.offsetHeight * 0.7), 1);
        hero.style.transform = `scale(${1 - progress * 0.08})`;
        hero.style.borderRadius = `${progress * 32}px`;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    if (!formState.succeeded) return;
    setShowSuccessToast(true);
    const timer = setTimeout(() => setShowSuccessToast(false), 5000);
    return () => clearTimeout(timer);
  }, [formState.succeeded]);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className="bg-character" style={{ top: '25%', right: '-2%', transform: 'rotate(8deg)' }}>🤖</div>
        <div className="bg-character" style={{ bottom: '12%', left: '6%', transform: 'rotate(5deg)' }}>🌐</div>

        <div className={styles.pills}>
          <Link href="/services/ai-websites" className={styles.pill}><span>🤖</span><div><strong>AI Solutions</strong><small>Intelligence that delivers.</small></div></Link>
          <Link href="/services/ai-apps" className={styles.pill}><span>📱</span><div><strong>Web & Apps</strong><small>Platforms that perform.</small></div></Link>
          <Link href="/services/cyber-security" className={styles.pill}><span>🔒</span><div><strong>Cyber Security</strong><small>Protection that scales.</small></div></Link>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>✨ AI-Powered Software Agency</div>
          <h1 className={styles.heroTitle}>Your trusted <em>AI-driven</em><br />software partner</h1>
          <p className={styles.heroSubtitle}>We build intelligent software — AI-powered websites, smart apps, RAG pipelines, and automation systems that make the most impact.</p>
          <div className={styles.heroCta}>
            <Link href="/get-started" className="btn btn-accent">Get Started 🚀</Link>
            <Link href="/#services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}><div className={styles.statNumber} data-target="150" data-suffix="+">0</div><div className={styles.statLabel}>Projects</div></div>
          <div className={styles.stat}><div className={styles.statNumber} data-target="50" data-suffix="+">0</div><div className={styles.statLabel}>Clients</div></div>
          <div className={styles.stat}><div className={styles.statNumber} data-target="4" data-suffix="">0</div><div className={styles.statLabel}>Countries</div></div>
          <div className={styles.stat}><div className={styles.statNumber} data-target="99" data-suffix="%">0</div><div className={styles.statLabel}>Satisfaction</div></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {['Strategic AI Solutions', 'Results Driven', 'Business Value', 'Creative Technology', 'Global Operations', 'AI Automation', 'Intelligent Design', 'Enterprise Security', 'Strategic AI Solutions', 'Results Driven', 'Business Value', 'Creative Technology', 'Global Operations', 'AI Automation', 'Intelligent Design', 'Enterprise Security'].map((t, i) => (
            <span className="marquee-item" key={i}>{t} <span className="sep" /></span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO / ABOUT */}
      <section className="section section-cream" id="about">
        <div className="container">
          <div className="bg-character" style={{ top: '5%', right: '2%' }}>💡</div>
          <div className={styles.aboutGrid}>
            <div className={styles.portfolioShowcase + ' reveal'}>
              <div className={styles.portfolioCard}>
                <Image src="/portfolio-web.png" alt="AI Dashboard — Website Project" width={600} height={400} className={styles.portfolioImg} />
                <div className={styles.portfolioLabel}><span>AI Dashboard</span><span className={styles.tag}>Website</span></div>
              </div>
              <div className={styles.portfolioRow}>
                <div className={styles.portfolioCardSmall}>
                  <Image src="/portfolio-app.png" alt="Mobile App Project" width={280} height={200} className={styles.portfolioImg} />
                  <div className={styles.portfolioLabel}><span>Smart App</span><span className={styles.tag}>Mobile</span></div>
                </div>
                <div className={styles.portfolioCardSmall}>
                  <Image src="/portfolio-ai.png" alt="AI Automation Project" width={280} height={200} className={styles.portfolioImg} />
                  <div className={styles.portfolioLabel}><span>AI Automation</span><span className={styles.tag}>Pipeline</span></div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-eyebrow"><span className="dot" /> Who we are</span>
              <h2 className="section-heading">We are a human-first creative studio</h2>
              <p className="section-desc">We believe in purposeful design to solve real business challenges. Every line of code, every model, and every interaction is crafted with intent.</p>
              <p className={styles.aboutSecondary}>For us, AI isn't just technology — it's a strategic tool that helps real people achieve lasting success.</p>
              <Link href="/get-started" className="btn btn-accent">Start a project →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-white" id="services">
        <div className="container">
          <div className="bg-character" style={{ top: '8%', left: '-5%' }}>⚙️</div>
          <div className={styles.servicesHeader + ' reveal'}>
            <div>
              <span className="section-eyebrow"><span className="dot" /> Services</span>
              <h2 className="section-heading">What we do</h2>
            </div>
            <p className="section-desc">From concept to deployment, end-to-end solutions designed around real people.</p>
          </div>
          <div className={styles.servicesList}>
            {[
              { slug: 'ai-websites', num: '01', name: 'AI-Driven Websites', emoji: '🌐' },
              { slug: 'ai-apps', num: '02', name: 'AI-Driven Apps', emoji: '📱' },
              { slug: 'rag', num: '03', name: 'RAG Solutions', emoji: '🧠' },
              { slug: 'n8n', num: '04', name: 'n8n Automation', emoji: '⚡' },
              { slug: 'langchain', num: '05', name: 'LangFlow & LangChain', emoji: '🔗' },
              { slug: 'cyber-security', num: '06', name: 'Cyber Security', emoji: '🛡️' },
              { slug: 'chatbots', num: '07', name: 'AI Chatbots & Agents', emoji: '💬' },
              { slug: 'ai-business', num: '08', name: 'AI for Business', emoji: '📊' },
              { slug: 'consultancy', num: '09', name: 'AI Consultancy', emoji: '🎯' }
            ].map((s, i) => (
              <Link href={`/services/${s.slug}`} key={s.slug} className={`${styles.serviceRow} reveal ${i % 2 ? 'reveal-delay-1' : ''}`}>
                <span className={styles.serviceNum}>{s.num}</span>
                <span className={styles.serviceName}>{s.name}</span>
                <span className={styles.serviceEmoji}>{s.emoji}</span>
                <div className={styles.serviceArrow}>→</div>
              </Link>
            ))}
          </div>
          <div className="text-center reveal" style={{ marginTop: '56px' }}>
            <Link href="/get-started" className="btn btn-accent">Start Your Project →</Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE RADAR */}
      <section className={`section ${styles.expertiseSection}`} id="expertise">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-eyebrow"><span className="dot" /> Expertise</span>
            <h2 className="section-heading">Industries we dominate</h2>
            <p className="section-desc mx-auto">Deep domain expertise across eight critical industries, powered by AI.</p>
          </div>
          <div className={styles.radarWrapper + ' reveal'}>
            <div className={styles.radarChart}>
              {/* SVG Radar / Spider Chart */}
              <svg viewBox="0 0 500 500" className={styles.radarSvg}>
                {/* Grid rings */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    className={styles.radarRing}
                    points={[0, 1, 2, 3, 4, 5, 6, 7].map(j => {
                      const angle = (Math.PI * 2 * j) / 8 - Math.PI / 2;
                      return `${250 + Math.cos(angle) * 180 * scale},${250 + Math.sin(angle) * 180 * scale}`;
                    }).join(' ')}
                  />
                ))}
                {/* Axis lines */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map(j => {
                  const angle = (Math.PI * 2 * j) / 8 - Math.PI / 2;
                  return (
                    <line
                      key={j}
                      x1="250" y1="250"
                      x2={250 + Math.cos(angle) * 180}
                      y2={250 + Math.sin(angle) * 180}
                      className={styles.radarAxis}
                    />
                  );
                })}
                {/* Data shape */}
                <polygon
                  className={styles.radarShape}
                  points={[
                    { v: 0.92 }, { v: 0.78 }, { v: 0.85 }, { v: 0.7 },
                    { v: 0.88 }, { v: 0.65 }, { v: 0.8 }, { v: 0.75 }
                  ].map((d, j) => {
                    const angle = (Math.PI * 2 * j) / 8 - Math.PI / 2;
                    return `${250 + Math.cos(angle) * 180 * d.v},${250 + Math.sin(angle) * 180 * d.v}`;
                  }).join(' ')}
                />
                {/* Data dots */}
                {[
                  { v: 0.92 }, { v: 0.78 }, { v: 0.85 }, { v: 0.7 },
                  { v: 0.88 }, { v: 0.65 }, { v: 0.8 }, { v: 0.75 }
                ].map((d, j) => {
                  const angle = (Math.PI * 2 * j) / 8 - Math.PI / 2;
                  return (
                    <circle
                      key={j}
                      cx={250 + Math.cos(angle) * 180 * d.v}
                      cy={250 + Math.sin(angle) * 180 * d.v}
                      r="5"
                      className={styles.radarDot}
                    />
                  );
                })}
              </svg>
              {/* Labels around the chart */}
              {[
                { label: 'AI', icon: '🤖', pos: 'top' },
                { label: 'FinTech', icon: '💰', pos: 'topRight' },
                { label: 'EdTech', icon: '📚', pos: 'right' },
                { label: 'Logistics', icon: '🚚', pos: 'bottomRight' },
                { label: 'SaaS', icon: '☁️', pos: 'bottom' },
                { label: 'PropTech', icon: '🏠', pos: 'bottomLeft' },
                { label: 'HealthTech', icon: '🏥', pos: 'left' },
                { label: 'CRM', icon: '📊', pos: 'topLeft' }
              ].map((item, i) => (
                <div key={i} className={`${styles.radarLabel} ${styles['radarLabel_' + item.pos]}`}>
                  <span className={styles.radarLabelIcon}>{item.icon}</span>
                  <span className={styles.radarLabelText}>{item.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.expertiseRight}>
              <h3 className={styles.expertiseTitle}>We don&apos;t just build software — <em>we solve industry problems</em></h3>
              <p className={styles.expertiseDesc}>Our team brings deep vertical expertise across AI, FinTech, EdTech, HealthTech, and more. We understand your domain so we can ship faster and smarter.</p>
              <div className={styles.expertiseStats}>
                {[
                  { num: '8+', label: 'Industries' },
                  { num: '92%', label: 'AI Expertise' },
                  { num: '150+', label: 'Projects Shipped' }
                ].map(s => (
                  <div key={s.label} className={styles.expertiseStat}>
                    <strong>{s.num}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/get-started" className="btn btn-accent">Fix Your Product 🚀</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className={`section ${styles.techSection}`} id="techstack">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-eyebrow"><span className="dot" /> Technology</span>
            <h2 className="section-heading">Our tech stack</h2>
            <p className="section-desc mx-auto">Real tools. Real engineering. Real outcomes — powered by world-class platforms.</p>
          </div>
          <div className={styles.techMeta + ' reveal'}>
            <div><strong>32+</strong><span>Core Technologies</span></div>
            <div><strong>8</strong><span>Product Categories</span></div>
            <div><strong>24/7</strong><span>Production Monitoring</span></div>
          </div>
          <div className={styles.techLogoGrid + ' reveal'}>
            {techLogos.map(({ name, icon: Icon, color }) => (
              <div key={name} className={styles.techLogoCard}>
                <Icon className={styles.techLogoIcon} style={{ color }} aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-cream" id="pricing">
        <div className="container">
          <div className={styles.pricingHeader + ' reveal'}>
            <span className="section-eyebrow"><span className="dot" /> Pricing</span>
            <h2 className="section-heading">Simple, transparent pricing</h2>
            <p className="section-desc mx-auto">No hidden fees. One-time payment for handcrafted AI-driven products.</p>
          </div>
          <div className={styles.pricingGrid}>
            <div className={`${styles.pricingCard} reveal`}>
              <div className={styles.cardType}>Website</div>
              <h3>AI-Driven Website</h3>
              <div className={styles.priceRow}><span className={styles.currency}>$</span><span className={styles.price}>300</span></div>
              <p className={styles.period}>One-time · Delivered in 5–7 days</p>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {['Fully responsive premium design', 'AI-powered chatbot', 'SEO optimized', 'Smart personalization', 'Contact forms & analytics', '30 days free support'].map(f => (
                  <li key={f}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/get-started?plan=website" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured} reveal reveal-delay-1`}>
              <span className={styles.badge}>Most Popular</span>
              <div className={styles.cardType}>Application</div>
              <h3>AI-Driven App</h3>
              <div className={styles.priceRow}><span className={styles.currency}>$</span><span className={styles.price}>500</span></div>
              <p className={styles.period}>One-time · Delivered in 10–14 days</p>
              <div className={styles.divider} />
              <ul className={styles.features}>
                {['iOS & Android cross-platform', 'AI features & smart UI', 'Push notifications & analytics', 'Backend & API integration', 'App Store & Play Store deploy', '60 days free support'].map(f => (
                  <li key={f}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>
              <Link href="/get-started?plan=app" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Get Started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="section section-white" id="presence">
        <div className="container">
          <div className="text-center reveal">
            <span className="section-eyebrow"><span className="dot" /> Global</span>
            <h2 className="section-heading">We operate globally</h2>
            <p className="section-desc mx-auto">Four strategic locations ensuring round-the-clock availability.</p>
          </div>
          <div className={styles.presenceGrid}>
            {[
              { flag: '🇸🇦', name: 'Saudi Arabia', label: 'Middle East Ops' },
              { flag: '🇺🇸', name: 'United States', label: 'North America Ops' },
              { flag: '🇬🇧', name: 'United Kingdom', label: 'Europe Ops' },
              { flag: '🇧🇩', name: 'Dhaka', label: 'South Asia Ops' }
            ].map(c => (
              <div key={c.name} className={`${styles.presenceCard} reveal`}>
                <div className={styles.presenceFlag}>{c.flag}</div>
                <h3>{c.name}</h3>
                <p>{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-cream" id="contact">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-eyebrow"><span className="dot" /> Contact</span>
            <h2 className="section-heading">Ready to get started?</h2>
            <p className="section-desc mx-auto">Tell us about your project and we'll get back within 24 hours.</p>
          </div>
          <div className={styles.contactWrapper}>
            <div className="reveal">
              <h3 className={styles.contactTitle}>Let's build something intelligent together</h3>
              <p className={styles.contactDesc}>Whether you need an AI-driven website, a smart app, or enterprise AI — we transform your vision into reality.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}><div className={styles.detailIcon}>✉️</div><div><strong>Email Us</strong><p>hello@luminexlabs.com</p></div></div>
                <div className={styles.contactDetail}><div className={styles.detailIcon}>⏱️</div><div><strong>Response Time</strong><p>Within 24 hours</p></div></div>
                <div className={styles.contactDetail}><div className={styles.detailIcon}>🌍</div><div><strong>Operating From</strong><p>🇸🇦 🇺🇸 🇬🇧 🇧🇩</p></div></div>
              </div>
            </div>
            <div className={styles.formCard + ' reveal reveal-delay-2'}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}><label>Full Name *</label><input name="name" placeholder="John Doe" required /></div>
                  <div className={styles.formGroup}><label>Email *</label><input type="email" name="email" placeholder="john@example.com" required />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className={styles.formError} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}><label>Phone</label><input name="phone" placeholder="+1 (555) 000-0000" /></div>
                  <div className={styles.formGroup}><label>Service *</label>
                    <select name="service" required defaultValue="">
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
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}><label>Project Details *</label><textarea name="message" placeholder="Tell us about your project..." required />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} className={styles.formError} />
                </div>
                <button type="submit" disabled={formState.submitting} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                  {formState.submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showSuccessToast && (
        <div className={styles.formSuccessToast} role="status" aria-live="polite">
          ✅ Message submitted successfully. We&apos;ll get back to you within 24 hours.
        </div>
      )}
    </>
  );
}
