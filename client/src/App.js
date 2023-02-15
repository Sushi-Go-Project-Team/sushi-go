import React from "react"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import Results from "./pages/Results";
import '../src/style.css'


export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Card />
      <Game />
      <Instructions />
      <Join />
      <Results> </Results>
    </div>
  );
}
