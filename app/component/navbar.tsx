import lm from "../../public/lm.png";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [selected, setSelected] = useState<string>("");
  const scrollToCenter = (id: string) => {
    const element = document.getElementById(id);
    id === "intro" && setSelected("");
    if (element) {
      if (id === "work") {
        console.log("id", id);
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };
  return (
    <nav
      id="top"
      className="py-5 mb-12 flex justify-between sm:sticky  top-0 z-50 sm:bg-black sm:bg-opacity-45"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white text-xl font-bold"
          onClick={() => scrollToCenter("intro")}
        >
          <Image alt="Portfolio Icon" src={lm} width={55} height={55} />
        </div>
        <div className=" hidden sm:flex">
          <ul className="flex space-x-4 cursor-pointer">
            <li
              className={` ${
                selected === "about"
                  ? "border-b-2 border-[#ff6a00]"
                  : "font-thin"
              } text-white hover:text-gray-400 pb-2 `}
              onClick={() => {
                setSelected("about");
                scrollToCenter("about-me");
              }}
            >
              About Me
            </li>
            <li
              onClick={() => {
                setSelected("exp");
                scrollToCenter("experience");
              }}
              className={` ${
                selected === "exp" ? "border-b-2 border-[#ff6a00]" : "font-thin"
              } text-white hover:text-gray-400 pb-2 `}
            >
              Experience
            </li>
            <li
              className={` ${
                selected === "work"
                  ? "border-b-2 border-[#ff6a00]"
                  : "font-thin"
              } text-white hover:text-gray-400 pb-2 `}
              onClick={() => {
                setSelected("work");
                scrollToCenter("work");
              }}
            >
              Work
            </li>
            <li
              className={` ${
                selected === "contact"
                  ? "border-b-2 border-[#ff6a00]"
                  : "font-thin"
              } text-white hover:text-gray-400 pb-2 `}
              onClick={() => {
                setSelected("contact");
                scrollToCenter("contact");
              }}
            >
              Connect
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
