import React from "react";
import "./index.css";

interface IDividerProps {
  type: "horizontal" | "vertical";
}

export const Divider: React.FC<IDividerProps> = ({ type }) => {
  const classname =
    type === "vertical" ? "vertical-divider" : "horizontal-divider";

  return <div className={classname} />;
};
