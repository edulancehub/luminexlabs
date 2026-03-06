'use client';

/**
 * HeroIllustration — Abstract technology / AI visualization.
 * Geometric shapes, circuit-like patterns, neural network nodes,
 * and glowing accent orbs. Clean, modern, dark-theme native.
 */
export default function HeroIllustration({ className = '', style = {} }) {
    return (
        <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
            <defs>
                <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#e8734a" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#e8734a" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c4b5d4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#c4b5d4" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8734a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#c4b5d4" stopOpacity="0.3" />
                </linearGradient>
            </defs>

            {/* Ambient glow orbs */}
            <ellipse cx="320" cy="160" rx="120" ry="100" fill="url(#glow1)" />
            <ellipse cx="180" cy="280" rx="100" ry="90" fill="url(#glow2)" />

            {/* Central hexagonal frame */}
            <polygon points="250,60 340,112 340,218 250,270 160,218 160,112" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
            <polygon points="250,80 328,124 328,206 250,250 172,206 172,124" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {/* Inner rotating hexagon */}
            <g opacity="0.6">
                <polygon points="250,100 310,135 310,195 250,230 190,195 190,135" fill="none" stroke="#e8734a" strokeWidth="0.8" strokeDasharray="4 6">
                    <animateTransform attributeName="transform" type="rotate" values="0 250 165;360 250 165" dur="40s" repeatCount="indefinite" />
                </polygon>
            </g>

            {/* AI brain / neural network nodes */}
            {/* Center node */}
            <circle cx="250" cy="165" r="8" fill="#e8734a" opacity="0.9">
                <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="165" r="16" fill="none" stroke="#e8734a" strokeWidth="0.5" opacity="0.4">
                <animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Network nodes — ring 1 */}
            <circle cx="200" cy="130" r="4" fill="#c4b5d4" opacity="0.8" />
            <circle cx="300" cy="130" r="4" fill="#c4b5d4" opacity="0.8" />
            <circle cx="320" cy="175" r="3.5" fill="#f5c9b3" opacity="0.7" />
            <circle cx="180" cy="175" r="3.5" fill="#f5c9b3" opacity="0.7" />
            <circle cx="210" cy="215" r="4" fill="#c4b5d4" opacity="0.8" />
            <circle cx="290" cy="215" r="4" fill="#c4b5d4" opacity="0.8" />

            {/* Connections from center to ring 1 */}
            <line x1="250" y1="165" x2="200" y2="130" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />
            <line x1="250" y1="165" x2="300" y2="130" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />
            <line x1="250" y1="165" x2="320" y2="175" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />
            <line x1="250" y1="165" x2="180" y2="175" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />
            <line x1="250" y1="165" x2="210" y2="215" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />
            <line x1="250" y1="165" x2="290" y2="215" stroke="url(#lineGrad)" strokeWidth="0.8" opacity="0.5" />

            {/* Network nodes — ring 2 (outer) */}
            <circle cx="160" cy="100" r="3" fill="#e8734a" opacity="0.5" />
            <circle cx="340" cy="100" r="3" fill="#e8734a" opacity="0.5" />
            <circle cx="370" cy="165" r="2.5" fill="#e8734a" opacity="0.4" />
            <circle cx="130" cy="165" r="2.5" fill="#e8734a" opacity="0.4" />
            <circle cx="170" cy="245" r="3" fill="#e8734a" opacity="0.5" />
            <circle cx="330" cy="245" r="3" fill="#e8734a" opacity="0.5" />

            {/* Connections ring 1 to ring 2 */}
            <line x1="200" y1="130" x2="160" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
            <line x1="300" y1="130" x2="340" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
            <line x1="320" y1="175" x2="370" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
            <line x1="180" y1="175" x2="130" y2="165" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
            <line x1="210" y1="215" x2="170" y2="245" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
            <line x1="290" y1="215" x2="330" y2="245" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />

            {/* Cross connections (ring 1 to ring 1) */}
            <line x1="200" y1="130" x2="300" y2="130" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <line x1="180" y1="175" x2="320" y2="175" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <line x1="210" y1="215" x2="290" y2="215" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

            {/* Data flow particles — animated circles along paths */}
            <circle r="2" fill="#e8734a" opacity="0.8">
                <animateMotion dur="4s" repeatCount="indefinite" path="M250,165 L300,130 L340,100" />
            </circle>
            <circle r="2" fill="#c4b5d4" opacity="0.8">
                <animateMotion dur="5s" repeatCount="indefinite" path="M250,165 L180,175 L130,165" />
            </circle>
            <circle r="1.5" fill="#f5c9b3" opacity="0.7">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M250,165 L210,215 L170,245" />
            </circle>

            {/* Floating dashboard card — top right */}
            <g transform="translate(350, 60)" opacity="0.85">
                <rect width="110" height="80" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <rect x="12" y="14" width="40" height="5" rx="2.5" fill="#e8734a" opacity="0.8" />
                <rect x="12" y="24" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
                <rect x="12" y="32" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
                {/* Mini bar chart */}
                <rect x="12" y="56" width="8" height="14" rx="2" fill="#e8734a" opacity="0.6" />
                <rect x="24" y="50" width="8" height="20" rx="2" fill="#e8734a" opacity="0.8" />
                <rect x="36" y="53" width="8" height="17" rx="2" fill="#e8734a" opacity="0.5" />
                <rect x="48" y="46" width="8" height="24" rx="2" fill="#e8734a" opacity="0.9" />
                <rect x="60" y="52" width="8" height="18" rx="2" fill="#c4b5d4" opacity="0.5" />
                <animate attributeName="opacity" values="0.85;0.95;0.85" dur="4s" repeatCount="indefinite" />
            </g>

            {/* Floating code card — bottom left */}
            <g transform="translate(40, 260)" opacity="0.7">
                <rect width="100" height="70" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                <rect x="10" y="12" width="12" height="4" rx="2" fill="#c4b5d4" opacity="0.6" />
                <rect x="26" y="12" width="35" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
                <rect x="18" y="22" width="28" height="4" rx="2" fill="#e8734a" opacity="0.5" />
                <rect x="50" y="22" width="20" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="18" y="32" width="40" height="4" rx="2" fill="rgba(255,255,255,0.12)" />
                <rect x="10" y="42" width="15" height="4" rx="2" fill="#c4b5d4" opacity="0.4" />
                <rect x="28" y="42" width="30" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
                <rect x="18" y="52" width="50" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
                <animate attributeName="opacity" values="0.7;0.85;0.7" dur="5s" repeatCount="indefinite" />
            </g>

            {/* Orbiting ring */}
            <ellipse cx="250" cy="165" rx="160" ry="60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" strokeDasharray="3 8" transform="rotate(-15, 250, 165)">
                <animateTransform attributeName="transform" type="rotate" values="-15 250 165;345 250 165" dur="60s" repeatCount="indefinite" />
            </ellipse>

            {/* Small decorative dots scattered */}
            <circle cx="420" cy="300" r="2" fill="#e8734a" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="80" r="1.5" fill="#c4b5d4" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="450" cy="50" r="1.5" fill="#f5c9b3" opacity="0.25" />
            <circle cx="60" cy="350" r="2" fill="#e8734a" opacity="0.2" />

            {/* Corner accent lines */}
            <line x1="30" y1="40" x2="30" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="30" y1="40" x2="60" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="470" y1="350" x2="470" y2="380" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="440" y1="380" x2="470" y2="380" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
        </svg>
    );
}
