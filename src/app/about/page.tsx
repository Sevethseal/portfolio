import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ExperienceComponent from "../components/contentSpace/contentspace";
import recipe from "../../../public/recipe.png";

const About = () => {
  return (
    <div className="introduction">
      <header className="detail">
        <div className="headingSection">
          <h2 className="heading">Nirmal Cherian Itty</h2>
          <span className="title">Full stack developer</span>
          <span className="tagLine">
            Experienced Full Stack Developer | JavaScript & Python | Delivering
            Quality Web Solutions
          </span>
        </div>
        <div className="navigationSection">
          <div className="hoverClass">
            <a className="navTab" href="#about">
              ABOUT
            </a>
            <div className="line" />
          </div>
          <div className="hoverClass">
            <a className="navTab" href="#experience">
              EXPERIENCE
            </a>
            <div className="line" />
          </div>
          <div className="hoverClass">
            <a className="navTab" href="#project">
              PROJECTS
            </a>
            <div className="line" />
          </div>
        </div>
        <div className="social">
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div>
            <FontAwesomeIcon icon={faHackerrank} />
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </header>
      <div>
        <div className="aboutSection" id="about">
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio. My main focus these days is
          building accessible user interfaces for our customers at Klaviyo. I
          most enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood. In my free time, ve also released an online video course
          that covers everything you need to know to build a web app with the
          Spotify API. When I’m not at the computer, I’m usually rock climbing,
          reading, hanging out with my wife and two cats, or running around
          Hyrule searching for Korok seeds .
        </div>
        <div className="experienceList" id="experience">
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
        </div>
        <div id="project">
          <ExperienceComponent isProjectComponent={true} image={recipe} />
          <ExperienceComponent isProjectComponent={true} image={recipe} />
          <ExperienceComponent isProjectComponent={true} image={recipe} />
          <ExperienceComponent isProjectComponent={true} image={recipe} />
          <ExperienceComponent isProjectComponent={true} image={recipe} />
        </div>
      </div>
    </div>
  );
};

export default About;
