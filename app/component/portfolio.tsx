import React from "react";
import mk from "../../public/mk.png";
import db from "../../public/db.jpg";
import Image from "next/image";
import PillButton from "./shared/pill";
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
        <div className="col-span-full md:col-span-5 flex-1">
          <Image
            alt=""
            src={mk}
            className="rounded-lg "
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="col-span-full md:col-span-5 flex-1">
          <h1 className="sm:text-3xl text-2xl  font-medium">Meme Kaive</h1>
          <div className="border-t-2 border-gray-400  my-4"></div>
          <span className=" text-sm sm:text-base  text-white ">
            Meme Kaive is a web applictaion that allows user to add their own
            entries of meme to be stored and allow others to see. Like a library
            but for memes
          </span>

          <div className="mt-4 flex items-center">
            <PillButton value="NextJS" />
            <PillButton value="TailwindCSS" />
            <PillButton value="MongoDB" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
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
      </div>
    </section>
  );
};

export default PortfolioComponent;
