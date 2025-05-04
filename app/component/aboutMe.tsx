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
              My journey into tech began when I came across a portfolio that inspired me to explore the world of web development.
              That initial curiosity grew into a deep passion,  which led me to pursue a{" "}
              <strong>Bachelor of Science in Information Technology</strong> from {" "}
              <strong>Don Honorio Ventura State University</strong>.
              <br />
              <br />
              Honestly, I started because I couldn't stand seeing poorly designed websites—misaligned text, overflowing content, 
              and clunky layouts just didn’t sit right with me. 
              I figured, "Why not be the one to fix that?" And that's what drove me to dive into web development.
              <br />
              <span className="block mt-4">
                I'm currently working in the <strong>EdTech industry</strong>, where I help build tools that support thousands of teachers by easing their day-to-day workload. While I primarily focus on <strong>frontend development</strong>—crafting user-facing features that are intuitive, responsive, and performant—I occasionally dip into the backend to bring everything together. I enjoy solving real-world problems and building experiences that just work.
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
