import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import Grid from "@material-ui/core/Grid";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml";
import SoftwareProjectsData from "../../shared/projects/projects_software.json";
import MLProjectsData from "../../shared/projects/projects_ml.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({ theme }) => {
  const { role } = useParams();

  const { projectsHeader, publicationsHeader, publications } =
    role === "software" ? SoftwarePortfolio : MLPortfolio;

  const projectsData =
    role === "software" ? SoftwareProjectsData : MLProjectsData;
  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        <Grid container spacing={3}>
          {projectsData.data.map((repo) => {
            return (
              <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
                <GithubRepoCard repo={repo} theme={theme} />
              </Grid>
            );
          })}
        </Grid>
      </div>

      {/* Publications  */}
      {publications.data.length > 0 ? (
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      ) : null}

      <div className="repo-cards-div-main">
        {publications.data.map((pub) => {
          return <PublicationCard pub={pub} theme={theme} />;
        })}
      </div>

      <TopButton theme={theme} />
    </div>
  );
};

export default Projects;
