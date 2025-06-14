import React from "react";

const AboutMePage = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2022; // The year I started
  const yearsOfExperience = currentYear - startYear;
  return (
    <>
      <section id="about-me" className="lg:py-40 md:py-10">
        <div className="text-white">
          <h3 className="lg:text-4xl py-1 text-3xl font-bold ">About Me </h3>
          <div className="border-t border-gray-300 my-3 opacity-15" />
          <div>
            <p className="sm:text-base text-sm leading-8">
              Hi, I'm Michelle. I'm a <strong>Software Engineer</strong> with
              over {yearsOfExperience} years of experience in Web Development.
              My journey into tech started when I stumbled upon a portfolio that
              completely blew my mind. I remember thinking, "Wait… people can
              make stuff like this?" That one moment turned into hours of
              Googling, tinkering with code, and eventually led me to earn a{" "}
              <strong>Bachelor of Science in Information Technology</strong>{" "}
              from <strong>Don Honorio Ventura State University</strong>.
              <br />
              <br />
              Honestly, I got into this because I couldn't stand badly designed
              websites. Misaligned text, buttons that don't work, weird
              scrolling—it just bugged me. So I figured, "Why not be the one to
              fix it?" That frustration turned into a passion for building
              clean, usable interfaces.
              <br />
              <span className="block mt-4">
                These days, I'm working in the <strong>EdTech industry</strong>,
                helping build tools that make life easier for thousands of
                teachers. I focus mostly on{" "}
                <strong>frontend development</strong>, making sure everything
                looks good, works well, and feels intuitive. When needed, I'll
                jump into the backend to make sure everything plays nicely
                together.
              </span>
              <span className="block mt-4">
                Outside of work, I like to{" "}
                <strong>unwind with games and anime</strong>. It's how I
                recharge—and sometimes, those creative worlds help me think
                differently about solving real-life dev problems.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
