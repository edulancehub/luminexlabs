'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useForm, ValidationError } from '@formspree/react';
import { DoodleSparkle, DoodleStar, DoodleSquiggle, DoodleArrowCurve, DoodlePlus, DoodleDots, DoodleCircle, DoodleSunBurst, DoodleZigzag, DoodleWave } from '@/components/Doodles';
import AnimatedText from '@/components/AnimatedText';
import TechShowcase from '@/components/TechShowcase';
import HeroIllustration from '@/components/HeroIllustration';
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
  const pathname = usePathname();
  const contactFormRef = useRef(null);
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
    if (contactFormRef.current) contactFormRef.current.reset();
    setShowSuccessToast(true);
    const timer = setTimeout(() => setShowSuccessToast(false), 5000);
    return () => clearTimeout(timer);
  }, [formState.succeeded]);

  useEffect(() => {
    const pathToSection = {
      '/about': 'about',
      '/services': 'services',
      '/pricing': 'pricing',
      '/global': 'presence',
      '/contact': 'contact',
    };
    const section = pathToSection[pathname];
    if (!section) return;
    const scrollTo = () => {
      const target = document.getElementById(section);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const raf = requestAnimationFrame(scrollTo);
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        {/* Decorative doodles */}
        <DoodleSparkle className={styles.doodle} style={{ position: 'absolute', top: '14%', right: '12%', color: 'var(--accent)', opacity: 0.5, animation: 'float 5s ease-in-out infinite' }} />
        <DoodleStar className={styles.doodle} style={{ position: 'absolute', top: '22%', left: '8%', color: 'var(--warm-lavender)', opacity: 0.4, animation: 'float 6s ease-in-out infinite reverse' }} />
        <DoodleSquiggle className={styles.doodle} style={{ position: 'absolute', bottom: '28%', right: '6%', color: 'var(--accent)', opacity: 0.3 }} />
        <DoodleDots className={styles.doodle} style={{ position: 'absolute', bottom: '18%', left: '4%', color: 'var(--text-tertiary)', opacity: 0.25 }} />
        <DoodlePlus className={styles.doodle} style={{ position: 'absolute', top: '36%', right: '4%', color: 'var(--warm-peach)', opacity: 0.4 }} />
        <DoodleSunBurst className={styles.doodle} style={{ position: 'absolute', top: '8%', left: '15%', color: 'var(--accent)', opacity: 0.25 }} />

        <div className={styles.pills}>
          <Link href="/services/ai-websites" className={styles.pill}><span>🤖</span><div><strong>AI Solutions</strong><small>Intelligence that delivers.</small></div></Link>
          <Link href="/services/ai-apps" className={styles.pill}><span>📱</span><div><strong>Web & Apps</strong><small>Platforms that perform.</small></div></Link>
          <Link href="/services/cyber-security" className={styles.pill}><span>🔒</span><div><strong>Cyber Security</strong><small>Protection that scales.</small></div></Link>
        </div>

        <div className={styles.heroSplit}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>✨ AI-Powered Software Agency</div>
            <AnimatedText text="Your trusted <em>AI-driven</em><br>software partner" tag="h1" className={styles.heroTitle} stagger={35} />
            <p className={styles.heroSubtitle}>We build intelligent software — AI-powered websites, smart apps, RAG pipelines, and automation systems that make the most impact.</p>
            <div className={styles.heroCta}>
              <Link href="/get-started" className="btn btn-accent">Get Started 🚀</Link>
              <Link href="/services/ai-websites" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
          <div className={styles.heroIllustration}>
            <HeroIllustration style={{ width: '100%', maxWidth: 480, height: 'auto' }} />
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
          <div className={styles.aboutGrid}>
            <div className={styles.portfolioShowcase + ' reveal'}>
              <a href="https://sayasjapanese.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioCard}>
                <Image src="/portfolio-web.png" alt="Sayas Japanese — Restaurant Website" width={600} height={400} className={styles.portfolioImg} />
                <div className={styles.portfolioLabel}><span>sayasjapanese.com</span><span className={styles.tag}>Recent Project</span></div>
              </a>
              <div className={styles.portfolioRow}>
                <a href="https://monojog.app" target="_blank" rel="noopener noreferrer" className={styles.portfolioCardSmall}>
                  <Image src="/portfolio-ai.png" alt="Monojog — AI Platform" width={280} height={200} className={styles.portfolioImg} />
                  <div className={styles.portfolioLabel}><span>monojog.app</span><span className={styles.tag}>Web App</span></div>
                </a>
                <a href="https://bongoportus.com" target="_blank" rel="noopener noreferrer" className={styles.portfolioCardSmall}>
                  <Image src="/portfolio-app.png" alt="BongoPortus — Digital Platform" width={280} height={200} className={styles.portfolioImg} />
                  <div className={styles.portfolioLabel}><span>bongoportus.com</span><span className={styles.tag}>Website</span></div>
                </a>
              </div>
              <div className={styles.portfolioCardSmall}>
                <Image src="/portfolio-app.png" alt="Monojog Mobile App" width={280} height={200} className={styles.portfolioImg} />
                <div className={styles.portfolioLabel}><span>Monojog Mobile App</span><span className={styles.tag}>Mobile App</span></div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <span className="section-eyebrow"><span className="dot" /> Who we are</span>
              <AnimatedText text="We are a human-first creative studio" className="section-heading" stagger={25} />
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
          <DoodleArrowCurve className={styles.doodle} style={{ position: 'absolute', top: '6%', right: '8%', color: 'var(--accent)', opacity: 0.3 }} />
          <DoodleCircle className={styles.doodle} style={{ position: 'absolute', bottom: '12%', left: '3%', color: 'var(--warm-lavender)', opacity: 0.25 }} />
          <DoodleZigzag className={styles.doodle} style={{ position: 'absolute', bottom: '8%', right: '5%', color: 'var(--accent)', opacity: 0.2 }} />
          <div className={styles.servicesHeader + ' reveal'}>
            <div>
              <span className="section-eyebrow"><span className="dot" /> Services</span>
              <AnimatedText text="What we do" className="section-heading" stagger={40} />
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
            <AnimatedText text="Industries we dominate" className="section-heading" stagger={30} />
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
            <AnimatedText text="Our tech stack" className="section-heading" stagger={40} />
            <p className="section-desc mx-auto">Real tools. Real engineering. Real outcomes — powered by world-class platforms.</p>
          </div>
          <div className={styles.techMeta + ' reveal'}>
            <div><strong>32+</strong><span>Core Technologies</span></div>
            <div><strong>8</strong><span>Product Categories</span></div>
            <div><strong>24/7</strong><span>Production Monitoring</span></div>
          </div>
          <TechShowcase logos={techLogos} interval={3500} />
        </div>
      </section>

      {/* PRICING */}
      <section className="section section-cream" id="pricing">
        <div className="container">
          <div className={styles.pricingHeader + ' reveal'}>
            <span className="section-eyebrow"><span className="dot" /> Pricing</span>
            <AnimatedText text="Simple, transparent pricing" className="section-heading" stagger={28} />
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
            <span className="section-eyebrow"><span className="dot" /> Virtual Offices</span>
            <AnimatedText text="We operate globally" className="section-heading" stagger={35} />
            <p className="section-desc mx-auto">Four strategic virtual offices ensuring round-the-clock availability across every timezone.</p>
          </div>
          <div className={styles.presenceGrid}>
            {[
              { name: 'Saudi Arabia', label: 'Middle East Virtual Office', shift: 'UTC+3 · Arabic & English Support', image: '/office-sa.svg' },
              { name: 'United States', label: 'North America Virtual Office', shift: 'UTC-5 · EST & PST Coverage', image: '/office-us.svg' },
              { name: 'United Kingdom', label: 'Europe Virtual Office', shift: 'UTC+0 · EMEA Coordination Hub', image: '/office-uk.svg' },
              { name: 'Dhaka', label: 'South Asia Virtual Office', shift: 'UTC+6 · Engineering Delivery Center', image: '/office-bd.svg' }
            ].map(c => (
              <div key={c.name} className={`${styles.presenceCard} reveal`}>
                <div className={styles.presenceOfficeWrap}>
                  <Image
                    src={c.image}
                    alt={`${c.name} virtual office`}
                    width={640}
                    height={420}
                    className={styles.presenceOfficeImg}
                  />
                </div>
                <h3>{c.name}</h3>
                <p>{c.label}</p>
                <span className={styles.presenceShift}>{c.shift}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section section-cream" id="contact">
        <div className="container">
          <DoodleWave className={styles.doodle} style={{ position: 'absolute', top: '10%', right: '6%', color: 'var(--accent)', opacity: 0.2 }} />
          <DoodleSparkle className={styles.doodle} style={{ position: 'absolute', bottom: '15%', left: '5%', color: 'var(--warm-lavender)', opacity: 0.3 }} />
          <DoodlePlus className={styles.doodle} style={{ position: 'absolute', top: '18%', left: '8%', color: 'var(--accent)', opacity: 0.2 }} />
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-eyebrow"><span className="dot" /> Contact</span>
            <AnimatedText text="Ready to get started?" className="section-heading" stagger={30} />
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
            <div className={styles.formCard}>
              <form onSubmit={handleSubmit} ref={contactFormRef}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}><label htmlFor="home-name">Full Name *</label><input id="home-name" name="name" placeholder="John Doe" autoComplete="name" required /></div>
                  <div className={styles.formGroup}><label htmlFor="home-email">Email *</label><input id="home-email" type="email" name="email" placeholder="john@example.com" autoComplete="email" required />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className={styles.formError} />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}><label htmlFor="home-phone">Phone</label><input id="home-phone" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" /></div>
                  <div className={styles.formGroup}><label htmlFor="home-service">Service *</label>
                    <select id="home-service" name="service" required defaultValue="">
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
                <div className={styles.formGroup}><label htmlFor="home-message">Project Details *</label><textarea id="home-message" name="message" placeholder="Tell us about your project..." autoComplete="off" required />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} className={styles.formError} />
                </div>
                <button type="submit" disabled={formState.submitting} className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                  {formState.submitting ? 'Sending...' : 'Send Message →'}
                </button>
                {formState.submitting && <p className={styles.formStatus}>Submitting your message...</p>}
                {formState.succeeded && <p className={`${styles.formStatus} ${styles.formStatusSuccess}`}>✅ Submitted successfully. We&apos;ll contact you soon.</p>}
                {!formState.submitting && !formState.succeeded && Array.isArray(formState.errors) && formState.errors.length > 0 && (
                  <p className={`${styles.formStatus} ${styles.formStatusError}`}>Could not submit right now. Please try again.</p>
                )}
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
