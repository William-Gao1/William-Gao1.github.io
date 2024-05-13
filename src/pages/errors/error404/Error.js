import React, { Component } from "react";
import Header from "../../../components/header/Header";
import TopButton from "../../../components/topButton/TopButton";
import "./Error.css";
import { NavLink } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main">
        <Header theme={this.props.theme} />
        <div className="error-class">
          <h1>Woops</h1>
          <h1 className="error-404" style={{ height: "100%", marginBottom: 0 }}>
            404
          </h1>
          <p>The requested page is unavailable at the moment!</p>
          <NavLink
            className="go-home-button"
            to="home"
            style={{
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
              display: "inline-flex",
            }}
          >
            <span>Go Home</span>
          </NavLink>
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
