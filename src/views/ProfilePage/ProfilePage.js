import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import TopNav from "views/Components/TopNav.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/goran.jpg";
import gammal from "assets/img/omBild.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <TopNav />
      <Parallax small filter image={require("assets/img/bgOm.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2
                className={classes.title}
                style={{ color: "#FFFFFF", zIndex: "1" }}
              >
                HISTORIA OCH BAKGRUND
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem>
                <div className={classes.historia}>
                  <br />
                  <br />
                  <p>
                    År 1913 startades enklare träproduktion av Gustav Robert
                    Johansson i Oxsätra. Ett snickeri och byggmästarverksamhet
                    tog fart från år 1920 och framåt under namnet Oksätra
                    snickerifabrik. Huvudsakliga inriktningen var under många år
                    byggnadssnickerier, köksinredningar och hyvelbänkar.
                  </p>
                  <br />
                  <p>
                    Gustav Johansson var min farfar och han överlät rörelsen på
                    en av sina söner, min farbror, Gunnar Johansson. Nu blev
                    inriktningen mer åt inredningshållet med specialitet på
                    bokhyllor, kontorsmöbler samt husvagnsinredningar. Antalet
                    anställda under den här tiden var 10-12 personer.
                  </p>
                  <br />
                  <p>
                    Min far, Alvar Johansson, var till viss del delaktig i
                    rörelsen såsom uppfinnare och tillverkare av specialmaskiner
                    som användes i tillverkningen.
                  </p>
                  <br />
                  <p>
                    I slutet av 1960-talet försvann verksamheten och fastigheten
                    ur familjen till en firma, Br Arneroth från Stockholm, som
                    fortsatte bedriva snickeriverksamhet. Lokalerna och
                    fastigheten hyrdes i slutet av 70-talet ut till bl a
                    förstärkar- och högtalarlådestillverkning.
                  </p>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={gammal}
                      alt="bild på gamla snickeriet från Upplandsmuseet"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <br />
                  <p>
                    År 1984 köpte jag tillbaka fastigheten och bedrev under en
                    tid byggnadsverksamhet under namnen Arkbygg och Oxsätra
                    snickeri & Hantverk AB. Projektering och byggande av småhus
                    och mindre kontorshus och därtill hörande byggnadsdelar
                    pågick fram till 1996 då lågkonjunkturen gjorde att
                    verksamheten gick i konkurs. Snickeriverksamhet har sedan
                    dess bedrivits i lokalerna i begränsad omfattning. Som mest
                    hade OSH AB fem anställda.
                  </p>
                  <br />
                  <p>
                    Hösten 2014 beslutade jag mig för att återuppta företagande
                    med startandet av gjproduktion Arkitektur & Ekodesign AB.
                    Under det namnet kommer nu verksamheten att bestå av tre
                    delar: &apos;Arkitekt och byggrådgivning&apos;,
                    &apos;kontrollansvar och kvalitet&apos; samt
                    &apos;konstruktion och tillverkning&apos;. Den sistnämnda
                    delen är tänkt att bedrivas som en enskild del och endast
                    hålla på med produkt- samt metodutveckling.
                  </p>
                  <br />
                  <p>
                    Som huvudsaklig ägare och VD har jag följande
                    erfarenhetsmässiga bakgrund:
                  </p>
                  <ul>
                    <li>1978 -1984 Arkitektutbildning, KTH </li>
                    <li>1983 -1996 Egen företagare</li>
                    <li>
                      1997 - 2014 Arbetschef, fastighetschef, byggnadschef,
                      projektledare inom såväl privat, kommunal som statlig
                      verksamhet.
                    </li>
                  </ul>
                  <p>
                    Stor kunskap och kännedom om byggprocessens samtliga delar
                    har inhämtats under flera decennier och är det som jag nu
                    önskar nu föra vidare som en nästintill 100-årig
                    familjetradition.
                  </p>
                  <br />
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={profile}
                      alt="..."
                      className={imageClasses}
                      style={{
                        width: "100%",
                        margin: "8vh auto auto auto",
                        maxWidth: "200px",
                        transform: "translate3d(0, -40%, 0)",
                      }}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Göran Johansson</h3>
                    <h6>ägare och VD</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
