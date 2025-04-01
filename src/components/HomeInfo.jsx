import React from "react";
import { Link } from "react-router-dom";

import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-x1 text-center">{text}</p>
    <Link to={link}>{btnText}
    <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Quynh</span> 😀
      <br />A Web Developer
    </h1>
  ),

  2: (
    <InfoBox 
        text="Welcome to my portfolio! I am a web developer with a passion for creating beautiful and functional websites. "
        link="/about"
        btnText="Learn more"
    />
  ),

  3: (
    <InfoBox 
        text="Curious about my work? "
        link="/projects"
        btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox 
        text="Need a project done or looking for a dev? "
        link="/contact"
        btnText="Let's connect"
    />
  )
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
