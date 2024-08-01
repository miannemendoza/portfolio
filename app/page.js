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
      <div className=" px-10 md:px-20 lg:px-40  ">
        <section className="min-h-screen">
          <nav className="p-10 mb-12 flex justify-between">
            <Image alt="Portfolio Icon" src={lm} width={55} height={55} />
            <ul className="flex items-center dark:text-white">
              {/* <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill onClick={() => setIsDarkMode(!darkMode)} />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] text-white px-4 py-2 rounded-md ml-8"
                  href="/resume.pdf"
                  download="resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-left flex items-center">
            <div className="p-10">
              <h1 className="text-6xl pb-2 text-[#ff6a00] font-bold md:text-6xl">
                Hi, I am
              </h1>

              <h1 className="text-4xl py-2 text-[#e31b6d] font-medium md:text-6xl">
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
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  color: "white",
                }}
              />
              {/* <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Software Engineer and Full Stack developer
              </h3> */}
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mr-auto dark:text-white">
                {` I'm a software engineer who loves to create amazing apps that
              helps people. Join me down below and let's get something started.`}
              </p>
            </div>
            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
              <a
                href="https://www.linkedin.com/in/michelle-anne-m-03b95a232"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiFillLinkedin />
              </a>
              <SiGmail />
              <FaDiscord />
            </div> */}
            <div className="relative bg-gradient-to-r from-[#e31b6d] to-[#ff6a00] overflow-hidden rounded-full w-80 h-80 mt-20 ml-auto md:h-96 md:w-96">
              <Image
                alt="Bitmoji image of the portfolio owner"
                src={wink}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        {/* HEADER DONE */}
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              I offer from a wide range of services, including programming,
              designing and technical consult
            </p>
          </div>
          <div className="lg:flex gap-10 dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                alt=""
                src={design}
                width={100}
                height={100}
                className="inline"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="text-teal-600 py-4">Design tools I used: </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                alt=""
                src={code}
                width={100}
                height={100}
                className="inline"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Code</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="text-teal-600 py-4">Design tools I used: </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                alt=""
                src={consulting}
                width={100}
                height={100}
                className="inline"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Analytical Consult
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs
              </p>
              <h4 className="text-teal-600 py-4">Design tools I used: </h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 ">Portfolio </h3>
            <div>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
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
