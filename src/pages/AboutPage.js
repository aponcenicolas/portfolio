import React from "react";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />

      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Python"} progress={"90%"} width={"90%"} />
      </div>

      <Title title={"Services"} span={"Services"} />

      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Web design"}
          text={"Descripcion"}
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Descripcion"}
        />
        <ServicesSection
          image={gamedev}
          title={"Game developed"}
          text={"Descripcion"}
        />
      </div>
    </div>
  );
};

export default AboutPage;
