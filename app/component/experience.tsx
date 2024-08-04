import React, { useState } from "react";

const ExperienceComponent = () => {
  const [selected, setSelected] = useState<string>("hs");
  console.log(selected);
  return (
    <>
      <div className="dark:text-white  py-28 snap-center" id="experience">
        {/* <h1 className="lg:text-4xl py-1 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#e31b6d] to-[#ff6a00]">
          Experience
        </h1> */}
        <h3 className="lg:text-4xl py-1 text-2xl font-bold">Experience</h3>
        <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white mb-3">
          Explore the companies and projects that have shaped my career:
        </p>
        <div className="border-t border-gray-300 my-4 opacity-15" />
        <div className="grid grid-cols-10 gap-4 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
          <div className="relative grid grid-cols-3 gap-4 col-span-full sm:col-span-2 sm:flex sm:flex-col text-center  sm:items-end items-center sm:text-right">
            <p
              className={`${selected === "hs" && "font-bold"} cursor-pointer`}
              onClick={() => setSelected("hs")}
            >
              Hooli Software
            </p>
            <p
              className={`${selected === "cb" && "font-bold"} cursor-pointer`}
              onClick={() => setSelected("cb")}
            >
              Carbonetes
            </p>
            <p
              className={`${selected === "sos" && "font-bold"} cursor-pointer`}
              onClick={() => setSelected("sos")}
            >
              SOS
            </p>
          </div>
          <div className="col-span-full h-64 sm:col-span-8 p-4 border-l bg-opacity-50 dark:bg-[#ffffff0a] text-white">
            {selected === "cb" ? (
              <>
                <h1 className="text-2xl font-medium text-[#ff6a00]">
                  Fullstack Software Engineer
                </h1>
                <p className="text-[#ff6a00c8] mb-4">
                  June 2022 - January 2023
                </p>
                <ul>
                  <li>
                    Spearheaded the backend development of IAC and OCI Registry
                    module of Carbonetes Lite
                  </li>
                  <li>
                    Ensured the application's integrity after development by
                    implementing improvements, refining its performance, and
                    integrating new features.
                  </li>
                  <li>
                    Collaborated with teams to address issues, introduce new
                    functionalities, and enhance the overall performance of the
                    app
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-medium text-[#ff6a00]">
                  Fullstack Software Engineer
                </h1>
                <p className="text-[#ff6a00c8] mb-4">June 2022 - Present</p>
                <p>
                  {` For front-end development, I use React.js, Next.js,
              Tailwind CSS, and React Native. On the back-end, I leverage
              JavaScript and Golang to build robust and scalable solutions. For front-end development, I use React.js, Next.js,
              Tailwind CSS, and React Native. On the back-end, I leverage
              JavaScript and Golang to build robust and scalable solutions.`}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceComponent;
