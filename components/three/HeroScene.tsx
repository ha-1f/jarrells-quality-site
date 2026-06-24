"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FanBlade({ angle }: { angle: number }) {
  return (
    <mesh rotation={[0, 0, angle]} position={[0, 1.32, 0.05]}>
      <boxGeometry args={[0.58, 0.08, 0.02]} />
      <meshStandardMaterial color="#2a2d30" metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

function SpinningFan() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 2.5;
  });

  const blades = 5;
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {Array.from({ length: blades }).map((_, i) => (
        <FanBlade key={i} angle={(Math.PI * 2 * i) / blades} />
      ))}
      <mesh position={[0, 1.32, 0.06]}>
        <cylinderGeometry args={[0.06, 0.06, 0.04, 16]} />
        <meshStandardMaterial color="#1a1c1e" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function CondenserUnit() {
  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.8}>
      <group position={[0, -0.3, 0]} rotation={[0.08, -0.3, 0]} scale={1.1}>
        {/* Main cabinet body */}
        <RoundedBox args={[2.4, 2.6, 2.0]} radius={0.06} smoothness={4}>
          <meshStandardMaterial
            color="#8a8e92"
            metalness={0.45}
            roughness={0.45}
          />
        </RoundedBox>

        {/* Top panel - slightly darker */}
        <RoundedBox args={[2.44, 0.08, 2.04]} radius={0.02} smoothness={2} position={[0, 1.34, 0]}>
          <meshStandardMaterial color="#6a6e72" metalness={0.5} roughness={0.4} />
        </RoundedBox>

        {/* Fan grille - outer ring */}
        <mesh position={[0, 1.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.72, 0.06, 16, 48]} />
          <meshStandardMaterial color="#3a3d40" metalness={0.65} roughness={0.3} />
        </mesh>

        {/* Fan grille - inner rings */}
        <mesh position={[0, 1.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.5, 0.02, 12, 48]} />
          <meshStandardMaterial color="#3a3d40" metalness={0.6} roughness={0.35} />
        </mesh>
        <mesh position={[0, 1.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.02, 12, 48]} />
          <meshStandardMaterial color="#3a3d40" metalness={0.6} roughness={0.35} />
        </mesh>

        {/* Fan grille mesh/screen */}
        <mesh position={[0, 1.31, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.02, 48]} />
          <meshStandardMaterial
            color="#1e2022"
            metalness={0.4}
            roughness={0.6}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Spinning fan blades */}
        <SpinningFan />

        {/* Front louver vents */}
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={`louver-${i}`} position={[0, i * 0.2 - 0.7, 1.02]}>
            <boxGeometry args={[2.0, 0.08, 0.04]} />
            <meshStandardMaterial color="#5a5e62" metalness={0.5} roughness={0.45} />
          </mesh>
        ))}

        {/* Side panel seams */}
        <mesh position={[1.21, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.02, 2.5, 1.9]} />
          <meshStandardMaterial color="#72767a" metalness={0.5} roughness={0.4} />
        </mesh>
        <mesh position={[-1.21, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.02, 2.5, 1.9]} />
          <meshStandardMaterial color="#72767a" metalness={0.5} roughness={0.4} />
        </mesh>

        {/* Access panel line */}
        <mesh position={[0, -0.5, 1.011]}>
          <boxGeometry args={[2.1, 0.015, 0.01]} />
          <meshStandardMaterial color="#4a4d50" />
        </mesh>

        {/* Brand color accent strip at bottom */}
        <mesh position={[0, -1.25, 1.011]}>
          <boxGeometry args={[2.2, 0.06, 0.01]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Status LED */}
        <mesh position={[0.9, 0.6, 1.015]}>
          <circleGeometry args={[0.04, 16]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.2}
          />
        </mesh>

        {/* Refrigerant pipes coming out the side */}
        <mesh position={[1.3, -0.4, 0.3]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 12]} />
          <meshStandardMaterial color="#c0a060" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[1.3, -0.4, 0.0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.6, 12]} />
          <meshStandardMaterial color="#c0a060" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Base/feet */}
        <mesh position={[-0.8, -1.36, 0.6]}>
          <boxGeometry args={[0.3, 0.08, 0.3]} />
          <meshStandardMaterial color="#2a2c2e" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0.8, -1.36, 0.6]}>
          <boxGeometry args={[0.3, 0.08, 0.3]} />
          <meshStandardMaterial color="#2a2c2e" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[-0.8, -1.36, -0.6]}>
          <boxGeometry args={[0.3, 0.08, 0.3]} />
          <meshStandardMaterial color="#2a2c2e" metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0.8, -1.36, -0.6]}>
          <boxGeometry args={[0.3, 0.08, 0.3]} />
          <meshStandardMaterial color="#2a2c2e" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]} rotation={[0, 0, 0]}>
      <torusGeometry args={[3.2, 0.015, 16, 100]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={2}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 5]} intensity={1.8} color="#fdf6ec" />
      <directionalLight position={[-3, 2, 3]} intensity={0.6} color="#22d3ee" />
      <pointLight position={[0, -2, 4]} intensity={15} color="#22d3ee" distance={10} />
      <pointLight position={[2, 3, 2]} intensity={8} color="#f97316" distance={8} />
      <spotLight
        position={[0, 5, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={30}
        color="#ffffff"
      />
      <GlowRing />
      <CondenserUnit />
    </Canvas>
  );
}
