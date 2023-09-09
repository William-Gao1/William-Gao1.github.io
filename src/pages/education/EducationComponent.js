import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import Courses from "../../containers/courses/Courses";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import { courses } from "../../portfolio";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
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
          <Educations theme={this.props.theme} />

          <h2 className="education-section-header">Relevant Coursework</h2>
          <Courses courses={courses} theme={this.props.theme} />
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
