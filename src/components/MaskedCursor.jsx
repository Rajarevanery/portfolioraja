import React, { useEffect, useState } from "react";
import "./css/maskedcursor.css";
import { motion } from "framer-motion";
import { WiStars } from "react-icons/wi";


function MaskedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const setFromEvent = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const size = isHovered ? "600" : "30";

  let nama = ["R", "A", "J", "A"];
  let nama1 = ["R", "E", "V", "A", "N", "E", "R", "Y"];
  let nama2 = ["R", "A", "M", "A", "D", "H", "A", "N"];
  let dev = ["D", "E", "V", "E", "L", "O", "P", "E", "R"];

  const fadeInAnimationVariants = {
    initial: {
      y: 500,
    },
    animate: (index) => ({
      y: 0,
      transition: {
        type: "spring",
        delay: 0.09 * index,
        duration: 0.5,
      },
    }),
  };

  const handleAnimationFinished = () => {
    setTimeout(() => {
      setAnimationFinished(true);
    }, 1600);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center flex-col relative">
      <h1 className="text-8xl 2xl:text-9xl font-poppins font-extrabold flex flex-col text-center">
        <span>FULLSTACK, </span>
        <span className="flex flex-row gap-4 justify-center items-center">
          <span>MOBILE</span>
          <span className="font-tiny text-yellow-200 flex flex-row overflow-hidden mt-5">
            {dev.map((item, i) => (
              <motion.p
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
                custom={i}
              >
                {item}
              </motion.p>
            ))}
          </span>
        </span>
        <span>& CLOUD ENGINEER</span>
        <div className="relative top-10 2xl:top-20 text-center flex flex-col justify-center items-center text-lg">
          <div className="flex flex-row justify-between text-[#ECFB5C] w-72 relative font-tiny cursor-default text-lg 2xl:text-xl">
            <p>[Sedikit tentang</p>
            <p>saya]</p>
          </div>

          <p className="text-slate-200 flex flex-col 2xl:text-xl relative top-10 font-paragraphtwo font-normal text-sm">
            <span className="text-end">
              Saya adalah seorang{" "}
              <span className="text-yellow-200 font-tiny">Developer</span>{" "}
              <br />
            </span>{" "}
            <span className="text-start">
              yang-perjalanannya dimulai dari 3 tahun lalu sampai sekarang.
            </span>
            <span className="text-start">
              terus dan menerus untuk mengembangkan skill Web, AI, Mobile.
            </span>
          </p>
        </div>
      </h1>
      <motion.h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="mask text-8xl 2xl:text-9xl font-header font-extrabold  flex flex-col text-center overflow-hidden"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
            mousePosition.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          ease: "backOut",
          duration: 0.4,
        }}
      >
        RAJA <span className="font-tiny">REVANERY</span> RAMADHAN
        {/* <div className="flex flex-row text-center w-fit mx-auto">
          {nama.map((item, i) => (
            <motion.span
              variants={fadeInAnimationVariants}
              key={i}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              custom={i}
            >
              {item}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-row w-fit mx-auto">
          {nama1.map((item, i) => (
            <motion.span
              variants={fadeInAnimationVariants}
              key={i}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              custom={i + 5}
            >
              {item}
            </motion.span>
          ))}
        </div>
        <div className="flex flex-row w-fit mx-auto">
          {nama2.map((item, i) => (
            <motion.span
              variants={fadeInAnimationVariants}
              key={i}
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              custom={i + 10}
            >
              {item}
            </motion.span>
          ))}
        </div> */}
      </motion.h1>
    </div>
  );
}

export default MaskedCursor;
