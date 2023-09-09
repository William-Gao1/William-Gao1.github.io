import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
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

export default function socialMedia(props) {
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
