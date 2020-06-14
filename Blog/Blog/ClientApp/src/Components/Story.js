import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { stories } from "../Content/Stories";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
    },
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 300,
  },
}));

export default function Story(props) {
  const classes = useStyles();
  const story = stories[props.match.params.id];

  const renderHeader = () => {
    return (
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${story.headerImage})` }}
      >
        {<img style={{ display: "none" }} src={story.headerImage} alt="" />}
        <div className={classes.overlay} />
        <div className={classes.mainFeaturedPostContent}>
          <Typography
            align="center"
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            {story.title}
          </Typography>
        </div>
      </Paper>
    );
  };

  const renderBodyText = (text) => {
    return (
      <Typography paragraph variant="body1">
        {text}
      </Typography>
    );
  };

  const renderVideo = (video) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography paragraph>
          <iframe
            title="video"
            width="560"
            height="315"
            src={video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Typography>
      </div>
    );
  };

  const renderLink = (link) => {
    return (
      <CardActionArea component="a" href={link.content} target="_blank">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {link.linkTitle}
              </Typography>
              <Typography variant="subtitle1">
                {link.linkDescription}
              </Typography>
              <Typography variant="subtitle1" color="primary" paragraph>
                Continue reading...
              </Typography>
              <Typography variant="caption" paragraph>
                {link.content}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={link.linkImage}
              title=""
            />
          </Hidden>
        </Card>
      </CardActionArea>
    );
  };

  const renderContent = () => {
    return story.body.map((content) => {
      if (content.type === "text") {
        return renderBodyText(content.content);
      } else if (content.type === "embedVideo") {
        return renderVideo(content.content);
      } else if (content.type === "link") {
        return renderLink(content);
      }
      return <React.Fragment></React.Fragment>;
    });
  };

  return (
    <React.Fragment>
      <main>
        {renderHeader()}
        {renderContent()}
      </main>
    </React.Fragment>
  );
}
