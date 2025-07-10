import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import rustoff from "../assets/rustoff.png";
import wasteless from "../assets/wasteless.png";
import shuush from "../assets/shuush.png";
import { RiArrowRightDownLine } from "react-icons/ri";
import picture from "../assets/me.png";

const Project = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  let dev = ["S", "K", "I", "L", "L"];
  const project = [
    {
      name: "Rustoff Notifier",
      image: rustoff,
      description: "Dimana bisa cek kalo user offline atau kaga",
      github: "",
    },
    {
      name: "Wasteless Eats",
      image: wasteless,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Shuushlofi",
      image: shuush,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Habit Quest",
      image: rustoff,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Anmochill",
      image: shuush,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Rustoff Notifier",
      image: rustoff,
      description: "Dimana bisa cek kalo user offline atau kaga",
      github: "",
    },
    {
      name: "Wasteless Eats",
      image: wasteless,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Shuushlofi",
      image: shuush,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Habit Quest",
      image: rustoff,
      description: "Habit Quest",
      github: "",
    },
    {
      name: "Anmochill",
      image: shuush,
      description: "Habit Quest",
      github: "",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      y: "100%",
    },
    animate: (index) => ({
      y: 0,
      transition: {
        type: "spring",
        delay: 0.15 * index,
        duration: 0.5,
      },
    }),
  };
  return (
    <>
      <div ref={targetRef} className="relative h-[300vh] bg-white p-10">
        <div className="sticky top-0 flex items-center h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            <div className="w-fit">
              <h1 className="font-head font-semibold text-[6.5vw] w-[20ch]">
                FULLSTACK, MOBILE{" "}
                <span className="px-2 py-1 text-white bg-black">DEVELOPER</span>{" "}
                & CLOUD ENGINEER
              </h1>
              <div className="relative flex flex-row justify-between text-xl font-tiny top-10">
                <p className="font-tiny w-[10ch]">Hello, im Raja!</p>
                <div className="flex flex-col gap-2">
                  <p className="w-[40ch]">
                    Since 2019, Ive been diving into the world of coding, and
                    along the way, Ive had many exciting experiences.
                  </p>
                  <p className="w-[30ch]">
                    Its because of this journey that Ive made it to where I am
                    today!
                  </p>
                </div>
              </div>
            </div>
            <img
              src={picture}
              className="w-[30vw] h-[90vh] object-cover object-center rounded-lg"
              alt=""
            />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <h1 className="flex flex-row items-center gap-2 text-[1.5vw] font-header">
                  {" "}
                  <span className="bg-black w-7 h-7"></span>{" "}
                  <span>FULLSTACK / WEB DEVELOPMENT</span>
                </h1>
                <p className="font-paragraphtwo w-[40ch] text-[1vw]">
                  I specialize in building modern fullstack web applications
                  using technologies like React, Tailwind CSS, Node.js, and
                  Prisma. Ive worked on real-world projects involving
                  authentication, dynamic content, admin tools, blog systems,
                  and booking platforms all designed with performance, UX, and
                  scalability in mind.
                </p>
                <span className="text-2xl font-tiny">[01]</span>
              </div>
              <div className="flex flex-col gap-10">
                <h1 className="flex flex-row items-center gap-2 text-[1.5vw] font-header">
                  {" "}
                  <span className="bg-black w-7 h-7"></span> <span>MOBILE</span>
                </h1>
                <p className="font-paragraphtwo w-[40ch] text-[1vw]">
                  Developed mobile apps using Android Studio (Kotlin) with
                  Jetpack Compose and Material UI, as well as Flutter, to create
                  smooth, intuitive, and responsive user experiences.
                </p>
                <span className="text-2xl font-tiny">[02]</span>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <h1 className="flex flex-row items-center gap-2 text-[1.5vw] font-header">
                  {" "}
                  <span className="bg-black w-7 h-7"></span>{" "}
                  <span>TECHNOLOGIES</span>
                </h1>
                <p className="font-paragraphtwo w-[40ch] text-[1vw]">
                  React.js, Tailwind CSS, Node.js, Express, Prisma, React Query,
                  Supabase, Firebase, Django, PostgreSQL, MySQL, Redux Toolkit,
                  Framer Motion, Web Speech API, Vite, Figma.
                </p>
                <span className="text-2xl font-tiny">[03]</span>
              </div>
            </div>

            <i className="text-[20vw] relative flex justify-center items-end">
              <RiArrowRightDownLine />
            </i>

            {/* {project.map((item, i) => (
              <div className="rounded-lg group">
                <h1 className="px-2 mb-2 text-[1.5vw] text-white transition-all skew-x-6 border rounded-full group-hover:text-yellow-200 font-tiny bg-zinc-900 border-white/20 w-fit">
                  {item.name}
                </h1>
                <div className="min-w-[40em] hover:min-w-[60em] transition-all">
                  <img
                    src={item?.image}
                    className="h-[30em] skew-x-6 brightness-50 hover:brightness-100 transition-all object-center object-cover rounded-lg border border-white/20"
                    alt=""
                  />
                </div>
              </div>
            ))} */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Project;
