import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, I'm Subhadip, nice to meet you. Please look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating
              applications for clients ranging from individuals and small
              businesses all the way to large enterprise corporations. What
              would you do if you had a software expert available at your
              fingertips?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
