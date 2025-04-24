import { Button } from "./components/Buttons";
import { Homepage } from "./components/Homepage";
import { ReduceComponent } from "./components/Hooks/ReduceComponent";
import { Keys } from "./components/Keys";
import { NavBar } from "./components/NavBar";
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
      <NavBar buttons={["Home", "About"]} selected="Home" />
      <Homepage />
      <ReduceComponent />
    </>
  );
}

export default App;
