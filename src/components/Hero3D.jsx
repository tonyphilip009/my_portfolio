import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";

function Cube() {
  const cubeRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (!cubeRef.current) return;

    // -----------------------------
    // 1. Automatic rotation
    // -----------------------------
    cubeRef.current.rotation.y += delta * 0.3;

    // -----------------------------
    // 2. Mouse position
    // -----------------------------
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // -----------------------------
    // 3. Mouse tilt
    // -----------------------------
    const targetTiltX = mouseY * 0.4;
    const targetTiltY = mouseX * 0.4;

    // Smooth tilt
    cubeRef.current.rotation.x +=
      (targetTiltX - cubeRef.current.rotation.x) * 0.05;

    // Add mouse tilt without removing
    // the automatic rotation
    cubeRef.current.rotation.y +=
      targetTiltY * 0.02;
  });

  return (
    <mesh
      ref={cubeRef}
      scale={clicked ? 1.3 : 1}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(false);
      }}
      onClick={(event) => {
        event.stopPropagation();
        setClicked((value) => !value);
      }}
    >
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color={
          clicked
            ? "#22c55e"
            : hovered
              ? "#60a5fa"
              : "#3b82f6"
        }
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

function Hero3D() {
  return (
    <div className="hero-3d-container">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 50,
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        {/* Interactive Cube */}
        <Cube />

        {/* Zoom only */}
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