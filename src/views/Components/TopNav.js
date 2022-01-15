import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { NavLink } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

// Sections for this page

// import logo from "assets/img/gjlogo4.svg";
import logo1 from "assets/img/gjlogo6.svg";

export default function TopBar(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        brand={
          <NavLink to="/hem">
            <img src={logo1} style={{ width: "50px" }}></img>
          </NavLink>
        }
        leftLinks={
          <NavLink to="/hem">
            <p
              style={{
                color: "purple",
                fontFamily: "Noto Sans Mono, monospace",
                textAlign: "center",
                fontSize: "20px",
                display: "flex",
                fontWeight: "600",
                margin: "auto",
              }}
            >
              gjproduktion
              <br /> Arkitektur & Ekodesign AB
            </p>
          </NavLink>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
    </div>
  );
}
