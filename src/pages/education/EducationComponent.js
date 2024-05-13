import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import Courses from "../../containers/courses/Courses";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml";

const Education = ({ theme }) => {
  const { role } = useParams();

  const { courses } = role === "software" ? SoftwarePortfolio : MLPortfolio;
  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education &#38; Relevant Coursework
              </h1>
            </div>
          </div>
        </Fade>
        <h2 className="education-section-header">Education</h2>
        <Educations theme={theme} />

        <h2 className="education-section-header">Relevant Coursework</h2>
        <Courses courses={courses} theme={theme} />
      </div>
      <TopButton theme={theme} />
    </div>
  );
};

export default Education;
