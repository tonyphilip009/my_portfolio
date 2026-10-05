import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model({ modelRef }) {
  const { scene } = useGLTF("/models/robot.glb");

  useFrame((state) => {
    if (!modelRef?.current) return;

    // Slow automatic rotation
    modelRef.current.rotation.y += 0.005;

    // Gentle floating movement
    modelRef.current.position.y =
      -0.2 +
      Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
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