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
import { useState } from "react";
import AboutMePage from "./component/aboutMe";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
export default function PageContent() {
  return (
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
      <div className=" flex-col px-10 fixed top-[66%] hidden sm:flex">
        {/* Icons */}
        <div className="space-y-4 -ml-3">
          <FaLinkedinIn className="text-2xl text-gray-400" />
          <FaGithub className="text-2xl text-gray-400" />
          <SiGmail className="text-2xl text-gray-400" />
        </div>

        {/* Vertical Border */}
        <div className="border-l-2 border-gray-400 h-44 mt-4  items-start"></div>
      </div>

      <div className="fixed right-4 hidden sm:flex flex-col items-center top-[75%]">
        {/* Icons */}
        <div className="flex flex-col items-center space-y-4">
          <a
            className="transform rotate-90   text-gray-400 pr-8"
            href="https://youtu.be/dQw4w9WgXcQ?si=7uvVo87Wzit1JGhW"
          >
            {" "}
            ?????
          </a>
        </div>

        {/* Vertical Border */}
        <div className="border-l-2 border-gray-400 h-44 mt-4"></div>
      </div>
    </div>
  );
}
