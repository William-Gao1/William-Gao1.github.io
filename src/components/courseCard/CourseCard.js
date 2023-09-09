import React from 'react'
import { Fade } from "react-reveal";

import './CourseCard.css'

export default function CourseCard({courseName, description, dates, url}) {
  function openUWFlowinNewTab(url) {
    console.log(url)
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="100px">
      <div className="course-card" onClick={() => openUWFlowinNewTab(url)}>
        <div className="course-card-header">
          <strong>{courseName}</strong>
          <div className="course-date">{dates}</div>
        </div>
        
        <div>{description}</div>
      </div>
    </Fade>
  )
}