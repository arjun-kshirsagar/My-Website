import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Button from "../../components/Button/Button";
import { greeting } from "../../Portfolio";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="man sitting on table" src={require("../../assets/images/manOnTable.png")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}