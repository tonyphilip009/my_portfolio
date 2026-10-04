import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function Particles() {
  const particlesRef = useRef();

  const positions = useMemo(() => {
    const points = [];

    for (let i = 0; i < 500; i++) {
      points.push(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y =
        state.clock.elapsedTime * 0.02;

      particlesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
    }
  });

  return (
    <Points
      ref={particlesRef}
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default Particles;