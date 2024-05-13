import React from "react";
import { useParams } from "react-router-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Greeting(props) {
  const theme = props.theme;
  const { role } = useParams();

  const { greeting } = role === "software" ? SoftwarePortfolio : MLPortfolio;

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )}
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle} View some of my work{" "}
              <Link className="project-link-p" to={`/${role}/projects`}>
                here
              </Link>
              .
            </p>
            <SocialMedia theme={theme} />
            {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
