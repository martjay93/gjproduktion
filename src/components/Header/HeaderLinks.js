/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";
import Projekt from "@material-ui/icons/Collections";
import Om from "@mui/icons-material/LightbulbOutlined";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projekt"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Projekt}
          dropdownList={[
            <Link to="/projekt" className={classes.dropdownLink}>
              Alla projekt
            </Link>,
            <Link to="/projekt/svartbacken" className={classes.dropdownLink}>
              Svartbäcken
            </Link>,
            ,
            <Link to="/projekt/knivsta" className={classes.dropdownLink}>
              Knivsta
            </Link>,
            ,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={Link}
          to={"/om"}
          color="transparent"
          className={classes.navLink}
        >
          <Om className={classes.icons} /> Om
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Hitta mig på Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/goran.johansson.714"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
