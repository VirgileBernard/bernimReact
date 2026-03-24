import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [nbPiles, setNbPiles] = useState(null);

  return (
    <div className="app">
      {/* Bouton Light/Dark toujours visible */}
      <ThemeToggle />

      {/* Navigation simple */}
      {nbPiles === null ? (
        <Home onStart={setNbPiles} />
      ) : (
        <Game nbPiles={nbPiles} />
      )}
    </div>
  );
}
