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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

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
              <Typography variant="body1" color="textSecondary" paragraph>
                Nice to meet you!
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                I'm a Software Engineer that focuses on driving the use of good engineering principles to 
                develop high quality, defect free software.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                My interests lie in developing software using proven testing principles such as Test Driven Development, 
                promoting detailed software architecture designs, and testing code with high frequency in order to find 
                and reduce risks and defects in implemented software.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Technological interests run the gamut from full stack web development, embedded device programming, security, 
                automation, and architecture design. If it required building something to solve problems, I'm in.
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                My interests involve technology, photography and entrepreneurship. I've been successful running a personal side 
                businesses and maintain a strong interest in business development and building strong relationships with clients 
                in order to ensure future success for both the client and companies I work for.
              </Typography>
              <div className={classes.heroButtons}>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Contact Me:
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                  email: info -- wescodes.tech
                </Typography>
              </div>
              <div className={classes.heroButtons}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Button variant="contained" color="primary" href="https://www.linkedin.com/in/wesleyrhowell">
                      <LinkedInIcon />&nbsp;LinkedIn
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary" href="https://github.com/wescodestech">
                      <GitHubIcon />&nbsp;GitHub
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
                date="Summer 2020"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<WebIcon />}
              >
              <h3 className="vertical-timeline-element-title">Launched This Site</h3>
              <h4 className="vertical-timeline-element-subtitle">WesCodes.tech Blog</h4>
              <p>
                Main Designer, Developer, Writer
              </p>
            </VerticalTimelineElement>
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