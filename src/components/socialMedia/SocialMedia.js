import React from "react";
import { useParams } from "react-router-dom";
import "./SocialMedia.css";
import * as SoftwarePortfolio from "../../shared/portfolio/portfolio_software";
import * as MLPortfolio from "../../shared/portfolio/portfolio_ml";
import styled from "styled-components";

const IconWrapper = styled.span`
  svg {
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
    width: 1.3em;
    height: 1.3em;
    padding: 0.3em;
    margin: 0 0.18em;
    color: white;
  }
  &:hover svg {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia(props) {
  const { role } = useParams();
  const { socialMediaLinks } =
    role === "software" ? SoftwarePortfolio : MLPortfolio;
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <a
            key={media.name}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              <i
                className="iconify"
                data-icon={media.fontAwesomeIcon}
                data-inline="false"
              />
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
