import { useState } from "react";
import { Button } from "../Buttons";

export const Keys = () => {
  const [fruits, setFruits] = useState(["apple", "coconut"]);

  const inputValue = fruits.map((value, index) => {
    return (
      <div key={index}>
        <span>{value}</span>
        <input />
      </div>
    );
  });

  const handleClick = () => {
    setFruits([...fruits, "mango"]);
  };

  return (
    <div>
      {inputValue}
      <Button type="default" handleClick={handleClick}>
        Add Manggo
      </Button>
    </div>
  );
};
