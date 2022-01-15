import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "./styleProjekt";
const useStyles = makeStyles(styles);

import svartbacken1 from "assets/img/svartbacken/1svartbacken.png";
import svartbacken2 from "assets/img/svartbacken/2svartbacken.png";
import svartbacken3 from "assets/img/svartbacken/3svartbacken.jpg";
import svartbacken4 from "assets/img/svartbacken/4svartbacken.jpg";
import svartbacken5 from "assets/img/svartbacken/5svartbacken.png";
import svartbacken6 from "assets/img/svartbacken/6svartbacken.png";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Projekt: Svartbäcken</h2>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={svartbacken1}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={svartbacken2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={svartbacken3}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={svartbacken4}
                    alt="Fourth slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={svartbacken5}
                    alt="Fifth slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={svartbacken6}
                    alt="Last slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Svartbäcken, Uppsala
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
