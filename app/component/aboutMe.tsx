import React from "react";

const AboutMePage = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022; // The year you started
  const yearsOfExperience = currentYear - startYear;
  return (
    <>
      <section id="about-me" className="lg:py-40 md:py-10">
        <div className="text-white">
          <h3 className="lg:text-4xl py-1 text-3xl font-bold ">About Me </h3>
          <div className="border-t border-gray-300 my-3 opacity-15" />
          <div>
            <p className="sm:text-base text-sm leading-8">
              Hello there! My name is Michelle, and I’m passionate about
              building and developing websites. My interest in web development
              began when I discovered an impressive web portfolio. Inspired by
              its potential, I realized that I could do the same, and that’s
              when my journey in web development took off. I earned my Bachelor
              of Science in Information Technology from Don Honorio Ventura
              State University. When I’m not coding or working on projects, I
              enjoy playing games or watching anime.
              <br />
              <span className="block mt-4">
                I currently have over {yearsOfExperience} years of experience in
                Software Engineering and Web Development. I am working on a
                dating application, where I am responsible for building,
                implementing, and maintaining features that enhance the user
                experience and ensure smooth functionality. Engineering and Web
                Development. I am working on a dating application, where I am
                responsible for building, implementing, and maintaining features
                that enhance the user experience and ensure smooth
                functionality.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
