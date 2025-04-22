import React from "react";
import "./index.css";
import { Divider } from "../Divider";

interface ISidebarProps {
  details: {
    firstName: string;
    lastName: string;
  };
}

export const Sidebar: React.FC<ISidebarProps> = ({ details }) => {
  return (
    <div className="sidebar">
      <h2>About Me</h2>
      <div>First Name: {details.firstName}</div>
      <Divider type="horizontal" />
      <div>Last Name: {details.lastName}</div>
    </div>
  );
};
