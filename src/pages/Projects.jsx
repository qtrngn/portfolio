import React from "react";
import { projects } from "../constants/index.js";
import CTA from "../components/CTA";

import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <h1 className="head-text text-white">
        My{" "}
        <span className="purple-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
        My portfolio features projects where I’ve turned ideas into visually appealing and well-crafted experiences. It’s all about creating designs that feel seamless and coding that keeps everything running smoothly.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme} `} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font poppins font-semibold text-white">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-400">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
