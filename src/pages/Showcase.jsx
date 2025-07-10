import React from "react";
import shuush from "../assets/shush.jpeg";
import wasteless from "../assets/wasteless.png";
import wordneko from "../assets/wordneko.png";
import koncohiling from "../assets/koncohiling.png";
import rustoff from "../assets/rustoff.png";
import habits from "../assets/habits.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className="w-screen h-screen bg-white">
      <h1 className="font-header text-6xl md:text-8xl flex justify-center items-center gap-4 mt-10">
        <span className="w-6 h-6 md:w-10 md:h-10 bg-black inline-block"></span>
        <span>SHOWCASE</span>
      </h1>

      <div className="grid grid-cols-12 gap-6 p-10 text-center">
        {/* Total Projects */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-12 md:col-span-4 bg-black text-white p-10 rounded-lg flex flex-col justify-center items-center"
        >
          <span className="text-6xl md:text-7xl font-bold font-header">
            20+
          </span>
          <p className="mt-4 text-lg md:text-xl font-tiny">Total Projects</p>
        </motion.div>

        {/* Latest Projects Title */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 md:col-span-8 bg-white border border-black/20 p-10 rounded-lg flex flex-col justify-center items-center"
        >
          <span className="text-4xl md:text-6xl font-header">
            Latest Projects
          </span>
          <p className="mt-4 text-base md:text-lg font-tiny text-black/70">
            A few highlights from my recent work
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="col-span-12 md:col-span-6 bg-white border border-black/20 p-10 rounded-lg flex flex-col justify-center items-center"
        >
          <span className="text-3xl md:text-5xl font-header">Handcrafted</span>
          <p className="mt-2 text-base md:text-lg font-tiny text-black/70">
            By me - from design to deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="col-span-12 md:col-span-6 bg-white border border-black/20 p-10 rounded-lg flex flex-col justify-center items-center"
        >
          <span className="text-3xl md:text-5xl font-header">
            4 Latest Projects
          </span>
          <p className="mt-2 text-base md:text-lg font-tiny text-black/70">
            Featured in this portfolio
          </p>
        </motion.div>
      </div>

      <h1 className="flex justify-center items-center text-7xl font-header my-10">
        PROJECTS (LATEST)
      </h1>

      <div className="p-4 flex flex-col gap-6">
        {/* Konco Hiling */}
        <div className="border border-black/20 rounded-lg p-6 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={koncohiling}
                alt="Konco Hiling Travel Platform"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold text-lg mb-2">
                Konco Hiling - Travel Booking Platform
              </h3>
              <p className="text-gray-700 mb-3">
                Built a full-stack travel booking platform with tour bookings,
                car rentals, destination browsing, and travel blogs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  React Query
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Express
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Prisma
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wasteless Eats */}
        <div className="border border-black/20 rounded-lg p-6 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={wasteless}
                alt="Wasteless Eats App"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold text-lg mb-2">
                Wasteless Eats - Food Sustainability App
              </h3>
              <p className="text-gray-700 mb-3">
                Android app connecting users with surplus food and reusable
                items, featuring ML-based food quality detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Kotlin
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Jetpack Compose
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Firebase
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  TensorFlow
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Google Maps API
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wordneko */}
        <div className="border border-black/20 rounded-lg p-6 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={wordneko}
                alt="Wordneko Game"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold text-lg mb-2">
                Wordneko - Word Game Platform
              </h3>
              <p className="text-gray-700 mb-3">
                Gamified web app with word games, voice input, and personalized
                word tracking with real-time leaderboards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Supabase
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Web Speech API
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  React Query
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Shuushlofi */}
        <div className="border border-black/20 rounded-lg p-6 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={shuush}
                alt="Shuushlofi App"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-semibold text-lg mb-2">
                Shuushlofi - Productivity App
              </h3>
              <p className="text-gray-700 mb-3">
                Web app combining Pomodoro timers, note-taking, and music
                playback for student productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  React.js
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Redux
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Django REST
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  Howler.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-black/20 h-[0.5px]" />

      <div className="w-screen h-screen bg-white flex flex-col justify-center items-center text-black gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-header text-6xl mb-6"
        >
          Thank you.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-8 text-2xl"
        >
          <a
            href="https://github.com/Rajarevanery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors flex flex-row items-center gap-2"
            title="GitHub"
          >
            <FaGithub />
            RajaRevanery
          </a>
          <a
            href="https://www.linkedin.com/in/rajarevanery/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors flex flex-row gap-2 items-center"
            title="LinkedIn"
          >
            <FaLinkedin />
            <p>rajarevanery</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Showcase;
