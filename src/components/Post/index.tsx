import React from "react";

interface IPostProps {
  showDate: boolean;
}

export const Post: React.FC<IPostProps> = ({ showDate }) => {
  const date = new Date().toDateString();

  return (
    <div>
      <h1>My false Book</h1>
      <span>My Post</span>
      {showDate && <p>{date}</p>}
    </div>
  );
};
