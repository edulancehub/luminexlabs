'use client';

/* ── Decorative SVG doodles for visual flair ── */

export function DoodleSparkle({ className, style }) {
    return (
        <svg className={className} style={style} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L18.5 13.5L30 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5L16 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );
}

export function DoodleStar({ className, style }) {
    return (
        <svg className={className} style={style} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 4L16.2 11.8L24 14L16.2 16.2L14 24L11.8 16.2L4 14L11.8 11.8L14 4Z" fill="currentColor" opacity="0.25" />
        </svg>
    );
}

export function DoodleCircle({ className, style }) {
    return (
        <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.35" />
        </svg>
    );
}

export function DoodleSquiggle({ className, style }) {
    return (
        <svg className={className} style={style} width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C10 4 18 20 26 12C34 4 42 20 50 12C58 4 66 20 74 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        </svg>
    );
}

export function DoodleArrowCurve({ className, style }) {
    return (
        <svg className={className} style={style} width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 42C10 10 50 6 54 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M48 24L54 30L46 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
        </svg>
    );
}

export function DoodlePlus({ className, style }) {
    return (
        <svg className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3V17M3 10H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.22" />
        </svg>
    );
}

export function DoodleDots({ className, style }) {
    return (
        <svg className={className} style={style} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0, 1, 2].map(r =>
                [0, 1, 2].map(c => (
                    <circle key={`${r}-${c}`} cx={8 + c * 16} cy={8 + r * 16} r="2.5" fill="currentColor" opacity="0.15" />
                ))
            )}
        </svg>
    );
}

export function DoodleZigzag({ className, style }) {
    return (
        <svg className={className} style={style} width="50" height="22" viewBox="0 0 50 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20L10 4L18 20L26 4L34 20L42 4L48 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
        </svg>
    );
}

export function DoodleSunBurst({ className, style }) {
    return (
        <svg className={className} style={style} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="5" fill="currentColor" opacity="0.2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
                const rad = (angle * Math.PI) / 180;
                return (
                    <line
                        key={angle}
                        x1={18 + Math.cos(rad) * 8}
                        y1={18 + Math.sin(rad) * 8}
                        x2={18 + Math.cos(rad) * 14}
                        y2={18 + Math.sin(rad) * 14}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.2"
                    />
                );
            })}
        </svg>
    );
}

export function DoodleWave({ className, style }) {
    return (
        <svg className={className} style={style} width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C12.5 0 12.5 20 25 10C37.5 0 37.5 20 50 10C62.5 0 62.5 20 75 10C87.5 0 87.5 20 100 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.18" />
        </svg>
    );
}

export function DoodleBrackets({ className, style }) {
    return (
        <svg className={className} style={style} width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L4 22L8 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
            <path d="M36 8L40 22L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.15" />
        </svg>
    );
}
