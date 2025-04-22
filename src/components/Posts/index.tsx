import React from "react";
import "./index.css";

export interface IPostsProps {
  details: {
    text: string;
    date: string;
  };
}

export const Posts: React.FC<IPostsProps> = ({ details }) => {
  return (
    <div className="post">
      {details.text}
      <br />
      <span className="date">{details.date}</span>
    </div>
  );
};
