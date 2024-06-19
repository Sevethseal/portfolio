"use client";
import React, { useEffect, useRef, useState } from "react";
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

interface SectionRefs {
  about: HTMLDivElement | null;
  experience: HTMLDivElement | null;
  project: HTMLDivElement | null;
}

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = useRef<SectionRefs>({
    about: null,
    experience: null,
    project: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      console.log("hiii");
      const sectionEntries = Object.entries(sections.current);
      for (const [key, value] of sectionEntries) {
        if (value) {
          const rect = value.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            console.log("hiii");
            setActiveSection(key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(activeSection, "activeSection");
  console.log(activeSection, "activeSection");

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
          <div
            className={
              activeSection === "about" ? "sectionOnFocusClass" : "hoverClass"
            }
          >
            <a
              className="navTab"
              href="#about"
              onFocus={() => setActiveSection("about")}
            >
              ABOUT
            </a>
            <div className="line" />
          </div>
          <div
            className={
              activeSection === "experience"
                ? "sectionOnFocusClassExperience"
                : "experienceHover"
            }
          >
            <a
              className="navTab"
              href="#experience"
              onFocus={() => setActiveSection("experience")}
            >
              EXPERIENCE
            </a>
            <div className="line" />
          </div>
          <div
            className={
              activeSection === "project" ? "sectionOnFocusClass" : "hoverClass"
            }
          >
            <a
              className="navTab"
              href="#project"
              onFocus={() => setActiveSection("project")}
            >
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
        <div
          className="aboutSection"
          id="about"
          ref={(el) => {
            sections.current.about = el;
          }}
        >
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
        <div
          className="experienceList"
          id="experience"
          ref={(el) => {
            sections.current.experience = el;
          }}
        >
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
          <ExperienceComponent />
        </div>
        <div
          id="project"
          ref={(el) => {
            sections.current.project = el;
          }}
        >
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
