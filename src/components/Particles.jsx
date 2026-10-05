import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

function Particles({ particlesRef }) {
  const internalRef = useRef();

  const positions = useMemo(() => {
    const points = [];

    // More particles + larger space
    for (let i = 0; i < 1000; i++) {
      points.push(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      );
    }

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    const particles =
      particlesRef?.current || internalRef.current;

    if (!particles) return;

    const time = state.clock.elapsedTime;

    // Slow continuous rotation
    particles.rotation.y = time * 0.025;

    particles.rotation.x =
      Math.sin(time * 0.15) * 0.04;

    // Very subtle floating movement
    particles.position.y =
      Math.sin(time * 0.2) * 0.15;

    particles.position.x =
      Math.cos(time * 0.15) * 0.1;

    particles.position.z =
      Math.sin(time * 0.12) * 0.1;
  });

  return (
    <Points
      ref={particlesRef || internalRef}
      positions={positions}
      stride={3}
    >
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default Particles;