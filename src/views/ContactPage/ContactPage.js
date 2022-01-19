import React from "react";
import TopNav from "views/Components/TopNav.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
import ContactForm from "views/LandingPage/Sections/WorkSection";
import ContactCard from "./ContactCard";

export default function ContactPage() {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        small
        filter
        image={require("assets/img/landing-bg.jpg").default}
      ></Parallax>
      <TopNav />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ContactForm />
          <ContactCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
