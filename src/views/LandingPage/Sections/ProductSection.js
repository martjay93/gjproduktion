import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Jag kan hjälpa dig med:</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              className={classes.icon}
              title="Arkitektur och byggrådgivning"
              description="Förverkliga dina tankar och idéer! Hjälp kan erbjudas under hela byggprocessen"
              icon={FoundationOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Kontrollansvar och kvalitet"
              description="Behöver du en Kontrollansvarig?
              Certifierad enl. PBL behörighet K
              Projekt- och byggledning "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              className="ikoner"
              title="Konstruktion och tillverkning"
              description="Förtillverkning av byggnadsdelar, prototyper och specialsnickerier"
              icon={HandymanOutlinedIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
