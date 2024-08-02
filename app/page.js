"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import pf2 from "../public/pf2.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import lm from "../public/lm.png";
import wink from "../public/wink.png";
import { TypeAnimation } from "react-type-animation";
import Starfield from "react-starfield";
import { useState } from "react";
export default function Home() {
  const [darkMode, setIsDarkMode] = useState(false);
  return (
    <div className={"dark"}>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className=" px-10 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <Image alt="Portfolio Icon" src={lm} width={55} height={55} />
            <a
              className="h-11 bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] text-white py-2 px-4 rounded-md ml-8 text-lg sm:text-base "
              href="/resume.pdf"
              download="resume"
            >
              Resume
            </a>
          </nav>
          <div className="flex flex-col text-left sm:flex-row justify-between items-center">
            <div className="">
              {/* <h1 className="text-6xl pb-2 text-[#ff6a00] font-bold md:text-6xl">
                Hi, I am
              </h1> */}
              <p className="text-2xl pb-2 text-[#ff6a00] font-bold md:text-6xl">
                {" "}
                Hi, I am
              </p>
              <h1 className="text-4xl md:text-6xl py-2 text-[#e31b6d] font-medium">
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
                className="text-3xl md:text-5xl text-white"
              />
              {/* <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Software Engineer and Full Stack developer
              </h3> */}
              <p className="lg:text-base text-sm py-5 leading-8 text-gray-800 md:text-xl max-w-xl mr-auto dark:text-white">
                {` I’m an enthusiastic software engineer with a strong passion for website development, particularly in front-end development. My dedication to learning and improving means I'm always ready to take on new challenges and expand my skill set to keep up with the latest advancements in the field. Join me down below and let's get something started.`}
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 md:mt-20 mb-20">
              <Image
                src={wink}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full rounded-full z-10"
                alt="Responsive Image"
              />
            </div>
          </div>
        </section>
        {/* HEADER DONE */}
        <section>
          <div className="dark:text-white">
            <h3 className="lg:text-3xl py-1 text-2xl font-bold ">
              Services I offer
            </h3>
            <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
              As a software engineer with over two years of experience, I excel
              at collaborating with talented teams to engineer web solutions
              that address real-world challenges. With a solid foundation in web
              development, database management, and software engineering, I
              offer comprehensive services in both front-end and back-end
              technologies.
              {/* For front-end development, I use React.js, Next.js,
              Tailwind CSS, and React Native. On the back-end, I leverage
              JavaScript and Golang to build robust and scalable solutions. */}
            </p>
            {/* <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including programming,
              designing and technical consult
            </p> */}
          </div>

          <div className="  text-white">
            <div className="text-left shadow-lg rounded-xl my-10">
              <h3 className="text-lg font-medium pt-8 pb-2">Backend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  {" "}
                  Golang
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  {" "}
                  NextJS
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  {" "}
                  Vite
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  {" "}
                  Typescript{" "}
                </p>
              </div>
            </div>
            <div className="text-left shadow-lg rounded-xl my-10">
              <h3 className="text-lg font-medium pt-8 pb-2">Frontend</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  ReactJS
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  NextJS
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  React Native
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  JavaScript
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Typescript
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Tailwind CSS
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Bootstrap
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  HTML
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  CSS
                </p>
              </div>
            </div>
            <div className="text-left shadow-lg rounded-xl my-10">
              <h3 className="text-lg font-medium pt-8 pb-2">Tools</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Github
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  VS Code
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Figma
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Docker
                </p>
                <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-30 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]">
                  Figma
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="lg:text-3xl py-1 text-2xl font-bold ">Portfolio </h3>
            <div>
              <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
                I offer from a wide range of services, including programming,
                designing and technical consult
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt=""
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
