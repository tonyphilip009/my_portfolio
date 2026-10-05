import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function Desk() {
  return (
    <mesh position={[0, -1.5, 0]} receiveShadow castShadow>
      <boxGeometry args={[6, 0.3, 3]} />
      <meshStandardMaterial
        color="#334155"
        metalness={0.4}
        roughness={0.5}
      />
    </mesh>
  );
}

function Monitor() {
  return (
    <group>
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[3.6, 2.1, 0.18]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, 0.4, 0.11]}>
        <boxGeometry args={[3.25, 1.75, 0.03]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#0f172a"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[-0.75, 1.02, 0.14]}>
        <boxGeometry args={[1.15, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh position={[-0.55, 0.75, 0.14]}>
        <boxGeometry args={[1.45, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#60a5fa"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh position={[-0.65, 0.48, 0.14]}>
        <boxGeometry args={[1.25, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh position={[-0.45, 0.21, 0.14]}>
        <boxGeometry args={[1.5, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh position={[-0.6, -0.06, 0.14]}>
        <boxGeometry args={[1.3, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.7}
        />
      </mesh>

      <mesh position={[-0.5, -0.29, 0.14]}>
        <boxGeometry args={[1.4, 0.07, 0.02]} />
        <meshStandardMaterial
          color="#64748b"
          emissive="#64748b"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh position={[0, -0.8, 0]} castShadow>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshStandardMaterial
          color="#64748b"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, -1.3, 0]} castShadow>
        <boxGeometry args={[1.3, 0.12, 0.75]} />
        <meshStandardMaterial
          color="#475569"
          metalness={0.6}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}

function Laptop() {
  return (
    <group position={[-1.8, -1.2, 0.3]}>
      <mesh castShadow>
        <boxGeometry args={[1.8, 0.15, 1.2]} />
        <meshStandardMaterial
          color="#94a3b8"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      <mesh
        position={[0, 0.8, -0.5]}
        rotation={[-0.15, 0, 0]}
        castShadow
      >
        <boxGeometry args={[1.7, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      <mesh
        position={[0, 0.8, -0.44]}
        rotation={[-0.15, 0, 0]}
      >
        <boxGeometry args={[1.45, 0.95, 0.02]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0ea5e9"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh
        position={[-0.38, 0.96, -0.42]}
        rotation={[-0.15, 0, 0]}
      >
        <boxGeometry args={[0.5, 0.035, 0.01]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh
        position={[-0.32, 0.78, -0.42]}
        rotation={[-0.15, 0, 0]}
      >
        <boxGeometry args={[0.65, 0.035, 0.01]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.8}
        />
      </mesh>

      <mesh
        position={[-0.4, 0.6, -0.42]}
        rotation={[-0.15, 0, 0]}
      >
        <boxGeometry args={[0.45, 0.035, 0.01]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

function Phone() {
  return (
    <group
      position={[1.8, -1.2, 0.3]}
      rotation={[0, 0, 0.1]}
    >
      <mesh castShadow>
        <boxGeometry args={[0.7, 1.3, 0.12]} />
        <meshStandardMaterial
          color="#020617"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      <mesh position={[0, 0, 0.07]}>
        <boxGeometry args={[0.58, 1.12, 0.02]} />
        <meshStandardMaterial
          color="#2563eb"
          emissive="#2563eb"
          emissiveIntensity={1}
        />
      </mesh>

      <mesh position={[0, 0.25, 0.09]}>
        <boxGeometry args={[0.35, 0.05, 0.01]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

function Keyboard() {
  const firstRow = [-0.7, -0.35, 0, 0.35, 0.7];
  const secondRow = [-0.6, -0.2, 0.2, 0.6];

  return (
    <group position={[0, -1.25, 0.8]}>
      <mesh castShadow>
        <boxGeometry args={[2.2, 0.12, 0.75]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {firstRow.map((x) => (
        <mesh
          key={`first-${x}`}
          position={[x, 0.08, -0.2]}
        >
          <boxGeometry args={[0.25, 0.04, 0.15]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}

      {secondRow.map((x) => (
        <mesh
          key={`second-${x}`}
          position={[x, 0.08, 0.05]}
        >
          <boxGeometry args={[0.3, 0.04, 0.15]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
      ))}

      <mesh position={[0, 0.08, 0.25]}>
        <boxGeometry args={[0.9, 0.04, 0.15]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
    </group>
  );
}

function Mouse() {
  return (
    <group position={[1.35, -1.25, 0.8]}>
      <mesh castShadow>
        <boxGeometry args={[0.45, 0.12, 0.7]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      <mesh position={[0, 0.08, -0.15]}>
        <boxGeometry args={[0.3, 0.03, 0.2]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  return (
    <group>
      <Text
        position={[-1.9, 2.05, 0.2]}
        fontSize={0.32}
        color="#38bdf8"
        anchorX="center"
        anchorY="middle"
      >
        {"</>"}
      </Text>

      <Text
        position={[0.8, 2.35, 0.2]}
        fontSize={0.24}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
      >
        FULL STACK DEVELOPER
      </Text>

      <Text
        position={[2.05, 1.8, 0.2]}
        fontSize={0.34}
        color="#facc15"
        anchorX="center"
        anchorY="middle"
      >
        {"{ }"}
      </Text>

      <Text
        position={[2.45, 2.45, 0.2]}
        fontSize={0.32}
        color="#c084fc"
        anchorX="center"
        anchorY="middle"
      >
        {"< >"}
      </Text>
    </group>
  );
}

export default function DeveloperWorkspace({ groupRef }) {
  useFrame(() => {
    if (!groupRef?.current) return;

    // Very slow automatic rotation
    groupRef.current.rotation.y += 0.0012;
  });

  return (
    <group
      ref={groupRef}
      position={[0.5, -0.2, 0]}
      scale={0.48}
    >
      <Desk />
      <Monitor />
      <Laptop />
      <Phone />
      <Keyboard />
      <Mouse />
      <FloatingElements />
    </group>
  );
}