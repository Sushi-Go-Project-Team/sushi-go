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
import User from "./classes/User"
import '../src/style.css'
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
  const [code, setCode] = useState("");
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(["John", "Bob", "Mary"]);

  const deck = ["SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE",
    "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC",
    "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy",
    "Na-1", "Na-1", "Na-1", "Na-1", "Na-1", "Na-1",
    "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2",
    "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", 
    "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", 
    "Tof", "Tof", "Tof", "Tof", "Tof", 
    "Spi", "Spi", "Spi", "Spi", "Spi",
    "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc",
    "Nor", "Nor", "Nor", "Nor", "Nor", "Nor", 
    "Cho", "Cho", "Cho", "Cho"];
  
  useEffect(() => {
    //create socket connection
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

  function dealPlayerHand() {
    //at start of game deal 7 random cards to each User
    let deckCopy = [...deck];
    let userHand = [];
    for (let i = 0; i < 8; i++) {
        let randIdx = Math.floor(Math.random() * deckCopy.length);
        let randC = deckCopy.splice(randIdx, 1);
        userHand.push(randC[0]);
    }
    return userHand;
  }

  function createUser() {
    const hand = dealPlayerHand();
    const user = {
        name: "John",
        cardsPicked: [],
        currentHand: hand,
        puddings: 0,
        leftUser: null,
        rightUser: null
    }
    setPlayer(user);
  }

	function handleChange(event) {
        // const {name, value, type, checked} = event.target
        setCode(event.target.value);
	}

	function joinRoom() {
		const roomIdNum = code;
    createUser();
    console.log(player);
		socket.emit('join', roomIdNum, socket.id);
		socket.on('join', (data, id) => {
			console.log(id);
		});
	}

	function createRoom() {
		const roomIdNum = (Math.floor(Math.random() * 100000) + 100000).toString();
		setCode(roomIdNum);
    createUser();
    console.log(player);
		socket.emit('join', roomIdNum, socket.id);
		socket.on('join', (data, id) => {
			console.log(id);
		});
	}

  return (
    <div className="App">
      {/* {user1._hand.map((c, index) => (
      <Card key = {index} image="images/GameCards.png" name={c.name} value={c.value} />)
      )} */}
    <Routes>
      <Route path="/game" element={<Game socket = {socket} />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/join" element={<Join 
        socket = {socket}
        handleChange = {handleChange}
        setCode = {setCode}
        joinRoom = {joinRoom}
        createRoom = {createRoom} />}></Route>
      <Route path="/results" element={<Results socket = {socket} />}></Route>
      <Route path="/landing" element={<Landing 
        socket = {socket}
        code = {code} 
        players = {players} />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
    </div>
  );
}
