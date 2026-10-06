import { memo, useRef } from "react";
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
        dpr={[1, 1.25]}
        performance={{
          min: 0.5,
          max: 1,
          debounce: 200,
        }}
        gl={{
          antialias: false,
          alpha: true,
          depth: false,
          stencil: false,
          powerPreference: "high-performance",
        }}
      >
        <Particles
          particlesRef={particlesRef}
        />

        <ScrollAnimation
          particlesRef={particlesRef}
        />
      </Canvas>
    </div>
  );
}

export default memo(Hero3D);