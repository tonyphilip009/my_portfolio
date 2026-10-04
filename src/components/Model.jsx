import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
  const { scene } = useGLTF("/models/robot.glb");

  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      // Slow rotation
      modelRef.current.rotation.y += 0.005;

      // Gentle floating movement
      modelRef.current.position.y =
        -0.2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      position={[1.2, -0.2, 0.5]}
    />
  );
}

export default Model;