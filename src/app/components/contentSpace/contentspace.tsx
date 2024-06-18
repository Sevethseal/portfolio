"use client";
import React, { useState } from "react";
import "./styles.css";
import Tag from "../Tag";
import Image, { StaticImageData } from "next/image";

type TileBaseProps = {
  isProjectComponent?: boolean;
  image?: StaticImageData;
};

const ExperienceComponent: React.FC<TileBaseProps> = (props: TileBaseProps) => {
  const [isMouseHovered, setIsMouseHovered] = useState(false);
  const { isProjectComponent } = props;

  const { image } = props;

  const setMouseHoverTrue = () => {
    setIsMouseHovered(true);
  };
  const setMouseHoverFalse = () => {
    setIsMouseHovered(false);
  };

  return (
    <div
      className="experienceWrapper"
      onMouseEnter={setMouseHoverTrue}
      onMouseLeave={setMouseHoverFalse}
    >
      {isProjectComponent && image ? (
        <div className="projectImageWrapper">
          <Image src={image} alt="image" className="projectImage" />
        </div>
      ) : (
        <span className="timePeriod">2024 — Present</span>
      )}
      <div>
        <div className="experienceHeadingSection">
          <h4
            className={
              isMouseHovered ? "mouseHoveredHeading" : "mouseNotHoveredHeading"
            }
          >
            Senior Frontend Engineer, Accessibility at Klaviyo
          </h4>
        </div>

        <div className="experienceContent">
          <p className="experienceParagraph">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          {!isProjectComponent && (
            <div className="experienceTagSection">
              {[
                "JavaScript",
                "React",
                "TypeScript",
                "JavaScript",
                "JavaScript",
                "JavaScript",
                "JavaScript",
              ].map((text: string) => (
                <Tag key={text} text={text} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
