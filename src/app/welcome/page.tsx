'use client'
import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import ExperienceComponent from '../components/contentSpace/contentspace'
import aboutData from '../../../public/about'

interface SectionRefs {
  about: HTMLDivElement | null
  experience: HTMLDivElement | null
  project: HTMLDivElement | null
}

const About = () => {
  const [activeSection, setActiveSection] = useState('')
  const sections = useRef<SectionRefs>({
    about: null,
    experience: null,
    project: null,
  })
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    setActiveSection(hash || 'about')
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sectionEntries = Object.entries(sections.current)
      for (const [key, value] of sectionEntries) {
        if (value) {
          const rect = value.getBoundingClientRect()
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(key)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="introduction">
      <header className="detail">
        <div className="headingSection">
          <h2 className="heading">{aboutData.name}</h2>
          <span className="title">{aboutData.position}</span>
          <span className="tagLine">{aboutData.tag}</span>
        </div>
        <div className="navigationSection">
          <div
            className={
              activeSection === 'about' ? 'sectionOnFocusClass' : 'hoverClass'
            }
          >
            <a className="navTab" href="#about">
              ABOUT
            </a>
            <div className="line" />
          </div>
          <div
            className={
              activeSection === 'experience'
                ? 'sectionOnFocusClassExperience'
                : 'experienceHover'
            }
          >
            <a className="navTab" href="#experience">
              EXPERIENCE
            </a>
            <div className="line" />
          </div>
          <div
            className={
              activeSection === 'project' ? 'sectionOnFocusClass' : 'hoverClass'
            }
          >
            <a className="navTab" href="#project">
              PROJECTS
            </a>
            <div className="line" />
          </div>
        </div>
        <div className="social">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            onClick={() =>
              window.open(
                'https://github.com/Sevethseal',
                '_blank',
                'noopener,noreferrer',
              )
            }
          />

          <FontAwesomeIcon
            icon={faHackerrank}
            size="2x"
            onClick={() =>
              window.open(
                'https://www.hackerrank.com/profile/kamura657',
                '_blank',
                'noopener,noreferrer',
              )
            }
          />

          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/nirmal-cherian-itty-b203961b4',
                '_blank',
                'noopener,noreferrer',
              )
            }
          />

          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            onClick={() =>
              window.open(
                'https://github.com/Sevethseal',
                '_blank',
                'noopener,noreferrer',
              )
            }
          />
        </div>
      </header>
      <div className="aboutSectionWrapper">
        <div
          className="aboutSection"
          id="about"
          ref={el => {
            sections.current.about = el
          }}
        >
          <div className="navTabMobileAbout">ABOUT</div>

          <h5 className="miniSection">
            {aboutData.sections.whatDrivesMe.title}
          </h5>
          <div className="miniSectionDescription">
            {aboutData.sections.whatDrivesMe.description}
          </div>

          <h5 className="miniSection">
            {aboutData.sections.projectsExperience.title}
          </h5>
          <div className="miniSectionDescription">
            {aboutData.sections.projectsExperience.description}
          </div>

          <h5 className="miniSection">
            {aboutData.sections.outsideOfWork.title}
          </h5>
          <div className="miniSectionDescription">
            {aboutData.sections.outsideOfWork.description}
          </div>
        </div>
        <div
          className="experienceList"
          id="experience"
          ref={el => {
            sections.current.experience = el
          }}
        >
          <div className="navTabMobile">Experience</div>
          {aboutData.experience.map((value, index) => (
            <ExperienceComponent key={index} experience={value} />
          ))}
        </div>
        <div
          id="project"
          ref={el => {
            sections.current.project = el
          }}
          className="projectList"
        >
          <div className="navTabMobile">Project</div>

          {aboutData.project.map((value, index) => (
            <ExperienceComponent
              key={index}
              experience={value}
              isProjectComponent={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
