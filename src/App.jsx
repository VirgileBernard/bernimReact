import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";
import Layout from "./components/Layout";

export default function App() {
  const [nbPiles, setNbPiles] = useState(null);

  return (
    <Layout>
      {nbPiles === null ? (
        <Home onStart={setNbPiles} />
      ) : (
        <Game nbPiles={nbPiles} />
      )}
    </Layout>
  );
}
