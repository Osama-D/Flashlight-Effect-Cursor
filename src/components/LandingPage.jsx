"use client"; // This is a client component 👈🏽

import CustomCursor from "./CustomCursor";
import Image from "next/image";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* our custom cursor  */}
      <CustomCursor />

      {/* motion for a nice transition each time we enter the website  */}
      <motion.div
        initial={{ opacity: 0 }} // Set the initial opacity to 0
        animate={{ opacity: 1 }} // Animate to opacity 1
        transition={{
          duration: 5, // Set the duration for the transition
          ease: "easeInOut",
        }}
      >
        <div className="w-[100vh] h-[100vh] z-50">
          {/* our title & paragraph */}
          <div className="w-full h-full">
            <div className="px-[19px] sm:px-[50px] md:px-[100px] h-full w-full md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px] m-auto z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] flex flex-col justify-center items-center text-center gap-[17px]">
              <h1 className="font-Fabulous titleSize capitalize text-white leading-[110%]">
                flashlight effect
              </h1>
              <p className="font-montserrat paragraphSize text-white/80">
                A cursor with a horror-themed spotlight effect is used to build
                suspense by revealing select content while shrouding the rest in
                darkness, creating an eerie and mysterious ambiance.
              </p>
            </div>
          </div>

          {/* our image */}
          <Image
            className="absolute object-cover w-full h-full"
            src="https://wallpapercrafter.com/desktop/221065-black-and-white-long-shot-of-classic-ancient-build.jpg"
            alt="random image"
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
