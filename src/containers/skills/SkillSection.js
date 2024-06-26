import React from "react";
import { useParams } from "react-router-dom";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

const SkillSection = ({ theme }) => {
  const { role } = useParams();

  const { skills } = role === "software" ? SoftwarePortfolio : MLPortfolio;

  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div className="skills-main-div" key={skill.title}>
            <Fade left duration={2000}>
              <div className="skills-image-div">
                {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        key={skillSentence}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
