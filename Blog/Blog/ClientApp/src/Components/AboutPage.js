import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import AvatarImage from "../Images/avatar.png";
import OuLogo from "../Images/oulogo.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Grid container spacing={2} alignContent="center">
              <Grid item xs={8}>
              <Typography component="h2" variant="h3" color="textPrimary" gutterBottom>
                About Me
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                Nice to meet you!
              </Typography>
              <div className={classes.heroButtons}>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Contact Me:
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                  email@email.com
                </Typography>
              </div>
              <div className={classes.heroButtons}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="primary">
                      LinkedIn
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      GitHub
                    </Button>
                  </Grid>
              </Grid>
            </div>
              </Grid>
              <Grid item xs={4}>
                <img src={AvatarImage} alt="" width="100%"/>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2018 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">CivicPlus</h3>
              <h4 className="vertical-timeline-element-subtitle">Manhattan, KS</h4>
              <p>
                Software Engineer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2013 - 2018"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Garmin</h3>
              <h4 className="vertical-timeline-element-subtitle">Olathe, KS</h4>
              <p>
                Software Engineer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2012"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">ArcBest Technologies (Data-Tronics Corp.)</h3>
              <h4 className="vertical-timeline-element-subtitle">Ft. Smith, AR</h4>
              <p>
                Programmer Analyst
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2012"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Wesley Howell Photography</h3>
              <h4 className="vertical-timeline-element-subtitle">Woodward, OK</h4>
              <p>
                Owner, Photographer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2009 - 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    Bachelor of Science in Computer Science
                  </Grid>
                  <Grid item xs={4}>
                    <img src={OuLogo} alt="" width="50%" />
                  </Grid>
                </Grid>
              </h3>
              <p>
                University of Oklahoma
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
    </React.Fragment>
  );
}