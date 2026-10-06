import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

import Particles from "./Particles";
import ScrollAnimation from "./ScrollAnimation";

function Hero3D() {
  const particlesRef = useRef();

  return (
    <div className="hero-3d-container h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        {/* ==========================================
            PARTICLES
        ========================================== */}

        <Particles particlesRef={particlesRef} />

        {/* ==========================================
            SCROLL ANIMATION
        ========================================== */}

        <ScrollAnimation particlesRef={particlesRef} />
      </Canvas>
    </div>
  );
}

export default Hero3D;