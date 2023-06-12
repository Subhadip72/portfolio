import React from "react";
import HTML from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import github from "../assets/github.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 flex items-center"
    >
      <article className="max-w-[1000px] px-4 mx-auto flex flex-col w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies that I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={HTML} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={css} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={js} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={react} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={node} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">Node js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={tailwind} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={mongo} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
            <img src={github} alt="html-icon" className="w-20 mx-auto" />
            <p className="my-4 text-xl font-bold">GitHub</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
