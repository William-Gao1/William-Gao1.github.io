import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import CourseCard from "../../components/courseCard/CourseCard.js";
import "./Courses.css";

class Courses extends Component {
  render() {
    return (
      <div className="courses">
        <Grid container spacing={3}>
          {this.props.courses.map((course) => {
              return (
                <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                  <CourseCard {...course}/>
                </Grid>
              )
          })}
        </Grid>
      </div>
    );
  }
}

export default Courses;
