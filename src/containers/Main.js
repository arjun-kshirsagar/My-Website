import React, { Component } from "react";
import Header from "../components/Header/Header";
import Greeting from "./Greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/Progress";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Achievement from "./Achievement/Achievement";
import Blogs from "./Blogs/Blogs";
// import Contact from "./contact/Contact";
import Footer from "../components/Footer/Footer";
import Top from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
import Profile from "./Profile/Profile";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education/>
        <Projects />
        {/* <Achievement /> */}
        {/* <Blogs /> */}
        <Profile />
        <Footer />
        <Top/>
      </div>
    );
  }
}