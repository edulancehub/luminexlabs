'use client';
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Scroll Tracker ── */
function useScrollProgress() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setScroll(max > 0 ? window.scrollY / max : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return scroll;
}

/* ── Warm Particles ── */
function Particles({ scroll }) {
    const mesh = useRef();
    const count = 600;

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const palette = [
            new THREE.Color('#e8734a'), new THREE.Color('#f5c9b3'),
            new THREE.Color('#c4b5d4'), new THREE.Color('#e8a4a4'),
            new THREE.Color('#fff8f0'),
        ];
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 35;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
            const c = palette[Math.floor(Math.random() * palette.length)];
            col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
        }
        return [pos, col];
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.y = state.clock.elapsedTime * 0.012 + scroll * 0.5;
        const posAttr = mesh.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            posAttr.array[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i * 0.01) * 0.0006;
        }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.05} vertexColors transparent opacity={0.4} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── DNA Double Helix ── */
function DNAHelix({ scroll }) {
    const group = useRef();
    const positions = useMemo(() => {
        const n = 120;
        const s1 = new Float32Array(n * 3);
        const s2 = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const t = (i / n) * Math.PI * 5;
            const y = (i / n) * 12 - 6;
            s1[i * 3] = Math.cos(t) * 1; s1[i * 3 + 1] = y; s1[i * 3 + 2] = Math.sin(t) * 1;
            s2[i * 3] = Math.cos(t + Math.PI) * 1; s2[i * 3 + 1] = y; s2[i * 3 + 2] = Math.sin(t + Math.PI) * 1;
        }
        return [s1, s2];
    }, []);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.12;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3 - scroll * 5;
        }
    });

    return (
        <group ref={group} position={[-7, 0, -8]} scale={0.55}>
            <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions[0], 3]} /></bufferGeometry><pointsMaterial size={0.07} color="#e8734a" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} /></points>
            <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions[1], 3]} /></bufferGeometry><pointsMaterial size={0.07} color="#c4b5d4" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} /></points>
        </group>
    );
}

/* ── Lorenz Attractor ── */
function LorenzAttractor({ scroll }) {
    const mesh = useRef();
    const positions = useMemo(() => {
        const pts = 2500;
        const pos = new Float32Array(pts * 3);
        let x = 0.1, y = 0, z = 0;
        const dt = 0.006;
        for (let i = 0; i < pts; i++) {
            const dx = 10 * (y - x) * dt, dy = (x * (28 - z) - y) * dt, dz = (x * y - (8 / 3) * z) * dt;
            x += dx; y += dy; z += dz;
            pos[i * 3] = x * 0.055; pos[i * 3 + 1] = z * 0.055 - 1.5; pos[i * 3 + 2] = y * 0.055;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
            mesh.current.position.y = -scroll * 8;
        }
    });

    return (
        <points ref={mesh} position={[6, 1, -9]}>
            <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
            <pointsMaterial size={0.02} color="#e8734a" transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── Wireframe Icosahedron ── */
function FloatingIco({ scroll }) {
    const mesh = useRef();
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.05;
            mesh.current.rotation.y = state.clock.elapsedTime * 0.035;
            mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3 - scroll * 6;
        }
    });
    return (
        <mesh ref={mesh} position={[5, -1, -7]}>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial color="#e8734a" wireframe transparent opacity={0.06} />
        </mesh>
    );
}

/* ── Torus Knot ── */
function TorusKnot({ scroll }) {
    const mesh = useRef();
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.06;
            mesh.current.rotation.z = state.clock.elapsedTime * 0.04;
            mesh.current.position.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.4 - scroll * 4;
        }
    });
    return (
        <mesh ref={mesh} position={[-5, 2, -10]}>
            <torusKnotGeometry args={[1.3, 0.25, 80, 12, 3, 2]} />
            <meshStandardMaterial color="#c4b5d4" wireframe transparent opacity={0.05} />
        </mesh>
    );
}

/* ── Fibonacci Sphere ── */
function FibonacciSphere({ scroll }) {
    const mesh = useRef();
    const count = 400;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const golden = (1 + Math.sqrt(5)) / 2;
        for (let i = 0; i < count; i++) {
            const theta = 2 * Math.PI * i / golden;
            const phi = Math.acos(1 - 2 * (i + 0.5) / count);
            const r = 2.5;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
            mesh.current.position.y = -scroll * 10;
        }
    });

    return (
        <points ref={mesh} position={[0, 0, -12]}>
            <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
            <pointsMaterial size={0.04} color="#f5c9b3" transparent opacity={0.22} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── Neural Network Lines ── */
function NeuralLines({ scroll }) {
    const mesh = useRef();
    const [nodePos, linePos] = useMemo(() => {
        const nodes = Array.from({ length: 20 }, () => [(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6 - 6]);
        const lines = [];
        for (let i = 0; i < nodes.length; i++)
            for (let j = i + 1; j < nodes.length; j++) {
                const d = Math.sqrt(nodes[i].reduce((s, v, k) => s + (v - nodes[j][k]) ** 2, 0));
                if (d < 6) lines.push(...nodes[i], ...nodes[j]);
            }
        return [new Float32Array(nodes.flat()), new Float32Array(lines)];
    }, []);

    useFrame((state) => {
        if (mesh.current) mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
    });

    return (
        <group ref={mesh}>
            <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[nodePos, 3]} /></bufferGeometry><pointsMaterial size={0.1} color="#e8734a" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} /></points>
            <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[linePos, 3]} /></bufferGeometry><lineBasicMaterial color="#e8734a" transparent opacity={0.04} /></lineSegments>
        </group>
    );
}

