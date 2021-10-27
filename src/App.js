import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const randomNumber = () => setNumber(Math.floor(Math.random() * 100) + 1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2>{number}</h2>
          <Button randomNumber={randomNumber}></Button>
        </div>
      </header>
    </div>
  );
}

export default App;
