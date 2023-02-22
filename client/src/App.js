import React from "react"
import io from "socket.io-client"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import Results from "./pages/Results";
import '../src/style.css'


export default function App() {
  const socket = io.connect("http://localhost:4000")
  socket.emit('test-channel', "a test message")
  socket.on('other-test-channel', (data) => {
    console.log('received socket data from server:', JSON.stringify(data));
  });

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Card />
      <Game />
      <Instructions />
      <Join />
      <Results> </Results>
    </div>
  );
}
