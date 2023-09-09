import React from 'react'
import { Fade } from "react-reveal";

import './CourseCard.css'

export default function CourseCard({courseName, description, dates}) {
  return (
    <Fade bottom duration={2000} distance="100px">
      <div className="course-card">
        <div className="course-card-header">
          <strong>{courseName}</strong>
          <div className="course-date">{dates}</div>
        </div>
        
        <div>{description}</div>
      </div>
    </Fade>
  )
}