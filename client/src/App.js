import React from "react"
import io from "socket.io-client"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import Results from "./pages/Results"

export default function App() {
  const socket = io.connect("http://localhost:4000")

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Card />
      <Game />
      <Instructions />
      <Join />
      <Results />
    </div>
  );
}
