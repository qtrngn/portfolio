import React from "react";
import { skills } from "../constants/index.js";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Quynh
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          a junior web developer passionate about building intuitive and
          engaging digital experiences. I thrive on solving complex problems,
          learning new technologies, and creating solutions.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-x1" />
              <div className="btn-front rounded-x1 flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I have experience working in the hospitality industry, where I had the opportunity to collaborate with smart and hard-working individuals. This experience taught me the importance of teamwork, adaptability, and delivering excellent service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
