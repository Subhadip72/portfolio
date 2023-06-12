import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className=" w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Subhadip Chakraborty
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full stack developer specializing in building and occasionally
          designing exceptional digital experiences. Currently I'm focused on
          building full stack web applications that seamlessly adapt to all
          devices.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex gap-2 items-center hover:bg-pink-600 duration-300 hover:border-pink-600">
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="flex items-center gap-2"
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
