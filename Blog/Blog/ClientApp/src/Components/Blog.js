import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Sidebar from "./Sidebar";
import { blog } from "../Content/BlogFeatured";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  ...blog.featuredPost,
  imgText: "main image description",
  linkText: "Continue reading…",
};

const sidebar = {
  title: "About",
  description: blog.about,
  social: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: blog.github,
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: blog.linkedIn,
    },
  ],
};

export default function Blog(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} history={props.history} />
        <Grid container spacing={4}>
          {blog.posts.map((post) => (
            <FeaturedPost
              key={post.title}
              post={post}
              history={props.history}
            />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </React.Fragment>
  );
}
