import "./App.css";
import { Logo } from "./Components/Iron_logo";
import { Menu } from "./Components/Menu_icon";
import { Button } from "./Components/Button/Index";
import { Card_1 } from "./Components/Card_1";
import { Card_2 } from "./Components/Card_2";
import { Card_3 } from "./Components/Card_3";
import { Card_4 } from "./Components/Card_4";

function App() {
  return (
    <div className="App">
      <Logo />
      <Menu />
      <Button />
      <Card_1 />
      <Card_2 />
      <Card_3 />
      <Card_4 />
    </div>
  );
}

export default App;
