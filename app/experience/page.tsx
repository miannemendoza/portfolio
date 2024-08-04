import React from "react";

export default function ExperiencePage() {
  return (
    <>
      <div className="dark:text-white  mb-10">
        <h3 className="lg:text-4xl py-1 text-2xl font-bold ">Experience</h3>
        <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white mb-3">
          Explore the companies and projects that have shaped my career:
          {/* For front-end development, I use React.js, Next.js,
        Tailwind CSS, and React Native. On the back-end, I leverage
        JavaScript and Golang to build robust and scalable solutions. */}
        </p>

        <div className="flex ">
          <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-50 bg-[#ffffff0a] hover:bg-[#ffffff11] backdrop-blur-md text-[#ff6a00]">
            {` For front-end development, I use React.js, Next.js,
        Tailwind CSS, and React Native. On the back-end, I leverage
        JavaScript and Golang to build robust and scalable solutions. For front-end development, I use React.js, Next.js,
        Tailwind CSS, and React Native. On the back-end, I leverage
        JavaScript and Golang to build robust and scalable solutions.`}
          </p>
          <p className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-50 bg-[#ffffff0a] hover:bg-[#ffffff11] backdrop-blur-md text-[#ff6a00]">
            {` For front-end development, I use React.js, Next.js,
        Tailwind CSS, and React Native. On the back-end, I leverage
        JavaScript and Golang to build robust and scalable solutions. For front-end development, I use React.js, Next.js,
        Tailwind CSS, and React Native. On the back-end, I leverage
        JavaScript and Golang to build robust and scalable solutions.`}
          </p>
        </div>
      </div>
    </>
  );
}
