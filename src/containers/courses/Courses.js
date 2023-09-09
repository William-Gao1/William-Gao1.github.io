import React, { Component } from "react";
import CourseCard from "../../components/courseCard/CourseCard.js";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div className="courses">
        {this.props.courses.map(({courseName, description, dates}) => {
          return <CourseCard courseName={courseName} description={description} dates={dates}/>
        })}
      </div>
    );
  }
}

export default Courses;
