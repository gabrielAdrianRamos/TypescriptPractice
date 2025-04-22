import React from "react";
import "./index.css";
import { Divider } from "../Divider";

interface INavbarProps {
  buttons: string[];
  selected: string;
}

export const NavBar: React.FC<INavbarProps> = ({ buttons, selected }) => {
  return (
    <div className="navbar">
      {buttons.map((button, index) => {
        const classname = selected === button ? "button selected" : "button";

        return (
          <React.Fragment key={button}>
            {!!index && <Divider type="vertical" />}
            <div className={classname}>{button}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
