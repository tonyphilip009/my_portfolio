import { memo, useRef, useMemo, useEffect } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

function Particles({ particlesRef }) {
  const internalRef = useRef();

  /*
  ==========================================
  PARTICLE OBJECT REF
  ==========================================
  */

  const particleObjectRef =
    particlesRef || internalRef;

  /*
  ==========================================
  SMOOTH SCROLL VALUE
  ==========================================
  */

  const scrollProgressRef = useRef({
    current: 0,
  });

  /*
  ==========================================
  CACHED SECTION INFLUENCES
  ==========================================
  */

  const sectionInfluencesRef = useRef({
    scroll: -1,
    home: 0,
    about: 0,
    projects: 0,
    experience: 0,
    contact: 0,
  });

  /*
  ==========================================
  PAGE VISIBILITY
  ==========================================
  */

  const isPageVisibleRef = useRef(
    !document.hidden
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      isPageVisibleRef.current =
        !document.hidden;
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  /*
  ==========================================
  DETECT MOBILE DEVICE
  ==========================================
  */

  const isMobile = useMemo(() => {
    return window.matchMedia(
      "(max-width: 768px)"
    ).matches;
  }, []);

  /*
  ==========================================
  PARTICLE COUNT
  ==========================================
  */

  const particleCount = isMobile
    ? 750
    : 2000;

  /*
  ==========================================
  PRECOMPUTED PARTICLE POSITIONS
  ==========================================
  */

  const positions = useMemo(() => {
    const data = new Float32Array(
      particleCount * 3
    );

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const radius =
        5 + Math.random() * 8;

      const angle =
        Math.random() *
        Math.PI *
        2;

      const depth =
        (Math.random() - 0.5) * 12;

      const index = i * 3;

      data[index] =
        Math.cos(angle) *
        radius;

      data[index + 1] =
        (Math.random() - 0.5) * 8;

      data[index + 2] =
        Math.sin(angle) *
          radius +
        depth;
    }

    return data;
  }, [particleCount]);

  /*
  ==========================================
  GLOW TEXTURE
  ==========================================
  */

  const glowTexture = useMemo(() => {
    const canvas =
      document.createElement(
        "canvas"
      );

    canvas.width = 64;
    canvas.height = 64;

    const context =
      canvas.getContext("2d");

    const gradient =
      context.createRadialGradient(
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

    context.fillRect(
      0,
      0,
      64,
      64
    );

    const texture =
      new THREE.CanvasTexture(
        canvas
      );

    texture.minFilter =
      THREE.LinearFilter;

    texture.magFilter =
      THREE.LinearFilter;

    texture.wrapS =
      THREE.ClampToEdgeWrapping;

    texture.wrapT =
      THREE.ClampToEdgeWrapping;

    texture.needsUpdate = true;

    return texture;
  }, []);

  /*
  ==========================================
  MATERIAL CONFIGURATION
  ==========================================
  */

  const materialConfig = useMemo(
    () => ({
      transparent: true,
      map: glowTexture,
      color: "#60a5fa",
      size: 0.16,
      sizeAttenuation: true,
      depthWrite: false,
      opacity: 0.85,
      toneMapped: false,
      blending: THREE.AdditiveBlending,
    }),
    [glowTexture]
  );

  /*
  ==========================================
  GSAP SCROLL SMOOTHING
  ==========================================
  */

  useEffect(() => {
    const scrollState =
      scrollProgressRef.current;

    const smoothScrollTo =
      gsap.quickTo(
        scrollState,
        "current",
        {
          duration: 0.8,
          ease: "power3.out",
        }
      );

    let scrollFrameId = null;

    const updateScroll = () => {
      if (scrollFrameId !== null) {
        return;
      }

      scrollFrameId =
        window.requestAnimationFrame(() => {
          scrollFrameId = null;

          const scrollY =
            window.scrollY;

          const maxScroll =
            document.documentElement
              .scrollHeight -
            window.innerHeight;

          const progress =
            maxScroll > 0
              ? scrollY / maxScroll
              : 0;

          smoothScrollTo(progress);
        });
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      if (scrollFrameId !== null) {
        window.cancelAnimationFrame(
          scrollFrameId
        );
      }

      gsap.killTweensOf(
        scrollState
      );
    };
  }, []);

  /*
  ==========================================
  CLEAN UP TEXTURE
  ==========================================
  */

  useEffect(() => {
    return () => {
      glowTexture.dispose();
    };
  }, [glowTexture]);

  /*
  ==========================================
  ANIMATION CONSTANTS
  ==========================================
  */

  const particleLerpX = 0.02;
  const particleLerpY = 0.02;
  const particleLerpZ = 0.025;

  const mouseInfluenceX = 0.15;
  const mouseInfluenceY = 0.1;

  const floatingSpeed = 0.2;
  const floatingStrength = 0.002;

  const experienceSpeedX = 0.4;
  const experienceSpeedY = 0.35;
  const projectSpeed = 0.6;

  /*
  ==========================================
  PARTICLE ANIMATION
  ==========================================
  */

  useFrame((state) => {
    /*
    ------------------------------------------
    SKIP WHEN TAB IS HIDDEN
    ------------------------------------------
    */

    if (!isPageVisibleRef.current) {
      return;
    }

    const particles =
      particleObjectRef.current;

    if (!particles) return;

    /*
    ------------------------------------------
    TIME
    ------------------------------------------
    */

    const time =
      state.clock.elapsedTime;

    /*
    ------------------------------------------
    MOUSE
    ------------------------------------------
    */

    const mouseX =
      state.pointer.x;

    const mouseY =
      state.pointer.y;

    /*
    ------------------------------------------
    SCROLL
    ------------------------------------------
    */

    const scrollProgress =
      scrollProgressRef.current
        .current;

    /*
    ------------------------------------------
    SECTION INFLUENCES
    ------------------------------------------
    */

    const influences =
      sectionInfluencesRef.current;

    if (
      Math.abs(
        scrollProgress -
          influences.scroll
      ) > 0.0001
    ) {
      influences.scroll =
        scrollProgress;

      influences.home =
        THREE.MathUtils.smoothstep(
          scrollProgress,
          0,
          0.18
        );

      influences.about =
        THREE.MathUtils.smoothstep(
          scrollProgress,
          0.15,
          0.35
        );

      influences.projects =
        THREE.MathUtils.smoothstep(
          scrollProgress,
          0.5,
          0.75
        );

      influences.experience =
        THREE.MathUtils.smoothstep(
          scrollProgress,
          0.7,
          0.9
        );

      influences.contact =
        THREE.MathUtils.smoothstep(
          scrollProgress,
          0.85,
          1
        );
    }

    /*
    ------------------------------------------
    CACHED INFLUENCES
    ------------------------------------------
    */

    const homeInfluence =
      influences.home;

    const aboutInfluence =
      influences.about;

    const projectsInfluence =
      influences.projects;

    const experienceInfluence =
      influences.experience;

    const contactInfluence =
      influences.contact;

    /*
    ------------------------------------------
    SETTLE
    ------------------------------------------
    */

    const settleAmount =
      1 - contactInfluence;

    /*
    ------------------------------------------
    ABOUT
    ------------------------------------------
    */

    const aboutShift =
      aboutInfluence * 3.5;

    /*
    ------------------------------------------
    EXPERIENCE
    ------------------------------------------
    */

    const experienceX =
      experienceInfluence *
      Math.sin(
        time * experienceSpeedX
      ) *
      1.2;

    const experienceY =
      experienceInfluence *
      Math.cos(
        time * experienceSpeedY
      ) *
      0.8;

    /*
    ------------------------------------------
    PROJECTS
    ------------------------------------------
    */

    const projectDepth =
      projectsInfluence *
      Math.sin(
        time * projectSpeed
      ) *
      1.5;

    /*
    ------------------------------------------
    TARGET POSITION
    ------------------------------------------
    */

    const targetX =
      (
        mouseX *
          mouseInfluenceX +
        aboutShift +
        experienceX
      ) *
      settleAmount;

    const targetY =
      (
        mouseY *
          mouseInfluenceY +
        homeInfluence *
          (scrollProgress * 1.5) +
        experienceY
      ) *
      settleAmount;

    const targetZ =
      projectDepth *
      settleAmount;

    /*
    ------------------------------------------
    SMOOTH POSITION
    ------------------------------------------
    */

    particles.position.x =
      THREE.MathUtils.lerp(
        particles.position.x,
        targetX,
        particleLerpX
      );

    particles.position.y =
      THREE.MathUtils.lerp(
        particles.position.y,
        targetY,
        particleLerpY
      );

    particles.position.z =
      THREE.MathUtils.lerp(
        particles.position.z,
        targetZ,
        particleLerpZ
      );

    /*
    ------------------------------------------
    NATURAL FLOATING
    ------------------------------------------
    */

    if (settleAmount > 0.001) {
      particles.position.y +=
        Math.sin(
          time * floatingSpeed
        ) *
        floatingStrength *
        (0.5 + settleAmount * 0.5);
    }
  });

  /*
  ==========================================
  RENDER
  ==========================================
  */

  return (
    <Points
      ref={particleObjectRef}
      positions={positions}
      stride={3}
      frustumCulled={true}
    >
      <PointMaterial
        {...materialConfig}
      />
    </Points>
  );
}

export default memo(Particles);