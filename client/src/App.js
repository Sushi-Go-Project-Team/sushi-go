import React from "react"
import io from "socket.io-client"
import {Routes, Route} from "react-router-dom"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import NewCode from "./pages/NewCode"
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
      <Instructions />
    <Routes>
      <Route path="/game" element={<Game />}></Route>
      <Route path="/" element={<Instructions />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/newcode" element={<NewCode />}></Route>
    </Routes>
    </div>
  );
}
