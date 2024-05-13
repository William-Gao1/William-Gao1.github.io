import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Error404 from "../pages/errors/error404/Error";
import RoleRoutes from "./routes/RoleRoutes";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/software"
              render={(props) => (
                <RoleRoutes {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/ml"
              render={(props) => (
                <RoleRoutes {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
