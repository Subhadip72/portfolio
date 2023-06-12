import React from "react";
import { work1, work2, work3, work4, work5, work6 } from "../assets";

const Work = () => {
  return (
    <section
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <article className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6 text-xl">// Check out some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white text-center tracking-wider">
                React YT-Media
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://subhadip-yt-media.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/YT-Media"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white text-center tracking-wider">
                Comfy-Store
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://subhadip-comfy-store.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/Comfy-store-react"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Movie
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://movie-frontend-new-git-main-subhadip72.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/mern-movie-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Stock-Photos
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://stock-photos-bapin.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/stock-photos"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Quiz App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gleaming-dango-ff9b94.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/react-quiz-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work6})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Jobster
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://subhadip-job-manager.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Subhadip72/job-manager"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-xl">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Work;
