"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function randomParticlePositions(count: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 16;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return arr;
}

function ParticleField() {
  const count = 700;
  const ref = useRef<THREE.Points>(null);
  const [positions] = useState(() => randomParticlePositions(count));

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#67e8f9"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

function HVACUnit() {
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
      <group position={[0, -0.2, 0]} rotation={[0.15, -0.4, 0]}>
        <RoundedBox args={[2.2, 2.2, 2.2]} radius={0.12} smoothness={4}>
          <meshStandardMaterial
            color="#0f1b2e"
            metalness={0.6}
            roughness={0.25}
          />
        </RoundedBox>
        <mesh position={[0, 1.13, 0]}>
          <cylinderGeometry args={[0.85, 0.85, 0.08, 48]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.6}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 1.18, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.04, 32]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 6.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={60} color="#22d3ee" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#f97316" />
      <ParticleField />
      <Sparkles count={40} scale={6} size={3} speed={0.3} color="#f97316" />
      <HVACUnit />
    </Canvas>
  );
}
