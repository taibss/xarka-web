/// <reference types="@react-three/fiber" />
"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

const STAGES = [
  { label: "Observe", angle: 0 },
  { label: "Understand", angle: (Math.PI * 2) / 5 },
  { label: "Reason", angle: (Math.PI * 2 * 2) / 5 },
  { label: "Predict", angle: (Math.PI * 2 * 3) / 5 },
  { label: "Act", angle: (Math.PI * 2 * 4) / 5 },
];

const RADIUS = 2.6;
const PULSE_SPEED = 0.628;
const AMBIENT_SPEED = 0.105;

/* ── Fallback 2D ── */
function LoopFallback2D() {
  return (
    <div className="relative mx-auto aspect-square max-w-md">
      <svg viewBox="-50 -50 100 100" className="h-full w-full">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#3a3530" strokeWidth="0.8" />
        {STAGES.map((s) => {
          const x = Math.cos(s.angle - Math.PI / 2) * 38;
          const y = Math.sin(s.angle - Math.PI / 2) * 38;
          return (
            <g key={s.label}>
              <circle cx={x} cy={y} r="6" fill="#1a1714" stroke="#8b6a4a" strokeWidth="0.6" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#f5f0eb" fontSize="3.2" fontFamily="IBM Plex Mono, monospace">
                {s.label}
              </text>
            </g>
          );
        })}
        <circle cx="0" cy="0" r="10" fill="#1a1714" stroke="#8b6a4a" strokeWidth="0.6" />
        <text x="0" y="-1.5" textAnchor="middle" dominantBaseline="central" fill="#8b6a4a" fontSize="2.4" fontFamily="IBM Plex Mono, monospace">Xarka</text>
        <text x="0" y="2" textAnchor="middle" dominantBaseline="central" fill="#f5f0eb" fontSize="2" fontFamily="IBM Plex Mono, monospace">Intelligence</text>
      </svg>
    </div>
  );
}

/* ── Main 3D scene — everything animated via refs, zero React re-renders ── */
function LoopScene() {
  const ringRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0);

  // refs for each node's material so we can animate emissive directly
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((_state, delta) => {
    // advance progress
    progressRef.current = (progressRef.current + delta * PULSE_SPEED / (Math.PI * 2)) % 1;
    const t = progressRef.current;

    // ambient ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * AMBIENT_SPEED;
    }

    // move pulse along ring
    if (pulseRef.current) {
      const angle = t * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(angle) * RADIUS;
      const pz = Math.sin(angle) * RADIUS;
      pulseRef.current.position.set(px, 0.15, pz);
      const breathe = 1 + Math.sin(t * Math.PI * 2) * 0.3;
      pulseRef.current.scale.setScalar(breathe);
    }

    // move glow halo
    if (glowRef.current) {
      const angle = t * Math.PI * 2 - Math.PI / 2;
      const px = Math.cos(angle) * RADIUS;
      const pz = Math.sin(angle) * RADIUS;
      glowRef.current.position.set(px, 0.15, pz);
      const breathe = 1 + Math.sin(t * Math.PI * 2) * 0.3;
      glowRef.current.scale.setScalar(breathe * 3);
    }

    // animate node emissive — which node is the pulse closest to?
    const activeSlot = (t * 5) % 5;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      const dist = Math.abs(activeSlot - i);
      const proximity = Math.max(0, 1 - Math.min(dist, 5 - dist) * 1.5);
      const target = proximity > 0.3 ? 0.6 + proximity * 0.6 : 0;
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, target, 0.08);
    });
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 6, 4]} intensity={0.8} color="#f5f0eb" />
      <pointLight position={[-4, 3, -4]} intensity={0.4} color="#8b6a4a" />
      <pointLight position={[0, -2, 0]} intensity={0.15} color="#5a4a3a" />

      <group ref={ringRef} rotation={[0.4, 0, 0]}>
        {/* connecting torus */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[RADIUS, 0.02, 8, 128]} />
          <meshStandardMaterial color="#3a3530" roughness={0.7} metalness={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[RADIUS - 0.15, 0.008, 8, 128]} />
          <meshStandardMaterial color="#2a2420" roughness={0.8} transparent opacity={0.5} />
        </mesh>

        {/* stage nodes */}
        {STAGES.map((s, i) => {
          const x = Math.cos(s.angle - Math.PI / 2) * RADIUS;
          const z = Math.sin(s.angle - Math.PI / 2) * RADIUS;
          return (
            <group key={s.label} position={[x, 0, z]}>
              <mesh
                ref={(el) => { nodeRefs.current[i] = el; }}
              >
                <dodecahedronGeometry args={[0.28, 0]} />
                <meshStandardMaterial
                  color="#2a2620"
                  roughness={0.55}
                  metalness={0.3}
                  emissive="#8b6a4a"
                  emissiveIntensity={0}
                />
              </mesh>
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.38, 0.012, 8, 32]} />
                <meshStandardMaterial color="#8b6a4a" roughness={0.4} metalness={0.6} />
              </mesh>
              <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
                <div className="whitespace-nowrap text-center font-mono text-[11px] uppercase tracking-widest text-[#706860] select-none">
                  {s.label}
                </div>
              </Html>
            </group>
          );
        })}

        {/* center core */}
        <mesh>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#1a1714" roughness={0.4} metalness={0.5} emissive="#8b6a4a" emissiveIntensity={0.2} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.65, 0.015, 8, 48]} />
          <meshStandardMaterial color="#8b6a4a" emissive="#8b6a4a" emissiveIntensity={0.8} roughness={0.3} metalness={0.7} />
        </mesh>
        <Html center distanceFactor={7} style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap text-center select-none">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#c4956a]" style={{ textShadow: "0 0 10px rgba(139,106,74,0.5)" }}>Xarka</div>
            <div className="font-mono text-[8px] uppercase tracking-wider text-[#a09080]">Intelligence</div>
          </div>
        </Html>

        {/* traveling pulse — animated via refs in useFrame */}
        <mesh ref={pulseRef}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="#c4956a" emissive="#8b6a4a" emissiveIntensity={3} roughness={0.15} metalness={0.9} />
        </mesh>
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="#8b6a4a" emissive="#8b6a4a" emissiveIntensity={2} transparent opacity={0.12} roughness={1} />
        </mesh>
      </group>
    </>
  );
}

/* ── SSR-safe wrapper ── */
export function OperatingLoop3D() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!mounted || prefersReduced || isMobile) {
    return <LoopFallback2D />;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ aspectRatio: "4 / 3" }}>
      <Canvas
        camera={{ position: [0, 4, 6], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <LoopScene />
      </Canvas>
    </div>
  );
}
