import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link, Redirect, useParams } from "react-router-dom";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software.js";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml.js";
import SeoHeader from "../seoHeader/SeoHeader";

import softwareResume from "../../assets/resume_software.pdf";
import mlResume from "../../assets/resume_ml.pdf";
import transcript from "../../assets/transcript.pdf";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = ({ theme }) => {
  const { role } = useParams();

  if (!role) {
    return <Redirect to="/ml" />;
  }
  const { settings, greeting } =
    role === "software" ? SoftwarePortfolio : MLPortfolio;
  const link = settings.isSplash ? "/splash" : "home";
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            <li>
              <NavLink
                to={`/${role}/home`}
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${role}/education`}
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${role}/experience`}
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${role}/projects`}
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a
                href={transcript}
                target="_blank"
                rel="noopener noreferrer"
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Transcript
              </a>
            </li>
            <li>
              <a
                href={role === "software" ? softwareResume : mlResume}
                target="_blank"
                rel="noopener noreferrer"
                tag={Link}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Resume
              </a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};
export default Header;
