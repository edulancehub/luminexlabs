import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}><div className={styles.logoMark}>L</div> LuminexLabs</Link>
                        <p>Building the future with AI-driven solutions. Ideas into scalable, intelligent products.</p>
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/company/luminexlabs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                            <a href="https://x.com/luminexlabs" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">𝕏</a>
                            <a href="https://github.com/edulancehub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                            <a href="https://www.instagram.com/luminexlabs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="/services/ai-websites">AI Websites</Link></li>
                            <li><Link href="/services/ai-apps">AI Apps</Link></li>
                            <li><Link href="/services/rag">RAG Solutions</Link></li>
                            <li><Link href="/services/n8n">n8n Automation</Link></li>
                            <li><Link href="/services/cyber-security">Cyber Security</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="/services/chatbots">AI Chatbots</Link></li>
                            <li><Link href="/services/langchain">LangChain</Link></li>
                            <li><Link href="/services/consultancy">Consultancy</Link></li>
                            <li><Link href="/services/ai-business">AI for Business</Link></li>
                            <li><Link href="/#pricing">Pricing</Link></li>
                        </ul>
                    </div>
                    <div className={styles.col}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/#about">About Us</Link></li>
                            <li><Link href="/#presence">Global Presence</Link></li>
                            <li><Link href="/get-started">Get Started</Link></li>
                            <li><Link href="/get-started">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; 2026 LuminexLabs. All rights reserved.</p>
                    <p>Crafted with care and intelligence</p>
                </div>
            </div>
        </footer>
    );
}
