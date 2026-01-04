"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Možnost nastavit zpoždění
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: Props) => {
  const ref = useRef(null);
  // once: true znamená, že se animace přehraje jen jednou (nebude mizet při scrollování nahoru)
  const isInView = useInView(ref, { once: true, margin: "-75px" }); 
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 }, // Začínáme o 75px níž a neviditelní
          visible: { opacity: 1, y: 0 }, // Skončíme na svém místě
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
            duration: 0.8, // Délka animace (0.8s je ideální smooth spot)
            delay: delay, 
            ease: [0.25, 0.25, 0.25, 0.75] // Vlastní křivka pro "extra smooth" dojezd
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};