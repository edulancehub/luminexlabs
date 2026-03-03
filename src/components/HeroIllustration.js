'use client';

/**
 * HeroIllustration — A colorful, playful cartoon-style SVG illustration
 * inspired by the AgencyUI design. Shows a team collaborating around
 * a monitor with abstract decorative shapes.
 */
export default function HeroIllustration({ className = '', style = {} }) {
    return (
        <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
            {/* Background blob */}
            <ellipse cx="260" cy="240" rx="190" ry="160" fill="#fef3ec" opacity="0.6" />

            {/* Desk / table */}
            <rect x="110" y="280" width="280" height="12" rx="6" fill="#2d2d2d" />
            <rect x="200" y="292" width="8" height="60" rx="4" fill="#555" />
            <rect x="292" y="292" width="8" height="60" rx="4" fill="#555" />
            <rect x="180" y="348" width="140" height="8" rx="4" fill="#444" />

            {/* Monitor */}
            <rect x="155" y="170" width="190" height="115" rx="10" fill="#1a1a2e" stroke="#333" strokeWidth="3" />
            <rect x="165" y="180" width="170" height="92" rx="4" fill="#0f3460" />

            {/* Screen content — small UI elements */}
            <rect x="175" y="192" width="50" height="6" rx="3" fill="#e8734a" opacity="0.9" />
            <rect x="175" y="204" width="80" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
            <rect x="175" y="214" width="65" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="175" y="224" width="72" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

            {/* Screen mini chart */}
            <polyline points="280,250 290,240 300,245 310,228 322,235" stroke="#e8734a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="322" cy="235" r="3" fill="#e8734a" />

            {/* Screen video call faces */}
            <rect x="175" y="238" width="30" height="24" rx="4" fill="#16213e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="190" cy="247" r="6" fill="#ffd3b6" />
            <circle cx="188" cy="245" r="1.2" fill="#333" />
            <circle cx="192" cy="245" r="1.2" fill="#333" />
            <path d="M186 250 Q190 253 194 250" stroke="#333" strokeWidth="0.8" fill="none" />

            <rect x="210" y="238" width="30" height="24" rx="4" fill="#16213e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="225" cy="247" r="6" fill="#c4b5d4" />
            <circle cx="223" cy="245" r="1.2" fill="#333" />
            <circle cx="227" cy="245" r="1.2" fill="#333" />
            <path d="M221 250 Q225 253 229 250" stroke="#333" strokeWidth="0.8" fill="none" />

            <rect x="245" y="238" width="30" height="24" rx="4" fill="#16213e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="260" cy="247" r="6" fill="#a8e6cf" />
            <circle cx="258" cy="245" r="1.2" fill="#333" />
            <circle cx="262" cy="245" r="1.2" fill="#333" />
            <path d="M256 250 Q260 253 264 250" stroke="#333" strokeWidth="0.8" fill="none" />

            {/* Person 1 — Left side (sitting, waving) */}
            <g transform="translate(60, 180)">
                {/* Body */}
                <ellipse cx="45" cy="85" rx="25" ry="18" fill="#e8734a" />
                {/* Head */}
                <circle cx="45" cy="52" r="20" fill="#ffd3b6" />
                {/* Hair */}
                <path d="M25 48 Q30 28 50 30 Q68 32 65 48" fill="#2d2d2d" />
                {/* Eyes */}
                <circle cx="38" cy="52" r="2.5" fill="#1a1a2e" />
                <circle cx="52" cy="52" r="2.5" fill="#1a1a2e" />
                <circle cx="39" cy="51" r="0.8" fill="white" />
                <circle cx="53" cy="51" r="0.8" fill="white" />
                {/* Smile */}
                <path d="M38 60 Q45 67 52 60" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Waving arm */}
                <path d="M15 80 Q-5 55 10 35" stroke="#ffd3b6" strokeWidth="8" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" values="0 15 80;-12 15 80;0 15 80" dur="2s" repeatCount="indefinite" />
                </path>
                {/* Hand */}
                <circle cx="10" cy="35" r="5" fill="#ffd3b6">
                    <animateTransform attributeName="transform" type="rotate" values="0 15 80;-12 15 80;0 15 80" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Person 2 — Right side (standing, pointing at monitor) */}
            <g transform="translate(340, 155)">
                {/* Body */}
                <rect x="15" y="65" width="45" height="70" rx="14" fill="#0f3460" />
                {/* Head */}
                <circle cx="37" cy="42" r="22" fill="#c4b5d4" />
                {/* Hair */}
                <path d="M15 35 Q20 10 42 15 Q60 18 58 40" fill="#2d2d2d" />
                {/* Glasses */}
                <circle cx="30" cy="42" r="7" fill="none" stroke="#555" strokeWidth="1.5" />
                <circle cx="44" cy="42" r="7" fill="none" stroke="#555" strokeWidth="1.5" />
                <line x1="37" y1="42" x2="37" y2="42" stroke="#555" strokeWidth="1.5" />
                {/* Eyes behind glasses */}
                <circle cx="30" cy="42" r="2" fill="#1a1a2e" />
                <circle cx="44" cy="42" r="2" fill="#1a1a2e" />
                {/* Smile */}
                <path d="M30 52 Q37 58 44 52" stroke="#8e6db0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Pointing arm */}
                <path d="M15 80 Q-10 70 -25 60" stroke="#c4b5d4" strokeWidth="7" fill="none" strokeLinecap="round" />
                <circle cx="-25" cy="60" r="4" fill="#c4b5d4" />
            </g>

            {/* Decorative elements — squiggle */}
            <path d="M380 100 Q395 85 410 100 Q425 115 440 100" stroke="#e8734a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7">
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Decorative — sparkle/star */}
            <g transform="translate(420, 140)" opacity="0.8">
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="-7" y1="-7" x2="7" y2="7" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="7" y1="-7" x2="-7" y2="7" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
                <animateTransform attributeName="transform" type="rotate" values="0 420 140;360 420 140" dur="8s" repeatCount="indefinite" additive="sum" />
            </g>

            {/* Decorative — circle dot */}
            <circle cx="440" cy="185" r="8" fill="#e8734a" opacity="0.6">
                <animate attributeName="r" values="8;10;8" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Decorative — curly bracket / swirl top-left */}
            <path d="M90 130 Q80 120 85 108 Q92 95 82 86" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
            <path d="M95 130 Q110 120 105 108 Q98 95 108 86" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

            {/* Decorative — small triangles */}
            <polygon points="75,160 80,150 85,160" fill="#e8734a" opacity="0.4">
                <animateTransform attributeName="transform" type="translate" values="0,0;0,-4;0,0" dur="2s" repeatCount="indefinite" />
            </polygon>

            {/* Bottom decoration — colorful confetti */}
            <circle cx="130" cy="370" r="4" fill="#e8734a" opacity="0.5" />
            <circle cx="370" cy="365" r="3" fill="#c4b5d4" opacity="0.5" />
            <rect x="300" y="372" width="8" height="4" rx="2" fill="#0f3460" opacity="0.3" transform="rotate(20 304 374)" />
            <rect x="160" y="368" width="6" height="4" rx="2" fill="#e8734a" opacity="0.3" transform="rotate(-15 163 370)" />
        </svg>
    );
}
