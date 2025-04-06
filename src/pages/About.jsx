import React from "react";
import { skills, experiences } from "../constants/index.js";

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
          I come from a hospitality background where I learned how to work well under pressure, adapt quickly, and collaborate with all kinds of people. It taught me problem-solving,and always prioritize the customer’s experience. Now, I’m applying those same skills to build websites.
          </p>
        </div>
        <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement>
                  <div>
                    <h3>
                      {experience.title}
                    </h3>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
