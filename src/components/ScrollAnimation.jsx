import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation({ particlesRef }) {
  const { camera } = useThree();

  useEffect(() => {
    /*
    ==========================================
    INITIAL CAMERA POSITION
    ==========================================
    */

    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    /*
    ==========================================
    GSAP CONTEXT
    ==========================================
    */

    const ctx = gsap.context(() => {
      /*
      ==========================================
      MAIN SCROLL TIMELINE
      ==========================================
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,

          start: "top top",

          end: "bottom bottom",

          scrub: 3,
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 0.5,
            x: 0.08,

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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 1.1,
            x: -0.08,

            duration: 1,

            ease: "power2.inOut",
          }
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 1.7,
            x: 0.06,

            duration: 1,

            ease: "power2.inOut",
          }
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 2.3,
            x: -0.06,

            duration: 1,

            ease: "power2.inOut",
          }
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 3,
            x: 0.08,

            duration: 1,

            ease: "power2.inOut",
          }
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: 3.7,
            x: -0.08,

            duration: 1,

            ease: "power2.inOut",
          }
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

      if (particlesRef?.current) {
        timeline.to(
          particlesRef.current.rotation,
          {
            y: Math.PI * 2,
            x: 0,

            duration: 1,

            ease: "power2.inOut",
          }
        );
      }

      /*
      ==========================================
      REFRESH SCROLLTRIGGER
      ==========================================
      */

      ScrollTrigger.refresh();
    });

    /*
    ==========================================
    CLEANUP
    ==========================================
    */

    return () => {
      ctx.revert();

      camera.position.set(0, 0, 8);

      camera.lookAt(0, 0, 0);

      if (particlesRef?.current) {
        particlesRef.current.position.set(0, 0, 0);

        particlesRef.current.rotation.set(0, 0, 0);
      }
    };
  }, [camera, particlesRef]);

  return null;
}

export default ScrollAnimation;