import React, { useState, useRef, useEffect } from "react"
import io from "socket.io-client"
import {Routes, Route} from "react-router-dom"
import Card from "./components/Card"
import Game from "./pages/Game"
import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import Results from "./pages/Results";
import Login from "./pages/Login";
import Landing from "./pages/Landing"
import '../src/style.css'
import User from "../../server/user.js"
import Deck from "./classes/deck.js"
import '../src/modal.css'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  let LU = new User(1, 2,3,0, null, null)
  let RU = new User(5, 6, 6, 0, null, null)

  let user1 = new User(133, 0, 3, LU, RU)
  const newDeck = new Deck()

  user1._hand = newDeck.dealPlayerHand()


  return (
    <div className="App">
      {user1._hand.map((c, index) => (
      <Card key = {index} image="images/GameCards.png" name={c.name} value={c.value} />)
      )}
    <Routes>
      <Route path="/game" element={<Game socket = {socket} />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/join" element={<Join socket = {socket} />}></Route>
      <Route path="/results" element={<Results socket = {socket} />}></Route>
      <Route path="/landing" element={<Landing socket = {socket} />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
    </div>
  );
}
