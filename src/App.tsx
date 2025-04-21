import { Button } from "./components/Buttons";
import { Keys } from "./components/Keys";
import { Post } from "./components/Post";
import { PostBook } from "./components/PostBook";

function App() {
  return (
    <>
      <Post showDate />
      <Keys />
      <Button type="primary" handleClick={() => console.log("Reusable Button")}>
        Click Me
      </Button>
      <PostBook />
    </>
  );
}

export default App;
