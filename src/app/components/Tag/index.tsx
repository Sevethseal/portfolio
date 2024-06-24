import React from "react";
import "./styles.css";

type tagProps = {
  text: string;
};

const Tag = ({ text }: tagProps) => {
  return (
    <div className="tagWrapper">
      <span className="tagText">{text}</span>
    </div>
  );
};

export default Tag;
