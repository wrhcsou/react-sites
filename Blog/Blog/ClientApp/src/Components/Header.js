import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../Images/icon.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  appbar: {
    colorPrimary: "rgb(115, 140, 165)",
  },
  offset: theme.mixins.toolbar,
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;
  const theme = createMuiTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ background: "slategrey" }}>
        <Toolbar className={classes.toolbar}>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              color="inherit"
              align="center"
              style={{ fontFamily: "monospace", padding: "10px" }}
              className={classes.toolbarTitle}
            >
              <img
                src={Logo}
                alt="wescodes.tech"
                height="56px"
                align="center"
              />{" "}
              WesCodes.tech
            </Typography>
          </ThemeProvider>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <Button
              key={section.title}
              href={section.url}
              style={{ color: "whiteSmoke", textTransform: "none" }}
              fullWidth
            >
              <Typography variant="h6">{section.title}</Typography>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.offset} />
      <div className={classes.offset} />
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
