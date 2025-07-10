import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import raja from "../assets/me.png";
import rajadua from "../assets/PASFoto.png";

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
          I am a developer from Indonesia currently pursuing a degree in
          Informatics at Universitas Sultan Ageng Tirtayasa.
        </motion.p>
      </div>
      <motion.img
        src={rajadua}
        className="w-[200px] h-[300px] sticky top-[8%] xl:top-[20%] rounded-lg"
        alt=""
        style={{ y: imageY }}
      />
    </div>
  );
};

export default About;
