import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";
import AboutPage from "./Components/AboutPage";
import "./App.css";

const sections = [
  { title: "Home", url: "/" },
  { title: "Blog Archive", url: "/" },
  { title: "About Me", url: "/about" },
];

function App() {
  return (
    <Router>
      <React.Fragment>
        <Container maxWidth="lg">
          <Header title="Blog" sections={sections} />
          <div style={{ padding: "0.5em" }}>
            <Switch>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/">
                <Blog />
              </Route>
            </Switch>
          </div>
        </Container>
        <Footer title="" description="Websites by Wesley Howell" />
      </React.Fragment>
    </Router>
  );
}

export default App;
