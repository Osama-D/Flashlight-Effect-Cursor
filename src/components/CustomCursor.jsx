"use client"; // This is a client component 👈🏽

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const cursorRef = useRef(null);

  const variants = {
    default: {
      height: 5000,
      width: 5000,
      transition: {
        type: "spring",
        mass: 0.7,
        duration: 0.5,
      },
    },
  };
  const spring = {
    type: "spring",
    damping: 0.4, // Increase damping for smoother animation
    mass: 0.1, // Reduce mass for smoother animation
    stiffness: 20, // Reduce stiffness for smoother animation
  };
  useEffect(() => {
    function handleMouseMove(event) {
      mouseXRef.current = event.clientX;
      mouseYRef.current = event.clientY;
      if (cursorRef.current) {
        setCursorVariant("default");
        cursorRef.current.style.transform = `translate3d(${
          event.clientX - 5000 / 2
        }px, ${event.clientY - 5000 / 2}px, 0)`;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorVariant]);

  // disable zoom in/out
  useEffect(() => {
    const handleWheelEvent = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheelEvent, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  return (
    <div id="customCursor">
      <motion.div
        className="fixed-circle duration-1000 ease-out"
        ref={cursorRef}
        variants={variants}
        animate={cursorVariant}
        transition={spring}
      ></motion.div>
    </div>
  );
}

export default CustomCursor;
