import React from "react";
import mk from "../../public/MemeKaive.png";
import wtb from "../../public/wattthebill.png";
import hl from "../../public/HL.png";
import Image from "next/image";
import PillButton from "./shared/pill";
import { FaExternalLinkAlt } from "react-icons/fa";
const PortfolioComponent = () => {
  return (
    <section id="work" className="py-28 leading-8">
      <div className="dark:text-white">
        <h3 className="lg:text-4xl py-1 text-3xl font-bold ">Portfolio </h3>
        <div>
          <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
            {` Check out some things that I've built: `}
          </p>
          <div className="border-t border-gray-300 my-4 opacity-15" />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
        <div className="col-span-full lg:col-span-5 flex-1">
          <Image
            src={mk}
            alt="MemeKaive project"
            priority
            className="rounded-lg "
            width={800}
            height={800}
          />
        </div>
        <div className="col-span-full lg:col-span-5 flex-1">
          <div className="flex flex-row items-center">
            <h1 className="sm:text-3xl text-2xl  font-medium">
              Meme Kaive &nbsp;{" "}
            </h1>
            <a href="https://memekaive.vercel.app/" target="_blank">
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
          <div className="border-t-2 border-gray-400  my-4"></div>
          <span className=" text-sm sm:text-base  text-white ">
            Meme Kaive is a web app where you can add, edit, and delete your own
            memes, making them available for others to see. Think of it like a
            meme library. Plus, you can easily sign in with Google.
            <br />
          </span>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <PillButton value="NextJS" />
            <PillButton value="TailwindCSS" />
            <PillButton value="MongoDB" />
            <PillButton value="DaisyUI" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
        <div className="col-span-full lg:col-span-5 flex-1">
          <div className="flex flex-row items-center">
            <h1 className="sm:text-3xl text-2xl  font-medium">
              Watt the Bill &nbsp;{" "}
            </h1>
            <a href="https://wattthebill.vercel.app/" target="_blank">
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
          <div className="border-t-2 border-gray-400  my-4"></div>
          <span className=" text-sm sm:text-base  text-white ">
            WattTheBill is an electricity consumption calculator for the
            Philippines. Users can input appliance wattage (kWh) or horsepower
            (HP) and daily usage hours to estimate monthly electricity
            consumption and cost based on local kWh rates. Future updates will
            include comparisons between inverter and non-inverter appliances,
            offering deeper insights into energy efficiency and cost-saving
            opportunities.
            <br />
          </span>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <PillButton value="NextJS" />
            <PillButton value="TailwindCSS" />
            <PillButton value="MongoDB" />
            <PillButton value="HeroUI" />
          </div>
        </div>
        <div className="col-span-full lg:col-span-5 flex-1">
          <Image
            src={wtb}
            alt="Watt the Bill project"
            priority
            className="rounded-lg "
            width={800}
            height={800}
          />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
        <div className="col-span-full lg:col-span-5 flex-1">
          <Image
            src={hl}
            alt="MemeKaive project"
            priority
            className="rounded-lg "
            width={800}
            height={800}
          />
        </div>
        <div className="col-span-full lg:col-span-5 flex-1">
          <div className="flex flex-row items-center">
            <h1 className="sm:text-3xl text-2xl  font-medium">
              Hustle Log &nbsp;{" "}
            </h1>
            <a href="https://hustle-log.vercel.app/login" target="_blank">
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
          <div className="border-t-2 border-gray-400  my-4"></div>
          <span className=" text-sm sm:text-base  text-white ">
            Hustle Log — An intelligent job application tracker that uses AI to
            analyze job postings, extracting key details so you don’t have to
            fill them in manually. It streamlines your job search, helping you
            stay organized and focused on landing your next role.
            <br />
          </span>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <PillButton value="NextJS" />
            <PillButton value="Typescript" />
            <PillButton value="TailwindCSS" />
            <PillButton value="MongoDB" />
            <PillButton value="NestJS" />
            <PillButton value="OpenAI" />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
        <div className="col-span-full md:col-span-5 flex-1">
          <Image
            alt=""
            src={db}
            className="rounded-lg "
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="col-span-full md:col-span-5 flex-1 ">
          <h1 className="sm:text-3xl text-2xl  font-medium">Flop Bot</h1>
          <div className="border-t-2 border-gray-400  my-4" />
          <span className=" text-sm sm:text-base  text-white ">
            Flop bot is a discord bot written in golang. You can add it to your
            own discord channel and make use of the commands that it has!
          </span>

          <div className="mt-4 flex items-center">
            <PillButton value="Golang" />
            <PillButton value="Discord API" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default PortfolioComponent;
