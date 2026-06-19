'use client';

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const EarthModel = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Earth */}
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={new THREE.TextureLoader().load('/earth-texture.jpg')}
          shininess={5}
        />
      </mesh>

      {/* Atmospheric glow */}
      <mesh scale={2.05}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#1E8F5A"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export const EarthHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-primary-dark via-ocean-blue to-primary-dark">
      {/* 3D Earth Canvas */}
      <Canvas className="absolute inset-0">
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <ambientLight intensity={0.4} />
        <Stars radius={300} depth={50} count={5000} factor={4} />
        <EarthModel />
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 sm:px-8"
        >
          <h1 className="font-clash text-4xl sm:text-6xl lg:text-7xl font-bold text-soft-white mb-6 leading-tight">
            Empowering Humanity.<br />
            Protecting Nature.<br />
            Shaping Tomorrow.
          </h1>
          <p className="font-body text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
            A global movement building sustainable communities through education, environmental action,
            innovation, and collective impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#mission"
              className="px-8 py-4 bg-growth-green text-white font-semibold rounded-lg hover:bg-forest-green transition-colors"
            >
              Join the Movement
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/mission"
              className="px-8 py-4 border-2 border-growth-green text-growth-green font-semibold rounded-lg hover:bg-growth-green hover:text-white transition-colors"
            >
              Explore Our Mission
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 text-center z-20"
        >
          <p className="text-soft-white text-sm mb-2">Scroll to explore</p>
          <div className="text-growth-green text-2xl">↓</div>
        </motion.div>
      </div>
    </div>
  );
};
