'use client';
import { useEffect, useState } from 'react';
import styles from './TechShowcase.module.css';

/**
 * TechShowcase — displays tech logos in a dark 4×2 grid that cycles through
 * batches of 8 logos with a staggered reveal animation.
 *
 * Props:
 *  - logos: array of { name, icon: ReactIconComponent, color }
 *  - interval: ms between page changes (default 3500)
 */
export default function TechShowcase({ logos = [], interval = 3000 }) {
    const [page, setPage] = useState(0);
    const [animating, setAnimating] = useState(true);

    const pageSize = 8;
    const totalPages = Math.ceil(logos.length / pageSize);

    // Always rotate — continuous auto-play
    useEffect(() => {
        if (totalPages <= 1) return;
        const timer = setInterval(() => {
            setAnimating(false);
            setTimeout(() => {
                setPage(p => (p + 1) % totalPages);
                setAnimating(true);
            }, 250);
        }, interval);
        return () => clearInterval(timer);
    }, [totalPages, interval]);

    const start = page * pageSize;
    const visibleLogos = logos.slice(start, start + pageSize);

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {visibleLogos.map(({ name, icon: Icon, color }, i) => (
                    <div
                        key={`${page}-${name}`}
                        className={`${styles.card} ${animating ? styles.cardVisible : styles.cardHidden}`}
                        style={{ transitionDelay: animating ? `${i * 80}ms` : '0ms' }}
                    >
                        <Icon className={styles.icon} style={{ color }} aria-hidden="true" />
                        <span className={styles.label}>{name}</span>
                    </div>
                ))}
            </div>
            {/* Page indicator dots */}
            <div className={styles.dots}>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                        onClick={() => { setAnimating(false); setTimeout(() => { setPage(i); setAnimating(true); }, 200); }}
                        aria-label={`Page ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
