import React from "react";
import { motion } from "framer-motion";
const type = [
  {
    name: "React",
    span: 2,
  },
  {
    name: "Tailwind",
    span: 1,
  },
  {
    name: "MongoDB",
    span: 3,
  },
  {
    name: "Supabase",
    span: 2,
  },
  {
    name: "Firebase",
    span: 1,
  },
  {
    name: "Kotlin",
    span: 1,
  },
  {
    name: "MaterialUI",
    span: 2,
  },
  {
    name: "POSTGRESQL",
    span: 3,
  },
  {
    name: "Django",
    span: 2,
  },
  {
    name: "Bootstrap",
    span: 2,
  },
];

const fadeInAnimationVariants = {
  initial: {
    y: 200,
  },
  animate: (index) => ({
    y: 0,
    transition: {
      type: "spring",
      delay: 0.09 * index,
      duration: 1,
    },
  }),
};

const Skill = () => {
  return (
    <div className="w-screen min-h-[25vh] flex-col bg-primary text-white font-tiny flex justify-center p-4">
      <h1 className="text-4xl my-2">Skills</h1>
      <ul className="grid grid-cols-8 gap-4 grid-flow-row-dense overflow-hidden">
        {type.map((item, i) => (
          <motion.li className={`relative overflow-hidden col-span-${item.span} `}>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              animate="animate"
              custom={i}
              className="border border-white/20 px-4 text-center rounded-full hover:bg-white hover:text-black transition-all cursor-default"
            >
              {item.name}
            </motion.p>
          </motion.li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Skill;
