import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import DeveloperWorkspace from "./DeveloperWorkspace";
import Model from "./Model";
import Particles from "./Particles";
import ScrollAnimation from "./ScrollAnimation";

function Hero3D() {
  const workspaceRef = useRef();
  const modelRef = useRef();
  const particlesRef = useRef();

  return (
    <div className="hero-3d-container h-full w-full">

      <Canvas
        shadows
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
            AMBIENT LIGHT
        ========================================== */}

        <ambientLight intensity={0.55} />

        {/* ==========================================
            MAIN KEY LIGHT
        ========================================== */}

        <directionalLight
          position={[5, 7, 6]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* ==========================================
            FRONT LIGHT
        ========================================== */}

        <pointLight
          position={[2, 3, 5]}
          intensity={1.2}
          distance={12}
        />

        {/* ==========================================
            BLUE RIM LIGHT
        ========================================== */}

        <pointLight
          position={[-4, 2, 3]}
          color="#3b82f6"
          intensity={2}
          distance={12}
        />

        {/* ==========================================
            CYAN SIDE LIGHT
        ========================================== */}

        <pointLight
          position={[4, 0, -2]}
          color="#38bdf8"
          intensity={1.2}
          distance={10}
        />

        {/* ==========================================
            3D PARTICLES
        ========================================== */}

        <Particles
          particlesRef={particlesRef}
        />

        {/* ==========================================
            DEVELOPER WORKSPACE
        ========================================== */}

        <DeveloperWorkspace
          groupRef={workspaceRef}
        />

        {/* ==========================================
            ROBOT
        ========================================== */}

        <Model
          modelRef={modelRef}
        />

        {/* ==========================================
            SCROLL ANIMATION
        ========================================== */}

        <ScrollAnimation
          workspaceRef={workspaceRef}
          modelRef={modelRef}
          particlesRef={particlesRef}
        />

        {/* ==========================================
            CONTROLS
        ========================================== */}

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={false}
        />

      </Canvas>

    </div>
  );
}

export default Hero3D;