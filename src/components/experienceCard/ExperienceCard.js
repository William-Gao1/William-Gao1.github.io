import React, { Component } from "react";
import MarkdownRenderer from "react-markdown-renderer";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const theme = this.props.theme;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 0 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
              marginTop: 20,
            }}
          />
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{
                background: `${theme.body}`,
                padding: "2em",
                marginTop: "2em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginBottom: 5,
                }}
              >
                <div className="experience-description" />
                <span style={{ lineHeight: "1.7" }}>
                  <MarkdownRenderer
                    markdown={experience["description"]}
                    options={{ breaks: true }}
                  />
                </span>
              </div>
              {experience["points"] ? (
                <ul style={{ marginTop: 0 }}>
                  {experience["points"].map((text) => (
                    <li style={{ marginBottom: "1em" }}>
                      <MarkdownRenderer markdown={text} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {experience["referencedPapers"] ? (
                <div>
                  <h3>Referenced Papers</h3>
                  <ul>
                    {experience["referencedPapers"].map(({ name, url }) => (
                      <li style={{ marginBottom: "1em" }}>
                        <a
                          className="referenced-paper"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={url}
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
