"use client";
import Starfield from "react-starfield";
import IntroComponent from "./component/intro";
import TechnologiesComponent from "./component/technologies";
const contentArray = ["About Me", "Portfolio", "Experience", "Connect"];
import ExperienceComponent from "./component/experience";
import PortfolioComponent from "./component/portfolio";
import Link from "next/link";
import Image from "next/image";
import lm from "../public/lm.png";
import Navbar from "./component/navbar";
import { Suspense, useEffect, useState } from "react";
import AboutMePage from "./component/aboutMe";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import LoadingScreen from "./component/loading";
export default function PageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 400);
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <div
          className={`${
            fadeOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in absolute inset-0 bg-black flex items-center justify-center z-10`}
        >
          <LoadingScreen />
        </div>
      ) : (
        <div
          className={`transition-opacity duration-500 ease-in ${
            fadeOut ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={"dark"}>
            <Starfield
              starCount={1000}
              starColor={[255, 255, 255]}
              speedFactor={0.05}
              backgroundColor="black"
            />

            <div className=" px-10 sm:px-28 lg:px-40 ">
              <Navbar />
              <IntroComponent />
              <AboutMePage />
              <TechnologiesComponent />
              <ExperienceComponent />
              <PortfolioComponent />
            </div>
            {/* socials */}
            <div className=" flex-col px-10 fixed top-[66%] hidden sm:flex">
              <div className="space-y-4 -ml-3">
                <FaLinkedinIn className="text-2xl text-gray-400" />
                <FaGithub className="text-2xl text-gray-400" />
                <SiGmail className="text-2xl text-gray-400" />
              </div>

              <div className="border-l-2 border-gray-400 h-44 mt-4  items-start"></div>
            </div>

            <div className="fixed right-4 hidden sm:flex flex-col items-center top-[75%]">
              <div className="flex flex-col items-center space-y-4">
                <a
                  className="transform rotate-90   text-gray-400 pr-8"
                  href="https://youtu.be/dQw4w9WgXcQ?si=7uvVo87Wzit1JGhW"
                >
                  {" "}
                  ?????
                </a>
              </div>

              <div className="border-l-2 border-gray-400 h-40 mt-4"></div>
            </div>

            <footer className="rounded-lg shadow m-4  sm:hidden ">
              <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <ul className="flex justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Github
                    </a>
                  </li>
                </ul>
                <span className="text-sm text-gray-500  dark:text-gray-400">
                  © 2024{" "}
                  <a href="https://flowbite.com/" className="hover:underline">
                    Michelle Anne F. Mendoza™
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
