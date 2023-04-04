import React, { useState, useRef, useEffect } from "react"
import io from "socket.io-client"
// import Form from "./components/UsernameForm";
// import Chat from "./components/Chat";
// import immer from "immer"
import {Routes, Route} from "react-router-dom"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import NewCode from "./pages/NewCode"
import Results from "./pages/Results";
import Login from "./pages/Login";
import '../src/style.css'

export default function App() {
  const [socket, setSocket] = useState(io.connect("http://localhost:4000"));
  
  useEffect(() => {
    // send events to server

    socket.emit('event1', {data: "some data"});

    //handle events from server
    socket.on('event1', (data) => {
      console.log('received data:', JSON.stringify(data));
    });
    
    // cleanup
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
    <Routes>
      <Route path="/game" element={<Game socket = {socket} />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/join" element={<Join socket = {socket} />}></Route>
      <Route path="/results" element={<Results socket = {socket} />}></Route>
      <Route path="/newcode" element={<NewCode socket = {socket} />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
    </div>
  );
}
