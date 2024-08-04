import React from "react";
const frontEndArray = [
  "ReactJS",
  "NextJS",
  "React Native",
  "JavaScript",
  "Typescript",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
];

const backendArray = ["Golang", "Javascript", "NextJS"];
const toolsArray = ["VS Code", "Docker", "Github", "Figma"];
const TechnologiesComponent = () => {
  return (
    <>
      <section>
        <div className=" py-28 text-white">
          <h3 className="lg:text-4xl py-1 text-2xl font-bold ">
            Technologies that I use:{" "}
          </h3>
          <div className="text-left shadow-lg rounded-xl ">
            <h3 className="text-lg font-medium pt-8">Backend </h3>{" "}
            <div className="border-t border-gray-300 my-3 opacity-15" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
              {backendArray.map((x, index) => (
                <p
                  key={index}
                  className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-50 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]"
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
          <div className="text-left shadow-lg rounded-xl ">
            <h3 className="text-lg font-medium pt-8">Frontend</h3>
            <div className="border-t border-gray-300 my-3 opacity-15" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
              {frontEndArray.map((x, index) => (
                <p
                  key="index"
                  className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-50 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]"
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
          <div className="text-left shadow-lg rounded-xl mb-10">
            <h3 className="text-lg font-medium pt-8">Tools</h3>
            <div className="border-t border-gray-300 my-3 opacity-15" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
              {toolsArray.map((x, index) => (
                <p
                  key={index}
                  className="flex w-auto items-center rounded-md p-3 bg-black bg-opacity-50 dark:bg-[#ffffff0a] dark:backdrop-blur-md text-[#ff6a00]"
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesComponent;
