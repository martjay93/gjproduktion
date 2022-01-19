import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import TopNav from "views/Components/TopNav.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
// import logo from "assets/img/gjlogo4.svg";

import Home from "@material-ui/icons/Home";

import NavPills from "components/NavPills/NavPills.js";

import svartbacken1 from "assets/img/svartbacken/1svartbacken.png";
import svartbacken2 from "assets/img/svartbacken/2svartbacken.png";
import svartbacken3 from "assets/img/svartbacken/3svartbacken.jpg";
import svartbacken4 from "assets/img/svartbacken/4svartbacken.jpg";
import svartbacken5 from "assets/img/svartbacken/5svartbacken.png";
import svartbacken6 from "assets/img/svartbacken/6svartbacken.png";
import knivsta1 from "assets/img/knivsta/knivsta1.png";
import knivsta2 from "assets/img/knivsta/knivsta2.png";
import knivsta3 from "assets/img/knivsta/knivsta3.jpg";

const useStyles = makeStyles(styles);

export default function LandingPage() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <TopNav />
      <Parallax filter image={require("assets/img/background.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                DITT PROJEKT FRÅN IDÈ TILL AVSLUT
              </h1>
              <h4>Hjälper Dig att utveckla och/eller förändra ditt boende</h4>
              <br />
              <Button
                component={Link}
                to={"/kontakt"}
                color="primary"
                size="lg"
              >
                Kontakta mig
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <h2 style={{ textAlign: "center", color: "#3C4858" }}>
                Projekt i urval:
              </h2>
            </GridItem>

            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Svartbäcken, Uppsala",
                    tabIcon: Home,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <p>Frontvy</p>
                          <img
                            alt="..."
                            src={svartbacken1}
                            className={navImageClasses}
                          />
                          <p>Sidovy</p>
                          <img
                            alt="..."
                            src={svartbacken2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <p>Balkong 1</p>
                          <img
                            alt="..."
                            src={svartbacken3}
                            className={navImageClasses}
                          />
                          <p>Balkong 2</p>
                          <img
                            alt="..."
                            src={svartbacken4}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <p>Före(2005)</p>
                          <img
                            alt="..."
                            src={svartbacken5}
                            className={navImageClasses}
                          />
                          <p>Efter(2012</p>
                          <img
                            alt="..."
                            src={svartbacken6}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                  {
                    tabButton: "Knivsta bygghandel",
                    tabIcon: Home,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={6} md={4}>
                          <img
                            alt="..."
                            src={knivsta1}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={knivsta2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={knivsta3}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <GridContainer justify="center">
                <Button
                  component={Link}
                  to={"/projekt"}
                  color="primary"
                  size="lg"
                  simple
                >
                  Se fler projekt
                </Button>
              </GridContainer>
            </GridItem>
          </GridContainer>

          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
