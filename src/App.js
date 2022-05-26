import "./App.css";
import { useState } from "react";
import UlFrutas from "./components/ulFrutas";
import ButtonFruits from "./components/ButtonFruits";
import TotalPrice from "./components/TotalPrice";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function redFruits() {
    const redFruit = fruits.filter((fruta) => fruta.color === "red");
    setFruits(redFruit);
  }

  const totalPrice = fruits.reduce((valorAnterior, acc) => {
    return acc.price + valorAnterior;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <TotalPrice>R$ {totalPrice},00</TotalPrice>
        <UlFrutas>
          {fruits.map((fruta, index) => (
            <li key={index}>
              {fruta.name.charAt(0).toUpperCase() + fruta.name.slice(1)}
            </li>
          ))}
        </UlFrutas>
        <ButtonFruits redFruits={redFruits}>REDFruits!</ButtonFruits>
      </header>
    </div>
  );
}

export default App;
