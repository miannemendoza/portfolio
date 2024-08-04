import React from "react";

const AboutMePage = () => {
  return (
    <>
      <section id="about-me" className="py-40">
        <div className="text-white">
          <h3 className="lg:text-4xl py-1 text-2xl font-bold ">About Me </h3>
          <div className="border-t border-gray-300 my-4 opacity-15" />
          <div>
            <p>
              Hello there! My name is Michelle, and I enjoy creating websites
              that make daily life easier. My interest in web development began
              when I came across an impressive web portfolio. Seeing its
              potential, I realized that I could do the same, and from there, my
              journey in web development took off.
              <br />
              <span className="block mt-4">
                Currently, I am working on a dating application, where I am
                responsible for building and maintaining features that enhance
                user experience and ensure smooth functionality.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
