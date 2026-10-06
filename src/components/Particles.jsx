import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";

function Particles({ particlesRef }) {
  const internalRef = useRef();

  /*
  ==========================================
  SMOOTH SCROLL VALUE
  ==========================================
  */

  const scrollProgressRef = useRef(0);

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

      const depth = (Math.random() - 0.5) * 12;

      points.push(Math.cos(angle) * radius);
      points.push((Math.random() - 0.5) * 8);
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
  GSAP SCROLL SMOOTHING
  ==========================================
  */

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? scrollY / maxScroll
          : 0;

      gsap.to(scrollProgressRef.current, {
        current: progress,
        duration: 0.8,
        ease: "power3.out",
        overwrite: true,
      });
    };

    /*
    GSAP needs an object property
    to animate.
    */

    const scrollState = {
      current: 0,
    };

    scrollProgressRef.current = scrollState;

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      gsap.killTweensOf(scrollState);
    };
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
      particlesRef?.current ||
      internalRef.current;

    if (!particles) return;

    const time = state.clock.elapsedTime;

    /*
    ------------------------------------------
    MOUSE PARALLAX
    ------------------------------------------
    */

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    /*
    ------------------------------------------
    SMOOTH SCROLL
    ------------------------------------------
    */

    const scrollProgress =
      scrollProgressRef.current.current ?? 0;

    /*
    ------------------------------------------
    SECTION INFLUENCES
    ------------------------------------------
    */

    const homeInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0,
        0.18
      );

    const aboutInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0.15,
        0.35
      );

    const skillsInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0.3,
        0.55
      );

    const projectsInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0.5,
        0.75
      );

    const experienceInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0.7,
        0.9
      );

    const contactInfluence =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        0.85,
        1
      );

    /*
    ------------------------------------------
    ABOUT
    ------------------------------------------
    */

    const aboutShift =
      aboutInfluence * 3.5;

    /*
    ------------------------------------------
    SKILLS
    ------------------------------------------
    */

    const baseRotation =
      time * 0.012;

    const skillsRotation =
      skillsInfluence *
      Math.sin(time * 0.5) *
      0.35;

    /*
    ------------------------------------------
    PROJECTS
    ------------------------------------------
    */

    const projectsDepth =
      projectsInfluence *
      Math.sin(time * 0.6) *
      1.5;

    /*
    ------------------------------------------
    EXPERIENCE
    ------------------------------------------
    */

    const experienceX =
      experienceInfluence *
      Math.sin(time * 0.4) *
      1.2;

    const experienceY =
      experienceInfluence *
      Math.cos(time * 0.35) *
      0.8;

    /*
    ------------------------------------------
    CONTACT SETTLE
    ------------------------------------------
    */

    const settleAmount =
      1 - contactInfluence;

    /*
    ------------------------------------------
    TARGET POSITION
    ------------------------------------------
    */

    const targetX =
      (
        mouseX * 0.15 +
        aboutShift +
        experienceX
      ) * settleAmount;

    const targetY =
      (
        mouseY * 0.1 +
        homeInfluence *
          (scrollProgress * 1.5) +
        experienceY
      ) * settleAmount;

    const targetZ =
      projectsDepth * settleAmount;

    /*
    ------------------------------------------
    SMOOTH POSITION
    ------------------------------------------
    */

    particles.position.x =
      THREE.MathUtils.lerp(
        particles.position.x,
        targetX,
        0.02
      );

    particles.position.y =
      THREE.MathUtils.lerp(
        particles.position.y,
        targetY,
        0.02
      );

    particles.position.z =
      THREE.MathUtils.lerp(
        particles.position.z,
        targetZ,
        0.025
      );

    /*
    ------------------------------------------
    NATURAL FLOATING
    ------------------------------------------
    */

    particles.position.y +=
      Math.sin(time * 0.2) *
      0.002 *
      (0.5 + settleAmount * 0.5);

    /*
    ------------------------------------------
    ROTATION
    ------------------------------------------
    */

    const targetRotationY =
      baseRotation +
      skillsRotation * settleAmount;

    particles.rotation.y =
      THREE.MathUtils.lerp(
        particles.rotation.y,
        targetRotationY,
        0.02
      );

    /*
    ------------------------------------------
    X ROTATION
    ------------------------------------------
    */

    const targetRotationX =
      Math.sin(time * 0.1) *
      0.008 +
      projectsInfluence *
      Math.sin(time * 0.4) *
      0.08 *
      settleAmount;

    particles.rotation.x =
      THREE.MathUtils.lerp(
        particles.rotation.x,
        targetRotationX,
        0.02
      );

    /*
    ------------------------------------------
    Z ROTATION
    ------------------------------------------
    */

    const targetRotationZ =
      skillsInfluence *
      Math.sin(time * 0.35) *
      0.12 *
      settleAmount;

    particles.rotation.z =
      THREE.MathUtils.lerp(
        particles.rotation.z,
        targetRotationZ,
        0.02
      );
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