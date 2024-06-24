'use client'
import React, { useState } from 'react'
import './styles.css'
import Tag from '../Tag'
import Image, { StaticImageData } from 'next/image'

type Experience = {
  title: string
  timePeriod?: string
  description: string
  technologies: string[]
  navigationLink: string
  image?: StaticImageData
}
type TileBaseProps = {
  isProjectComponent?: boolean
  experience?: Experience
}

const ExperienceComponent: React.FC<TileBaseProps> = (props: TileBaseProps) => {
  const [isMouseHovered, setIsMouseHovered] = useState(false)
  const { isProjectComponent } = props

  const { experience } = props

  const setMouseHoverTrue = () => {
    setIsMouseHovered(true)
  }
  const setMouseHoverFalse = () => {
    setIsMouseHovered(false)
  }

  return (
    <div
      className="experienceWrapper"
      onMouseEnter={setMouseHoverTrue}
      onMouseLeave={setMouseHoverFalse}
      onClick={() =>
        window.open(experience?.navigationLink, '_blank', 'noopener,noreferrer')
      }
    >
      {isProjectComponent && experience?.image ? (
        <div className="projectImageWrapper">
          <Image src={experience.image} alt="image" className="projectImage" />
        </div>
      ) : (
        <span className="timePeriod">{experience?.timePeriod}</span>
      )}
      <div>
        <div className="experienceHeadingSection">
          <h4
            className={
              isMouseHovered ? 'mouseHoveredHeading' : 'mouseNotHoveredHeading'
            }
          >
            {experience?.title}
          </h4>
        </div>

        <div className="experienceContent">
          <p className="experienceParagraph">{experience?.description}</p>
          {
            <div className="experienceTagSection">
              {experience?.technologies.map((text: string) => (
                <Tag key={text} text={text} />
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceComponent
