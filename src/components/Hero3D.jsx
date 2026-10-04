import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import DeveloperWorkspace from "./DeveloperWorkspace";
import Model from "./Model";
import Particles from "./Particles";

function Hero3D() {
  return (
    <div className="hero-3d-container">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 8],
          fov: 55,
        }}
      >
        {/* =================================================
            AMBIENT LIGHT
        ================================================= */}

        <ambientLight intensity={0.8} />

        {/* =================================================
            MAIN LIGHT
        ================================================= */}

        <directionalLight
          position={[5, 6, 5]}
          intensity={2.5}
          castShadow
        />

        {/* =================================================
            FRONT FILL LIGHT
        ================================================= */}

        <pointLight
          position={[2, 2, 4]}
          intensity={1.5}
          distance={10}
        />

        {/* =================================================
            BLUE RIM LIGHT
        ================================================= */}

        <pointLight
          position={[-4, 1, 2]}
          color="#3b82f6"
          intensity={1.5}
          distance={10}
        />

        {/* =================================================
            ANIMATED PARTICLE BACKGROUND
        ================================================= */}

        <Particles />

        {/* =================================================
            DEVELOPER WORKSPACE
        ================================================= */}

        <DeveloperWorkspace />

        {/* =================================================
            GLB ROBOT MODEL
        ================================================= */}

        <Model />

        {/* =================================================
            ZOOM ONLY
        ================================================= */}

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