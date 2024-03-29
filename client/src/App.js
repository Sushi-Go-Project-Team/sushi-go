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
import { createBrowserHistory } from 'history';
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

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [socket, setSocket] = useState(null);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  const history = createBrowserHistory();
  
  useEffect(() => {
    //create socket connection
    setSocket(io.connect("http://localhost:4000"));
    // send events to server
    // socket.emit('event1', {data: "some data"});

    //handle events from server
    
    // cleanup
    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  function dealPlayerHand() {
    //at start of game deal 8 random cards to each User
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
        name: name,
        cardsPicked: [],
        currentHand: hand,
        puddings: 0,
        leftUser: null,
        rightUser: null
    }
    return user;
  }

	function handleChange(event) {
        // const {name, value, type, checked} = event.target
        setCode(event.target.value);
	}

  function handleNameChange(event) {
    // const {name, value, type, checked} = event.target
    setName(event.target.value);
}

	function joinRoom() {
		const roomIdNum = code;
    const user = createUser();
    setPlayer(user);
		socket.emit('join', roomIdNum, socket.id, user);
		socket.on('join', (users) => {
      setPlayers(users);
		});
	}

	function createRoom() {
		const roomIdNum = (Math.floor(Math.random() * 100000) + 100000).toString();
		setCode(roomIdNum);
    const user = createUser();
    setPlayer(user);
		socket.emit('join', roomIdNum, socket.id, user);
		socket.on('join', (users) => {
      setPlayers(users);
		});
	}

  function cardClick(card) {
    let cards = player.currentHand;
    pickCard();
    const index = cards.findIndex(c => c === card);
    cards.splice(index, 1);
    setPlayer((prevPlayer) => ({
        ...prevPlayer,
        cardsPicked: [...prevPlayer.cardsPicked, card],
        currentHand: cards
    }));
    socket.emit('picked-card', code, player.name, card, cards);
    socket.on('picked-card', (users) => {
      setPlayers(users);
		});
    // socket.on('updated-card', (users) => {
    //     setPlayers(users);
    // });
    // , () => {
    //     console.log(player);
    //     socket.emit('picked-card', code, player);
    //   });
    // // Add clicked card to pickedCards array
    // setChosenCards([...chosenCards, card]);
    // // Check if the previously clicked card matches the current card
    // if (prevCard !== null && prevCard.id !== card.id && prevCard.pairWith.includes(card.id)) {
    //     if (prevCard.image === card.image) {
    //         // Cards match, add to matchedCards array
    //         setPairs([...pairs, prevCard, card]);
    //         setPrevCard(null);
    //     } else {
    //         // Cards don't match, reset pickedCards array
    //         setTimeout(() => {
    //             setChosenCards([]);
    //             setPrevCard(null);
    //         }, 1000);
    //     }
    // } else if (prevCard ) {
    //     setPrevCard(card);
    // }
};

  function endGame() {
    socket.emit('end-game', code);
    socket.on('winner', (name1, score1, name2,  score2) => {
      const resultNames = [name1, name2];
      const resultScores = [score1, score2];
      // console.log(resultNames);
      // console.log(resultScores);
      setResults([name1, score1, name2, score2]);
      // console.log(results)
    });
  }

  function pickCard() {
    
  }

  return (
    <div className="App">
    <Routes history = {history}>
      <Route path="/game" element={<Game 
        socket = {socket}
        user = {player}
        users = {players}
        endGame = {endGame}
        pickCard = {pickCard} 
        setPlayer = {setPlayer}
        player = {player}
        setPlayers = {setPlayers}
        players = {players}
        code = {code}
        cardClick = {cardClick}/>}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/join" element={<Join 
        socket = {socket}
        handleChange = {handleChange}
        handleNameChange = {handleNameChange}
        setCode = {setCode}
        joinRoom = {joinRoom}
        createRoom = {createRoom} />}></Route>
      <Route path="/results" element={<Results 
        socket = {socket}
        user = {player}
        results = {results} />}></Route>
      <Route path="/landing" element={<Landing 
        socket = {socket}
        code = {code} 
        players = {players} />}></Route>
      <Route exact path="/" element={<Login />}></Route>
    </Routes>
    </div>
  );
}
