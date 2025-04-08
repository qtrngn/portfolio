import React from "react";
import { skills, experiences } from "../constants/index.js";

import CTA from "../components/CTA.jsx"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <h1 className="head-text text-white">
        Hello, I'm{" "}
        <span className="purple-gradient_text font-semibold drop-shadow">
          Quynh
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
        I'm a junior web developer who loves building engaging digital experiences. I enjoy solving challenging problems, picking up new technologies, and turning ideas into effective, user-friendly solutions.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text purple-gradient_text">My Skills</h3>
      
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
        <h3 className="subhead-text purple-gradient_text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-white">
          <p>
          I come from a hospitality background, where I learned to work under pressure, adapt quickly, and collaborate with all kinds of people. Those experiences taught me problem-solving and how to prioritize user experience. Now, I’m excited to bring those skills into web development and can’t wait to gain real-world experience as a front-end developer.
          </p>
        </div>
        <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  dateClassName="text-white"
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                      />
                  </div>}
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                    }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                        </li>
                      ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
