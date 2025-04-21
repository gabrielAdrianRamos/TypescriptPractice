import React from "react";
import "./index.css";

interface IButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  type?: "primary" | "default";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  handleClick,
  type,
}) => {
  const classname = type === "primary" ? "btn-primary" : "";

  return (
    <>
      <button className={classname} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};
