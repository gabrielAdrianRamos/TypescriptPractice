import { Reducer, useReducer, useState } from "react";

interface IFruit {
  name: string;
  quantity: number;
}

interface IAddFruitAction {
  type: "ADD_FRUIT";
  name: string;
  quantity: number;
}

interface IRemoveAction {
  type: "REMOVE_FRUIT";
  name: string;
}

const reducer: Reducer<IFruit[], IAddFruitAction | IRemoveAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, { name: action.name, quantity: action.quantity }];
    case "REMOVE_FRUIT":
      return state.filter((fruit) => fruit.name !== action.name);
    default:
      return state;
  }
};

export const ReduceComponent = () => {
  const [inputFruit, setInputFruit] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [fruits, dispatch] = useReducer(reducer, [
    {
      name: "Mango",
      quantity: 5,
    },
  ]);

  const handleInputFruitOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setInputFruit(e.currentTarget.value);
  };

  const handleQuantityOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setQuantity(+e.currentTarget.value);
  };

  const handleAddButtonClick = () => {
    dispatch({
      type: "ADD_FRUIT",
      name: inputFruit,
      quantity,
    });
  };

  console.log("Fruits render");
  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => {
          const handleRemoveButtonClick = () => {
            dispatch({
              type: "REMOVE_FRUIT",
              name: fruit.name,
            });
          };
          return (
            <li key={fruit.name}>
              {fruit.name} - {fruit.quantity}{" "}
              <button onClick={handleRemoveButtonClick}>Remove</button>
            </li>
          );
        })}
      </ul>
      Fruits:
      <input onChange={handleInputFruitOnChange} value={inputFruit} />
      <br />
      Quantity:{" "}
      <input onChange={handleQuantityOnChange} type="number" value={quantity} />
      <br />
      <button onClick={handleAddButtonClick}>Add Fruit</button>
    </div>
  );
};
