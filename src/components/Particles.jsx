import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

function Particles({ particlesRef }) {
  const internalRef = useRef();

  /*
  ==========================================
  CREATE PARTICLE POSITIONS
  ==========================================
  */

  const positions = useMemo(() => {
    const points = [];
    const count = 2000;

    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 8;
      const angle = Math.random() * Math.PI * 2;

      // Add depth
      const depth = (Math.random() - 0.5) * 12;

      // X
      points.push(Math.cos(angle) * radius);

      // Y
      points.push((Math.random() - 0.5) * 8);

      // Z
      points.push(Math.sin(angle) * radius + depth);
    }

    return new Float32Array(points);
  }, []);

  /*
  ==========================================
  CREATE SOFT GLOW TEXTURE
  ==========================================
  */

  const glowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");

    canvas.width = 64;
    canvas.height = 64;

    const context = canvas.getContext("2d");

    const gradient = context.createRadialGradient(
      32,
      32,
      0,
      32,
      32,
      32
    );

    gradient.addColorStop(
      0,
      "rgba(147, 197, 253, 1)"
    );

    gradient.addColorStop(
      0.15,
      "rgba(96, 165, 250, 0.9)"
    );

    gradient.addColorStop(
      0.35,
      "rgba(96, 165, 250, 0.35)"
    );

    gradient.addColorStop(
      0.7,
      "rgba(96, 165, 250, 0.08)"
    );

    gradient.addColorStop(
      1,
      "rgba(96, 165, 250, 0)"
    );

    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    texture.needsUpdate = true;

    return texture;
  }, []);

  /*
  ==========================================
  CLEAN UP GLOW TEXTURE
  ==========================================
  */

  useEffect(() => {
    return () => {
      glowTexture.dispose();
    };
  }, [glowTexture]);

  /*
  ==========================================
  PARTICLE MOVEMENT
  ==========================================
  */

  useFrame((state) => {
    const particles =
      particlesRef?.current || internalRef.current;

    if (!particles) return;

    const time = state.clock.elapsedTime;

    /*
    ------------------------------------------
    MOUSE PARALLAX
    ------------------------------------------
    */

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetX = mouseX * 0.15;
    const targetY = mouseY * 0.1;

    /*
    Smooth mouse movement
    */

    particles.position.x = THREE.MathUtils.lerp(
      particles.position.x,
      targetX,
      0.02
    );

    particles.position.y = THREE.MathUtils.lerp(
      particles.position.y,
      targetY,
      0.02
    );

    /*
    ------------------------------------------
    NATURAL FLOATING
    ------------------------------------------
    */

    particles.position.y +=
      Math.sin(time * 0.2) * 0.002;

    particles.position.z =
      Math.sin(time * 0.12) * 0.1;

    /*
    ------------------------------------------
    SLOW CINEMATIC ROTATION
    ------------------------------------------
    */

    particles.rotation.y =
      time * 0.015;

    particles.rotation.x =
      Math.sin(time * 0.1) * 0.01;
  });

  /*
  ==========================================
  RENDER PARTICLES
  ==========================================
  */

  return (
    <Points
      ref={particlesRef || internalRef}
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        map={glowTexture}
        color="#60a5fa"
        size={0.16}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        alphaTest={0.01}
      />
    </Points>
  );
}

export default Particles;