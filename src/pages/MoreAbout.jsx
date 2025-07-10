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
        <h1 className="font-header font-bold text-4xl text-center">
          the WHY of Becoming a Developer
        </h1>
        <motion.p
          className="text-xl 2xl:text-2xl w-[40ch] text-justify font-subheader font-bold"
          ref={element}
          style={{ scale: textScale, opacity: textOpacity }}
        >
          I have a strong background and interest in gaming, which sparked my
          curiosity in computer science and led me to explore the world of
          software development. Along the way, ive built experience in fullstack
          and mobile development, but I discovered that my strongest skill and
          greatest passion is in frontend development. I enjoy crafting
          responsive, accessible, and engaging user interfaces using modern web
          technologies, and Im always eager to keep learning and building
          impactful digital experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default MoreAbout;
