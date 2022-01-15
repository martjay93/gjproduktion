import React from "react";
import TopNav from "views/Components/TopNav.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";

import ProjektSvartbacken from "./ProjektSvartbacken";
import ProjektKnivsta from "./ProjektKnivsta";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function ProjektPage() {
  const classes = useStyles();
  return (
    <div>
      <TopNav />
      <Parallax
        small
        filter
        image={require("assets/img/backgroundProjekt.jpg").default}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>Projekt</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProjektSvartbacken />
          <ProjektKnivsta />
        </div>
      </div>
      <Footer />
    </div>
  );
}
