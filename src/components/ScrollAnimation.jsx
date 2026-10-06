import { useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation({ particlesRef }) {
  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    const particles = particlesRef?.current;

    let idleCallbackId;
    let animationFrameId;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      /*
      ==========================================
      HOME → ABOUT
      ==========================================
      */

      timeline.to(
        camera.position,
        {
          x: 0.8,
          y: 0.3,
          z: 7.7,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: 0.08,
            y: 0.5,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      }

      /*
      ==========================================
      ABOUT → SKILLS
      ==========================================
      */

      timeline.to(camera.position, {
        x: -0.8,
        y: 0.5,
        z: 7.5,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: -0.08,
            y: 1.1,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      SKILLS → EDUCATION
      ==========================================
      */

      timeline.to(camera.position, {
        x: 0.7,
        y: -0.2,
        z: 7.7,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: 0.06,
            y: 1.7,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      EDUCATION → PROJECTS
      ==========================================
      */

      timeline.to(camera.position, {
        x: -0.7,
        y: 0.3,
        z: 7.6,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: -0.06,
            y: 2.3,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      PROJECTS → EXPERIENCE
      ==========================================
      */

      timeline.to(camera.position, {
        x: 0.9,
        y: 0.5,
        z: 7.7,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: 0.08,
            y: 3,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      EXPERIENCE → RESUME
      ==========================================
      */

      timeline.to(camera.position, {
        x: -0.9,
        y: -0.2,
        z: 7.6,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: -0.08,
            y: 3.7,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      RESUME → CONTACT
      ==========================================
      */

      timeline.to(camera.position, {
        x: 0,
        y: 0.3,
        z: 8,
        duration: 1,
        ease: "power2.inOut",
      });

      if (particles) {
        timeline.to(
          particles.rotation,
          {
            x: 0,
            y: Math.PI * 2,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        );
      }

      /*
      ==========================================
      INITIAL REFRESH
      ==========================================
      */

      if ("requestIdleCallback" in window) {
        idleCallbackId =
          window.requestIdleCallback(() => {
            ScrollTrigger.refresh();
          });
      } else {
        animationFrameId =
          window.requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
      }
    });

    /*
    ============================================
    CLEANUP
    ============================================
    */

    return () => {
      if (idleCallbackId !== undefined) {
        window.cancelIdleCallback(
          idleCallbackId
        );
      }

      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(
          animationFrameId
        );
      }

      ctx.revert();

      camera.position.set(0, 0, 8);
      camera.lookAt(0, 0, 0);

      if (particles) {
        particles.position.set(0, 0, 0);
        particles.rotation.set(0, 0, 0);
      }
    };
  }, [camera, particlesRef]);

  return null;
}

export default ScrollAnimation;