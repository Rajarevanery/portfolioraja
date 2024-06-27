import React from "react";
import shuush from "../assets/shush.jpeg";
import rustoff from "../assets/rustoff.png";
import habits from "../assets/habits.png";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <h1 className="font-header text-[15vw] flex justify-center items-center">
        <span className="w-20 h-20 bg-black"></span>SHOWCASE
      </h1>
      <div className="grid grid-cols-12 grid-rows-4 gap-10 p-10 text-center">
        <motion.div
          initial={{ rotate: 10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-black/20 col-span-3 row-span-4 flex justify-center items-center"
        >
          <span className="text-8xl font-header -skew-x-6">20+</span>
        </motion.div>
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border border-black/20 col-span-9 row-span-4 flex justify-center items-center"
        >
          <span className="text-7xl font-tiny font-semibold skew-x-6">
            TOTAL
          </span>
        </motion.div>
        <motion.div
          initial={{ rotate: 5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="border border-black/20 col-span-9 row-span-4 flex justify-center items-center"
        >
          <span className="text-7xl font-header font-semibold">PROJECTS</span>
        </motion.div>
        <motion.div
          initial={{ rotate: -5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="border border-black/20 col-span-3 row-span-4 flex justify-center items-center"
        >
          <span className="text-7xl font-header">MADE</span>
        </motion.div>
        <motion.div
          initial={{ rotate: 15, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="border border-black/20 col-span-3 row-span-8 flex justify-center items-center"
        >
          <span className="text-7xl font-header">HAND</span>
        </motion.div>
        <motion.div
          initial={{ rotate: 5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.9 }}
          className="border border-black/20 col-span-3 row-span-4 flex justify-center items-center"
        >
          <span className="text-7xl font-header">BY</span>
        </motion.div>
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.1 }}
          className="border border-black/20 col-span-6 row-span-4 flex justify-center items-center"
        >
          <span className="text-7xl font-tiny">HAND</span>
        </motion.div>
        <motion.div
          initial={{ rotate: 5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="border border-black/20 col-span-3 row-span-4 flex justify-center items-center text-7xl font-header"
        >
          3 LATEST
        </motion.div>
        <motion.div
          initial={{ rotate: -5, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="border border-black/20 col-span-6 row-span-4 flex justify-center items-center text-7xl font-header"
        >
          <span className="font-tiny">PROJECT SHOWCASED</span>
        </motion.div>
      </div>
      <h1 className="flex justify-center items-center text-7xl font-header my-10">
        PROJECTS (LATEST)
      </h1>

      <div className="p-4 flex flex-col gap-10 justify-center items-center border border-black/20 rounded container mx-auto">
        <div className="relative flex justify-center items-center group">
          <motion.img
            initial={{ rotate: 10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            src={shuush}
            alt=""
            className="w-[100%] col-span-2 rounded-lg group-hover:brightness-50 transition-all group-hover:blur-[3px]"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all text-white text-center">
            <h1 className="text-white font-header text-xl font-semibold">
              Shuushlofi!
            </h1>
            <p className="w-[30vw] text-balance font-paragraphtwo">
              Web app, untuk bagi kamu untuk belajar!, tambahkan favorit
              lagumu/playlistmu, set-up timer/pomodoro timer untuk meningkatkan
              efektivitas kamu!, dan track/add task kamu!.
            </p>
          </div>
        </div>
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <div className="relative flex justify-center items-center group">
          <motion.img
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            src={rustoff}
            className=" relative rounded-lg group-hover:blur-[3px] transition-all group-hover:brightness-50"
            alt=""
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all text-white text-center">
            <h1 className="text-white font-header text-xl font-semibold">
              Rust Offline Notificator (Rustoff)
            </h1>
            <p className="w-[30vw] text-balance font-paragraphtwo">
              Web app, untuk track online/offline player di suatu (rust) server,
              akan display destkop notification jika sudah 0/5 player, export
              data dan juga lihat map.
            </p>
          </div>
        </div>
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <h1 className="font-header text-[9vw] flex justify-between items-center col-span-2">
          <span className="w-20 h-20 bg-black"></span>Latest Project
          <span className="w-20 h-20 bg-black rounded-full"></span>
        </h1>{" "}
        <div className="w-screen bg-black/20 h-[0.5px]" />
        <div className="relative flex justify-center items-center group">
          <motion.img
            initial={{ rotate: 10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true }}
            src={habits}
            alt=""
            className=" relative rounded-lg group-hover:blur-[3px] transition-all group-hover:brightness-50"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all text-white text-center">
            <h1 className="text-white font-header text-xl font-semibold">
              Habit Quest
            </h1>
            <p className="w-[30vw] text-balance font-paragraphtwo">
              Web app, track habit dengan orang lain, buat kategori(habit) untuk
              orang lain dan kamu untuk track habit dengan exp dan level sistem
              dan leaderboard!.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen bg-black/20 h-[0.5px]" />

      <div className="w-screen h-screen bg-white flex justify-center items-center text-black">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-header text-6xl"
        >
          Thank you.
        </motion.h1>
      </div>
    </div>
  );
};

export default Showcase;
