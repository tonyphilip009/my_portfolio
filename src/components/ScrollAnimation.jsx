import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation({
  workspaceRef,
  modelRef,
  particlesRef,
}) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    if (workspaceRef?.current) {
      workspaceRef.current.rotation.set(0, 0, 0);
    }

    if (modelRef?.current) {
      modelRef.current.rotation.set(0, 0, 0);
      modelRef.current.position.set(1.2, -0.2, 0.5);
    }

    if (particlesRef?.current) {
      particlesRef.current.rotation.set(0, 0, 0);
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,

          onUpdate: () => {
            camera.lookAt(0, 0, 0);
          },
        },
      });

      // HOME → ABOUT

      timeline.to(
        camera.position,
        {
          x: 1.4,
          y: 0.6,
          z: 7.2,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      if (workspaceRef?.current) {
        timeline.to(
          workspaceRef.current.rotation,
          {
            x: 0.02,
            y: 0.15,
            z: -0.02,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      }

      if (modelRef?.current) {
        timeline.to(
          modelRef.current.position,
          {
            x: 1.4,
            z: 0.35,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        timeline.to(
          modelRef.current.rotation,
          {
            y: 0.3,
            z: 0.02,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      }

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 0.35,
            x: 0.05,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      }

      // ABOUT → SKILLS

      timeline.to(camera.position, {
        x: -1.2,
        y: 0.8,
        z: 7.4,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: 0.04,
          y: -0.18,
          z: 0.025,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 1.0,
          z: 0.55,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: -0.35,
          z: -0.025,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: 0.7,
          x: -0.05,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      // SKILLS → EDUCATION

      timeline.to(camera.position, {
        x: 1.0,
        y: -0.25,
        z: 7.1,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: -0.03,
          y: 0.22,
          z: -0.025,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 1.45,
          z: 0.4,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: 0.45,
          z: 0.02,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: 1.1,
          x: 0.04,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      // EDUCATION → PROJECTS

      timeline.to(camera.position, {
        x: -0.9,
        y: 0.35,
        z: 7.5,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: 0.03,
          y: -0.25,
          z: 0.03,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 0.95,
          z: 0.6,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: -0.45,
          z: -0.025,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: 1.55,
          x: -0.04,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      // PROJECTS → EXPERIENCE

      timeline.to(camera.position, {
        x: 1.3,
        y: 0.7,
        z: 7.2,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: -0.025,
          y: 0.18,
          z: -0.02,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 1.4,
          z: 0.3,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: 0.35,
          z: 0.02,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: 2,
          x: 0.05,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      // EXPERIENCE → RESUME

      timeline.to(camera.position, {
        x: -1.3,
        y: -0.25,
        z: 7.5,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: 0.035,
          y: -0.2,
          z: 0.025,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 1.0,
          z: 0.5,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: -0.35,
          z: -0.02,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: 2.45,
          x: -0.04,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      // RESUME → CONTACT

      timeline.to(camera.position, {
        x: 0,
        y: 0.4,
        z: 8,
        duration: 1,
        ease: "power2.inOut",
      });

      if (workspaceRef?.current) {
        timeline.to(workspaceRef.current.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (modelRef?.current) {
        timeline.to(modelRef.current.position, {
          x: 1.2,
          z: 0.5,
          duration: 1,
          ease: "power2.inOut",
        });

        timeline.to(modelRef.current.rotation, {
          y: 0,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (particlesRef?.current) {
        timeline.to(particlesRef.current.rotation, {
          y: Math.PI * 2,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();

      camera.position.set(0, 0, 8);
      camera.lookAt(0, 0, 0);

      if (workspaceRef?.current) {
        workspaceRef.current.rotation.set(0, 0, 0);
      }

      if (modelRef?.current) {
        modelRef.current.position.set(1.2, -0.2, 0.5);
        modelRef.current.rotation.set(0, 0, 0);
      }

      if (particlesRef?.current) {
        particlesRef.current.rotation.set(0, 0, 0);
      }
    };
  }, [camera, workspaceRef, modelRef, particlesRef]);

  return null;
}

export default ScrollAnimation;