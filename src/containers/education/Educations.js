import React from "react";
import { useParams } from "react-router-dom";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software.js";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml.js";

const Educations = ({ theme }) => {
  const { role } = useParams();

  const { degrees } = role === "software" ? SoftwarePortfolio : MLPortfolio;
  return (
    <div className="main" id="educations">
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Educations;
