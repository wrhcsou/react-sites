import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import AvatarImage from "../Images/avatar.png";
import OuLogo from "../Images/oulogo.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

export default function Album() {
  return (
    <React.Fragment>
      <Grid container spacing={2} alignContent="center">
        <Grid item xs={12} sm={5}>
          <Typography
            component="h2"
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            <img align="center" src={AvatarImage} alt="" width="30%" />
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Nice to meet you!
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a Software Engineer that focuses on driving the use of good
            engineering principles to develop high quality, defect free
            software.
          </Typography>
          <Typography variant="body1" paragraph>
            My interests lie in developing software using proven testing
            principles such as Test Driven Development, promoting detailed
            software architecture designs, and testing code with high frequency
            in order to find and reduce risks and defects in implemented
            software.
          </Typography>
          <Typography variant="body1" paragraph>
            Technological interests run the gamut from full stack web
            development, embedded device programming, security, automation, and
            architecture design. If it requires building something to solve
            problems, I'm in.
          </Typography>
          <Typography variant="body1" paragraph>
            My interests involve technology, photography and entrepreneurship.
            I've been successful running a personal side businesses and maintain
            a strong interest in business development and building strong
            relationships with clients in order to ensure future success for
            both the clients and companies I work for.
          </Typography>
          <div>
            <Typography variant="h5" paragraph>
              Contact Me:
            </Typography>
            <Typography variant="h6" paragraph>
              email: info -- wescodes.tech
            </Typography>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href="https://www.linkedin.com/in/wesleyrhowell"
                  style={{ backgroundColor: "slategrey" }}
                >
                  <LinkedInIcon />
                  &nbsp;LinkedIn
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href="https://github.com/wescodestech"
                  style={{ backgroundColor: "slategrey" }}
                >
                  <GitHubIcon />
                  &nbsp;GitHub
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} sm={7}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "slategrey", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  slategrey",
              }}
              iconStyle={{ background: "steelblue", color: "#fff" }}
              icon={<WebIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Launched This Site
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                WesCodes.tech Blog
              </h4>
              <p>Main Designer, Developer, Writer</p>
              <p>Summer 2020</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "slategrey", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  slategrey",
              }}
              iconStyle={{ background: "slategrey", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                A Leader in Local Government Technology
              </h3>
              <p>Software Engineer</p>
              <p>2018 - Present</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "slategrey", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                An International Consumer Electronics Manufacturer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Automotive In-Vehicle Systems Division
              </h4>
              <p>Software Engineer</p>
              <p>2013-2018</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "slategrey", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                A large LTL Frieght and Logistics Corporation
              </h3>
              <p>Programmer Analyst</p>
              <p>2012</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "slategrey", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Wes Photography
              </h3>
              <p>Owner, Photographer</p>
              <p>2008-2012</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "darkred", color: "#fff" }}
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
              <p>University of Oklahoma</p>
              <p>2009-2013</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "steelblue", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
