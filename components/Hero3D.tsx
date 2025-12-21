import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Torus, Sphere, MeshDistortMaterial, Float, Stars, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const MithraEmblem = () => {
  const outerRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.1;
    }
    
    // Core pulsing functionality
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.1;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Rings rotating on different axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.3 + Math.PI / 2;
      ring2Ref.current.rotation.y = -t * 0.2;
    }
  });

  return (
    <group>
      {/* Central Core: The "Mithra" Energy */}
      <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 64, 64]} ref={coreRef}>
          <MeshDistortMaterial
            color="#00D4FF"
            emissive="#005577"
            emissiveIntensity={2}
            roughness={0}
            metalness={0.1}
            distort={0.3}
            speed={3}
          />
        </Sphere>
      </Float>

      {/* Structural Caging: Represents Architecture */}
      <group ref={outerRef}>
        <Icosahedron args={[2.2, 0]}>
          <meshStandardMaterial
            color="#00D4FF"
            wireframe
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </Icosahedron>
        <Icosahedron args={[2.22, 0]}>
           <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.1} />
        </Icosahedron>
      </group>

      {/* Orbital Rings: Connection & APIs */}
      <group>
        <Torus args={[3.5, 0.02, 16, 100]} ref={ring1Ref}>
          <meshStandardMaterial color="#ffffff" emissive="#00D4FF" emissiveIntensity={0.5} />
        </Torus>
        <Torus args={[3, 0.02, 16, 100]} ref={ring2Ref}>
          <meshStandardMaterial color="#ffffff" emissive="#00D4FF" emissiveIntensity={0.8} />
        </Torus>
      </group>
    </group>
  );
};

const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
            <color attach="background" args={['#050510'] as [string]} />
            
            {/* Lighting Setup */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10] as [number, number, number]} intensity={2} color="#00D4FF" distance={20} />
            <pointLight position={[-10, -10, -10] as [number, number, number]} intensity={2} color="#FFFFFF" distance={20} />
            <spotLight position={[0, 10, 0] as [number, number, number]} intensity={1} color="white" angle={0.5} penumbra={1} />

            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <MithraEmblem />
            </Float>

            {/* Environment */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.5} color="#00D4FF" />
            
            {/* Atmospheric Fog */}
            <fog attach="fog" args={['#050510', 8, 25] as [string, number, number]} />
        </>
    )
}

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Canvas dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;