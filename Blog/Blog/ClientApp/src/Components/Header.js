import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from '../Images/icon.png';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;
  let theme = createMuiTheme();

  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <ThemeProvider theme={theme}>
            <Typography
            variant="h3"
            align="center"
            style={{fontFamily: "monospace", padding: "10px"}}
            > 
              <img src={Logo} alt="wescodes.tech" height="56px" align="center"/> WesCodes.tech
            </Typography>
          </ThemeProvider>
        
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};