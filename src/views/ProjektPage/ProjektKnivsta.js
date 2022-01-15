import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "./styleProjekt";
const useStyles = makeStyles(styles);

import knivsta1 from "assets/img/knivsta/knivsta1.png";
import knivsta2 from "assets/img/knivsta/knivsta2.png";
import knivsta3 from "assets/img/knivsta/knivsta3.jpg";

import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>
              Projekt: Fredells bygghandel (Numera Bauhaus
            </h2>
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
                    src={knivsta1}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Hyvelgatan 1, Knivsta
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={knivsta2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Hyvelgatan 1, Knivsta
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={knivsta3}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Hyvelgatan 1, Knivsta
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
