"use client";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import Image, { StaticImageData } from "next/image";
import wink from "../../public/wink.png";
import hoh from "../../public/hoh.png";
import hoh2 from "../../public/hoh2.png";
import kiss from "../../public/kiss.png";
const image: StaticImageData[] = [hoh, hoh2, kiss];
const randomImage = (): StaticImageData => {
  const number = Math.floor(Math.random() * image.length);
  return image[number];
};
const IntroComponent = () => {
  const [isHovering, setIsHovered] = useState(false);

  return (
    <section id="intro">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 gap-4 w-auto text-left items-center mb-5">
        {/* Content Area */}

        <div className="col-span-1 lg:col-span-5">
          <p className="text-2xl pb-2 text-[#ff6a00] font-bold sm:text-6xl">
            Hi, I am
          </p>
          <h1 className="text-4xl sm:text-6xl py-2 text-[#e31b6d] font-medium">
            Michelle Anne F. Mendoza
          </h1>
          <TypeAnimation
            sequence={[
              "Software Engineer   ",
              2000,
              "Front-End Developer   ",
              2000,
              "Web Developer   ",
              2000,
            ]}
            omitDeletionAnimation={true}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={10}
            className="text-3xl sm:text-5xl text-white"
          />

          <p className="lg:text-base text-sm py-5 leading-8 text-gray-800 sm:text-xl max-w-xl mr-auto dark:text-white">
            {` I’m an enthusiastic software engineer with a strong passion for website development, particularly in front-end development. My dedication to learning and improving means I'm always ready to take on new challenges and expand my skill set to keep up with the latest advancements in the field. Join me down below and let's get something started.`}
          </p>
        </div>
        {/* Image Area */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-20"
          >
            <Image
              src={isHovering ? randomImage() : wink}
              width={500}
              height={300}
              priority
              className="absolute top-0 left-0  rounded-full z-10"
              alt="Responsive Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;
