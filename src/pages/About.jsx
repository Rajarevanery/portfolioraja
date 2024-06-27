import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import raja from "../assets/me.png";

const About = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageY = useTransform(scrollYProgress, [0.5, 1], ["100%", "50%"]);

  return (
    <div className="bg-white w-screen h-[300vh] text-black flex flex-col items-center">
      <div className="sticky top-0 h-[100vh] flex flex-col justify-center items-center">
        <h1 className="font-tiny text-4xl">Halo!</h1>
        <motion.p
          className="text-2xl 2xl:text-4xl w-[40ch] text-center font-subheader font-bold"
          ref={element}
          style={{ scale: textScale, opacity: textOpacity }}
        >
          Saya adalah seorang developer asal dari Indonesia, yang sekarang
          sedang berkuliah di Universitas Sultan Ageng Tirtayasa.
        </motion.p>
      </div>
      <motion.img
        src={raja}
        className="w-[200px] h-[250px] sticky top-[8%] xl:top-[20%] rounded-lg"
        alt=""
        style={{ y: imageY }}
      />
    </div>
  );
};

export default About;
