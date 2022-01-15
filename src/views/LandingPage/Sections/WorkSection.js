import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "@emailjs/browser";
import apiKey from "./emailkey.js";
import swal from "sweetalert";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    .then(
      function (response) {
        swal(response.text, "Meddelandet har skickats", "success");
      },
      function (error) {
        swal(
          error.text,
          "Något gick fel när meddelandet skulle skickas, försök igen",
          "error"
        );
      }
    );
  var frm = document.getElementsByName("kontakt")[0];
  frm.reset();
};

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hör av dig</h2>
          <h4 className={classes.description}>
            Skriv ett meddelande så återkommer jag så fort jag får möjlighet.
          </h4>
          <form onSubmit={handleSubmit} name="kontakt">
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Ditt namn"
                  id="name"
                  inputProps={{
                    name: "name",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Din Email"
                  id="email"
                  inputProps={{
                    name: "email",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Ditt telefonnummer"
                  id="phone"
                  inputProps={{
                    name: "phone",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Ditt meddelande"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  name: "message",
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" type="submit">
                  Skicka meddelande
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
