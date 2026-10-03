import { useEffect, useRef } from "react";
import * as THREE from "three";

function BasicCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Get the size of the container
    const container = mountRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(width, height);

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    // Transparent background
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // Cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // Cube material
    const material = new THREE.MeshStandardMaterial({
      color: 0x00aaff,
    });

    // Cube mesh
    const cube = new THREE.Mesh(
      geometry,
      material
    );

    // Initial 3D rotation
    cube.rotation.x = 0.4;
    cube.rotation.y = 0.6;

    scene.add(cube);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      1
    );

    scene.add(ambientLight);

    // Directional light
    const directionalLight =
      new THREE.DirectionalLight(
        0xffffff,
        2
      );

    directionalLight.position.set(5, 5, 5);

    scene.add(directionalLight);

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Resize
    function handleResize() {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        newWidth,
        newHeight
      );
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    // Cleanup
    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      if (
        container &&
        container.contains(renderer.domElement)
      ) {
        container.removeChild(
          renderer.domElement
        );
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
    />
  );
}

export default BasicCube;