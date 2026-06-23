"use client";

import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";

function VentLouvers({ position }: { position: [number, number, number] }) {
  const slats = Array.from({ length: 6 });
  return (
    <group position={position}>
      {slats.map((_, i) => (
        <mesh key={i} position={[0, i * 0.16 - 0.4, 0]}>
          <boxGeometry args={[1.85, 0.06, 0.04]} />
          <meshStandardMaterial color="#5b5f63" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function PackageUnit() {
  // Modeled loosely on a residential gray-cabinet HVAC package unit —
  // generic shape/color, no manufacturer branding.
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
      <group
        position={[2.6, -0.6, -1.5]}
        rotation={[0.12, -0.45, 0]}
        scale={0.62}
      >
        {/* Main cabinet */}
        <RoundedBox args={[2.2, 2.4, 2.2]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color="#94989c" metalness={0.35} roughness={0.55} />
        </RoundedBox>

        {/* Front vent louvers */}
        <VentLouvers position={[0, 0, 1.13]} />

        {/* Top fan grille ring */}
        <mesh position={[0, 1.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.78, 0.05, 16, 48]} />
          <meshStandardMaterial color="#3a3d40" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.21, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 0.04, 48]} />
          <meshStandardMaterial color="#26282a" metalness={0.5} roughness={0.6} />
        </mesh>

        {/* Small brand-color status light, subtle — not the focal point */}
        <mesh position={[0.85, 0.5, 1.15]}>
          <circleGeometry args={[0.05, 16]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.9}
          />
        </mesh>

        {/* Access panel seam */}
        <mesh position={[0, -0.3, 1.121]}>
          <boxGeometry args={[1.9, 0.02, 0.01]} />
          <meshStandardMaterial color="#4a4d50" />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 7.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#fdf6ec" />
      <pointLight position={[-3, -1, 3]} intensity={20} color="#22d3ee" />
      <PackageUnit />
    </Canvas>
  );
}
