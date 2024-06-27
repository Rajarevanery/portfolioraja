import React, { useState, useEffect, useRef } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import MaskedCursor from "../components/MaskedCursor";
import "../components/css/maskedcursor.css";

const Hero = () => {
  
  return (
    <motion.div
      className="nocursor bg-primary grid-background min-w-screen h-screen text-2xl text-white grid place-content-center place-items-end overflow-scroll"
    >
      <style jsx>{`
        .grid-background {
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      <MaskedCursor />
    </motion.div>
  );
};

export default Hero;
