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
import { aboutMe } from "../Content/AboutMe";

export default function Album() {
  const renderWebHistoryItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "slategrey", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  slategrey",
        }}
        iconStyle={{ background: "steelblue", color: "#fff" }}
        icon={<WebIcon />}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
        <p>{item.role}</p>
        <p>{item.date}</p>
      </VerticalTimelineElement>
    );
  };

  const renderCurrentWorkItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "slategrey", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  slategrey",
        }}
        iconStyle={{ background: "slategrey", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
        <p>{item.role}</p>
        <p>{item.date}</p>
      </VerticalTimelineElement>
    );
  };

  const renderWorkHistoryItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "slategrey", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">{item.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
        <p>{item.role}</p>
        <p>{item.date}</p>
      </VerticalTimelineElement>
    );
  };

  const renderSchoolItem = (item) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "darkred", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              {item.title}
            </Grid>
            <Grid item xs={4}>
              <img src={OuLogo} alt="" width="50%" />
            </Grid>
          </Grid>
        </h3>
        <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
        <p>{item.role}</p>
        <p>{item.date}</p>
      </VerticalTimelineElement>
    );
  };

  const renderTimelineHistory = (items) => {
    return aboutMe.history.map((item) => {
      if (item.type === "web") {
        return renderWebHistoryItem(item);
      } else if (item.type === "work" && item.current) {
        return renderCurrentWorkItem(item);
      } else if (item.type === "work" && !item.current) {
        return renderWorkHistoryItem(item);
      } else if (item.type === "school") {
        return renderSchoolItem(item);
      } else {
        return <React.Fragment />;
      }
    });
  };

  const renderAboutMeText = () => {
    return aboutMe.about.map((section) => {
      return (
        <Typography variant="body1" paragraph>
          {section}
        </Typography>
      );
    });
  };

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
          {renderAboutMeText()}
          <div>
            <Typography variant="h5" paragraph>
              Contact Me:
            </Typography>
            <Typography variant="h6" paragraph>
              email: {aboutMe.contact.email}
            </Typography>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  href={aboutMe.contact.linkedIn}
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
                  href={aboutMe.contact.github}
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
            {renderTimelineHistory()}
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
