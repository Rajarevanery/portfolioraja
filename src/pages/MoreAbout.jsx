import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import raja from "../assets/me.png";

const MoreAbout = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageY = useTransform(scrollYProgress, [0.5, 1], ["100%", "50%"]);

  return (
    <div className="bg-white w-screen h-[200vh] text-black flex flex-col items-center">
      <div className="sticky top-0 h-[100vh] flex flex-col justify-center items-center">
        <h1 className="font-tiny text-4xl">Kenapa saya memilih menjadi dev?</h1>
        <motion.p
          className="text-2xl 2xl:text-3xl w-[40ch] text-center font-subheader font-bold"
          ref={element}
          style={{ scale: textScale, opacity: textOpacity }}
        >
          Karena saya yang awalnya hobi main game maupun itu MMO, FPS, Rhytm
          Game, Survival, Casual. Karena Informatika berinteraksi dengan
          komputer makanya saya memilih informatika karena ekspetasi sama
          serunya seperti bermain game😅
        </motion.p>
      </div>
    </div>
  );
};

export default MoreAbout;
