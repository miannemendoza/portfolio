import Image from "next/image";
import React from "react";
import lm from "../../public/lm.png";
const LoadingScreen = () => {
  return (
    <>
      <div className=" bg-black w-screen h-screen flex items-center justify-center">
        <Image src={lm} alt="Loading Screen" />
      </div>
    </>
  );
};

export default LoadingScreen;
