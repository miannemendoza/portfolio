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
              Hello! I'm Michelle, a <strong>Software Engineer</strong> with
              over {yearsOfExperience} years of experience in Web Development.
              My journey into tech started when I discovered a well-crafted
              portfolio that inspired me to explore the world of web
              development. That curiosity soon turned into a passion, leading me
              to pursue a{" "}
              <strong>Bachelor of Science in Information Technology</strong> at{" "}
              <strong>Don Honorio Ventura State University</strong>.
              <br />
              <span className="block mt-4">
                I am currently working on a <strong>dating application</strong>,
                where I focus on{" "}
                <strong>
                  building, implementing, and maintaining features
                </strong>{" "}
                that enhance the user experience and ensure smooth
                functionality. I enjoy solving complex problems, optimizing
                performance, and delivering high-quality software solutions.
              </span>
              <span className="block mt-4">
                Outside of work, I like to{" "}
                <strong>unwind by playing games and watching anime</strong>.
                These hobbies not only help me relax but also spark creativity
                and new perspectives in my approach to development.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
