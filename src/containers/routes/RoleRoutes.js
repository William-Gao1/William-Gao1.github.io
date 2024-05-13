import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/home/HomeComponent";
import Education from "../../pages/education/EducationComponent";
import Experience from "../../pages/experience/Experience";
import Projects from "../../pages/projects/Projects";
import Error404 from "../../pages/errors/error404/Error";

export default function RoleRoutes({ theme }) {
  return (
    <Switch>
      <Route
        path="/software"
        exact
        render={() => <Redirect to="/software/home" />}
      />
      <Route path="/ml" exact render={() => <Redirect to="/ml/home" />} />
      <Route
        path="/:role/home"
        render={(props) => <Home {...props} theme={theme} />}
      />
      <Route
        path="/:role/experience"
        render={(props) => <Experience {...props} theme={theme} />}
      />
      <Route
        path="/:role/education"
        render={(props) => <Education {...props} theme={theme} />}
      />
      <Route
        path="/:role/projects"
        render={(props) => <Projects {...props} theme={theme} />}
      />
      <Route
        path="/:role/*"
        render={(props) => <Error404 {...props} theme={theme} />}
      />
    </Switch>
  );
}
