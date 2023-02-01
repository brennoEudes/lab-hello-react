import "./App.css";
import { Logo } from "./Components/Iron_logo";
import { Menu } from "./Components/Menu_icon";
import { Header } from "./Components/Header";
import { Button } from "./Components/Button/Index";
import { Card_1 } from "./Components/Card_1";
import { Card_2 } from "./Components/Card_2";
import { Card_3 } from "./Components/Card_3";
import { Card_4 } from "./Components/Card_4";

function App() {
  return (
    <div className="App">
      <div id="container_1">
        <div id="container_2">
          <Logo /> <Menu />
        </div>

        <div id="container_3">
          <Header />
          <Button />
        </div>
      </div>

      <div id="container_4">
        <div id="container_5">
          <Card_1 />
        </div>
        <div id="container_6">
          <Card_2 />
        </div>
        <div id="container_7">
          <Card_3 />
        </div>
        <div id="container_8">
          <Card_4 />
        </div>
      </div>
    </div>
  );
}

export default App;
