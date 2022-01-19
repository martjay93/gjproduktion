import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Build from "@material-ui/icons/Build";
import Check from "@material-ui/icons/Done";
// import Check from "@mui/icons-material/FactCheckOutlined";
import Draw from "@material-ui/icons/EditOutlined";
// import Draw from "@mui/icons-material/ModeEditOutlineOutlined";
import Membership from "@material-ui/icons/HowToRegOutlined";
// import Membership from "@mui/icons-material/HowToRegRounded";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id="nav-tabs" justify="center" style={{ color: "rgb(60, 72, 88)" }}>
        <h2>Tjänster:</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <div className={classes.tabsmart}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabIcon: Draw,
                    tabContent: (
                      <ul
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <li>Idé och utformning</li>
                        <li>Bygglovshandlingar</li>
                        <li>Konstruktionsritningar</li>
                      </ul>
                    ),
                  },
                  {
                    tabIcon: Membership,
                    tabContent: (
                      <ul
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <li>
                          Medlem i IPHA (International PassiveHouse Association)
                        </li>
                        <li>Medlem i Sveriges Arkitekter</li>
                        <li>Kontrollansvarigas Riksförbund</li>
                      </ul>
                    ),
                  },
                  {
                    tabIcon: Check,
                    tabContent: (
                      <ul
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <li>Kontrollansvar</li>
                        <li>Byggledning</li>
                        <li>Projektledning</li>
                      </ul>
                    ),
                  },
                  {
                    tabIcon: Build,
                    tabContent: (
                      <ul
                        style={{ display: "inline-block", textAlign: "left" }}
                      >
                        <li>Väggblock</li>
                        <li>Attefallshus</li>
                        <li>Gäststugor och garage</li>
                      </ul>
                    ),
                  },
                ]}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
