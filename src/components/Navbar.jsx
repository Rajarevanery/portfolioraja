import React, { useState, useEffect } from "react";
import { CiSun } from "react-icons/ci";
import { WiMoonAltWaningGibbous1 } from "react-icons/wi";
import { CgMoon } from "react-icons/cg";
import { MdOutlineTransitEnterexit } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime);
      const jakartaTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      }).format(currentTime);
      setIsDay(currentTime.getHours() >= 6 && currentTime.getHours() < 18);
      return jakartaTime;
    };

    const intervalId = setInterval(updateTime, 60000);
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  const jakartaTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Jakarta",
  }).format(time);

  return (
    <nav className="w-screen bg-primary h-[10vh] border-b-[0.2px] border-white/20 py-10 px-20 justify-between flex items-center text-white">
      <section className="font-header font-bold text-gray-500 text-2xl flex gap-10 cursor-pointer">
        <span className="hover:text-white transition-all">RAJA PORTFOLIO</span>
      </section>

      <section className="font-subheader text-lg">
        <p className="flex flex-row gap-2 items-center justify-center">
          Berlokasi di Indonesia{" "}
          <span
            className={`text-4xl ${
              isDay ? "text-orange-600" : "text-white/50"
            }`}
          >
            {isDay ? <CiSun /> : <CgMoon />}
          </span>{" "}
          {jakartaTime}
        </p>
      </section>
      <section className="font-header font-bold">
        <a href="https://api.whatsapp.com/send?phone=6287800059194" target="_blank">
          <button className="group border border-gray-500/75 px-4 py-2 flex flex-row items-center justify-center gap-4 hover:bg-white hover:text-black transition-all">
            CONTACT ME{" "}
            <i className="text-2xl border border-white/30 group-hover:border-black">
              <MdOutlineTransitEnterexit />
            </i>
          </button>
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
