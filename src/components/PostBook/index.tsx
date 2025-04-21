import { useState } from "react";
import { Button } from "../Buttons";

export const PostBook = () => {
  const [addLists, setAddLists] = useState(["Hello", " Hi"]);
  const [list, setList] = useState("");

  const date = new Date().toDateString();

  return (
    <div>
      <h1>Post Book</h1>
      Add Post:
      <input onChange={(e) => setList(e.target.value)} value={list} />
      <Button handleClick={() => setAddLists([...addLists, list])}>Save</Button>
      {addLists.map((addList) => (
        <ul>
          <li>{addList}</li>
          <p>posted on {date}</p>
        </ul>
      ))}
    </div>
  );
};
