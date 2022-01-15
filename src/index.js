import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProjektPage from "views/ProjektPage/ProjektPage";
import ProjektSvartbacken from "views/ProjektPage/ProjektSvartbacken";
import ProjektKnivsta from "views/ProjektPage/ProjektKnivsta";
import TopNav from "./views/Components/TopNav";
import Footer from "components/Footer/Footer.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/hem" component={LandingPage} />
      <Route path="/om" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/com" component={Components} />
      <Route
        path="/projekt/svartbacken"
        render={() => (
          <>
            <TopNav />
            <ProjektSvartbacken />
            <Footer />
          </>
        )}
      />
      <Route
        path="/projekt/knivsta"
        render={() => (
          <>
            <TopNav />
            <ProjektKnivsta />
            <Footer />
          </>
        )}
      />
      <Route path="/projekt" component={ProjektPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