/* ── Orbiting Rings ── */
function OrbitingRings({ scroll }) {
    const r1 = useRef(), r2 = useRef(), r3 = useRef();
    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (r1.current) { r1.current.rotation.x = t * 0.12; r1.current.rotation.z = t * 0.06; }
        if (r2.current) { r2.current.rotation.y = t * 0.1; r2.current.rotation.x = t * 0.05; }
        if (r3.current) { r3.current.rotation.z = t * 0.08; r3.current.rotation.y = t * 0.11; }
    });
    return (
        <group position={[0, -scroll * 15, -9]}>
            <mesh ref={r1}><torusGeometry args={[3.5, 0.015, 8, 64]} /><meshBasicMaterial color="#e8734a" transparent opacity={0.06} /></mesh>
            <mesh ref={r2}><torusGeometry args={[2.8, 0.015, 8, 64]} /><meshBasicMaterial color="#c4b5d4" transparent opacity={0.06} /></mesh>
            <mesh ref={r3}><torusGeometry args={[2.2, 0.015, 8, 64]} /><meshBasicMaterial color="#f5c9b3" transparent opacity={0.06} /></mesh>
        </group>
    );
}

/* ── Lissajous Curve ── */
function LissajousCurve({ scroll }) {
    const mesh = useRef();
    const positions = useMemo(() => {
        const n = 1200;
        const pos = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            const t = (i / n) * Math.PI * 4;
            pos[i * 3] = Math.sin(3 * t + Math.PI / 4) * 2;
            pos[i * 3 + 1] = Math.sin(4 * t) * 1.5;
            pos[i * 3 + 2] = Math.sin(5 * t + Math.PI / 6) * 1.2;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.035;
            mesh.current.position.y = -scroll * 12;
        }
    });

    return (
        <points ref={mesh} position={[-4, 4, -8]}>
            <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
            <pointsMaterial size={0.02} color="#e8734a" transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── Möbius Strip ── */
function MobiusStrip({ scroll }) {
    const mesh = useRef();
    const geometry = useMemo(() => {
        const pts = [];
        for (let i = 0; i <= 120; i++) {
            const u = (i / 120) * Math.PI * 2;
            for (let j = -1; j <= 1; j += 0.35) {
                const v = j * 0.5;
                pts.push((2 + v * Math.cos(u / 2)) * Math.cos(u), (2 + v * Math.cos(u / 2)) * Math.sin(u), v * Math.sin(u / 2));
            }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
        return geo;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x = state.clock.elapsedTime * 0.06;
            mesh.current.rotation.z = state.clock.elapsedTime * 0.05;
            mesh.current.position.y = -scroll * 18;
        }
    });

    return (
        <points ref={mesh} position={[5, 6, -7]} scale={0.6}>
            <primitive object={geometry} />
            <pointsMaterial size={0.035} color="#c4b5d4" transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── Wave Grid ── */
function WaveGrid({ scroll }) {
    const mesh = useRef();
    const gridSize = 30;
    const positions = useMemo(() => {
        const pos = new Float32Array(gridSize * gridSize * 3);
        for (let i = 0; i < gridSize; i++)
            for (let j = 0; j < gridSize; j++) {
                const idx = (i * gridSize + j) * 3;
                pos[idx] = (i - gridSize / 2) * 0.45;
                pos[idx + 1] = 0;
                pos[idx + 2] = (j - gridSize / 2) * 0.45;
            }
        return pos;
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;
        const posAttr = mesh.current.geometry.attributes.position;
        const t = state.clock.elapsedTime;
        for (let i = 0; i < gridSize; i++)
            for (let j = 0; j < gridSize; j++) {
                const idx = (i * gridSize + j) * 3;
                posAttr.array[idx + 1] = Math.sin(posAttr.array[idx] * 0.4 + t * 0.5) * Math.cos(posAttr.array[idx + 2] * 0.4 + t * 0.35) * 0.35;
            }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={mesh} position={[0, -6 - scroll * 6, -5]} rotation={[0.3, 0, 0]}>
            <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
            <pointsMaterial size={0.035} color="#e8a4a4" transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

/* ── Scene Content (needs scroll from parent) ── */
function SceneContent({ scroll }) {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.2} color="#e8734a" />
            <pointLight position={[-10, -5, 5]} intensity={0.12} color="#c4b5d4" />
            <Particles scroll={scroll} />
            <DNAHelix scroll={scroll} />
            <LorenzAttractor scroll={scroll} />
            <FloatingIco scroll={scroll} />
            <TorusKnot scroll={scroll} />
            <FibonacciSphere scroll={scroll} />
            <NeuralLines scroll={scroll} />
            <OrbitingRings scroll={scroll} />
            <LissajousCurve scroll={scroll} />
            <MobiusStrip scroll={scroll} />
            <WaveGrid scroll={scroll} />
        </>
    );
}

/* ── Single Full-Page Canvas ── */
export default function Scene3D() {
    const scroll = useScrollProgress();

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 55 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
                frameloop="always"
                style={{ pointerEvents: 'none' }}
            >
                <SceneContent scroll={scroll} />
            </Canvas>
        </div>
    );
}
