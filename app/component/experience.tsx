import React, { useState } from "react";

const ExperienceComponent = () => {
  const [selected, setSelected] = useState<string>("hs");

  return (
    <>
      <div
        className="dark:text-white  py-28 snap-center leading-8"
        id="experience"
      >
        <h3 className="lg:text-4xl py-1 text-3xl font-bold ">Experience</h3>
        <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white mb-3">
          Explore the companies and projects that have shaped my career:
        </p>
        <div className="border-t border-gray-300 my-4 opacity-15" />
        <div className="grid grid-cols-10 gap-1 w-auto items-center  rounded-md p-3  text-[#ff6a00]">
          <div className="relative grid grid-cols-3 gap-4 col-span-full sm:col-span-2 sm:flex sm:flex-col text-center  sm:items-end items-center sm:text-right ">
            <p
              className={`${
                selected === "hs" && "font-bold"
              } text-sm sm:text-lg cursor-pointer`}
              onClick={() => setSelected("hs")}
            >
              Hooli Software
            </p>
            <p
              className={`${
                selected === "cb" && "font-bold"
              } text-sm sm:text-lg cursor-pointer`}
              onClick={() => setSelected("cb")}
            >
              Carbonetes
            </p>
            <p
              className={`${
                selected === "sos" && "font-bold"
              } text-sm sm:text-lg cursor-pointer`}
              onClick={() => setSelected("sos")}
            >
              S.O.Search
            </p>
          </div>
          <div className="col-span-full h-96 sm:h-72 sm:col-span-8 p-4 border-l bg-opacity-50 dark:bg-[#ffffff0a] text-white overflow-scroll no-scrollbar">
            {selected === "cb" ? (
              <>
                <h1 className="text-xl sm:text-2xl font-medium text-[#ff6a00]">
                  Fullstack Software Engineer
                </h1>
                <p className="text-[#ff6a00c8] mb-4 sm:text-base text-sm mt-2">
                  June 2022 - Feburuary 2024
                </p>
                <ul className="pl-5 text-sm sm:text-base leading-8">
                  <li className="list-disc">
                    Spearheaded the backend development of the IAC and OCI
                    Registry of Carbonetes Lite, including the development of
                    the Manage License module.
                  </li>
                  <li className="list-disc">
                    {` Ensured the application's integrity after development by
                    implementing improvements, refining its performance, and
                    integrating new features.`}
                  </li>
                  <li className="list-disc">
                    Collaborated with teams to address issues, introduce new
                    functionalities, and enhance the overall performance of the
                    app
                  </li>
                </ul>

                <h1 className="text-2xl font-medium mt-2 text-[#ff6a00]">
                  Software Engineer Intern
                </h1>
                <p className="text-[#ff6a00c8] mb-4 sm:text-base text-sm mt-2">
                  March 2022 - June 2022
                </p>
                <ul className="pl-5 text-sm sm:text-base leading-8">
                  <li className="list-disc">
                    Assisted the team with bug fixes and improvements to enhance
                    application performance.
                  </li>
                  <li className="list-disc">
                    Developed a Postman collection to document APIs used by the
                    app effectively.
                  </li>
                  <li className="list-disc">
                    Created PowerPoint presentations summarizing software
                    engineering updates and overall progress for team briefings.
                  </li>
                </ul>
              </>
            ) : selected === "sos" ? (
              <>
                <h1 className="text-xl sm:text-2xl font-medium text-[#ff6a00]">
                  Fullstack Software Engineer
                </h1>
                <p className="text-[#ff6a00c8] mb-4 sm:text-base text-sm mt-2">
                  Feburuary 2024 - Present
                </p>
                <ul className="pl-5 text-sm sm:text-base leading-8">
                  <li className="list-disc">
                    Contributed to the migration of the application from React
                    Native to Expo, leveraging new technologies to improve
                    performance.
                  </li>
                  <li className="list-disc">
                    Occasionally handled the iOS and Android deployment of the
                    application.
                  </li>
                  <li className="list-disc">
                    Implemented bug fixes and enhancements to ensure a
                    user-friendly application with no critical issues.
                  </li>
                  <li className="list-disc">
                    Mentored and guided interns to help them learn and
                    effectively contribute to the team.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <h1 className="text-xl sm:text-2xl font-medium text-[#ff6a00]">
                  Fullstack Software Engineer
                </h1>
                <p className="text-[#ff6a00c8] mb-4">June 2022 - Present</p>
                <p className="text-sm sm:text-base">
                  {`Currently working as a Full-Stack Software Engineer,
                   contributing to two key projects: Carbonetes and Significant Other Search.`}
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
