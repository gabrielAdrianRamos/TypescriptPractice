import { Button } from "./components/Buttons";
import { Keys } from "./components/Keys";

function App() {
  return (
    <>
      <Keys />
      <Button type="primary" handleClick={() => console.log("Reusable Button")}>
        Click Me
      </Button>
    </>
  );
}

export default App;
