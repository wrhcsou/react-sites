import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from "./Components/Blog";
import AboutPage from "./Components/AboutPage";
import './App.css';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Stories', url: '/' },
  { title: 'Resources', url: '/' },
  { title: 'About Me', url: '/about' },
];

function App() {
  return (
    <Router>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <Blog />
          </Route>
        </Switch>
      </Container>
      <Footer title="" description="Websites by Wesley Howell" />
    </React.Fragment>
    </Router>
  );
}

export default App;
