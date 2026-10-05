import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GSAPTest() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        y: 300,
        duration: 2,
        opacity: 0,
        ease: "power2.out",

        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* SECTION 1 */}
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="text-5xl text-white font-bold">
          SCROLL DOWN
        </h1>
      </div>

      {/* SECTION 2 */}
      <div className="h-screen bg-slate-800 flex items-center justify-center">
        <div
          ref={boxRef}
          className="w-40 h-40 bg-blue-500 rounded-2xl flex items-center justify-center"
        >
          <span className="text-white text-2xl font-bold">
            GSAP
          </span>
        </div>
      </div>
    </div>
  );
}

export default GSAPTest;