import React from "react"
import io from "socket.io-client"
import Game from "./pages/Game"

import Card from "./components/Card.js"

import Instructions from "./pages/Instructions"
import Join from "./pages/Join"
import NewCode from "./pages/NewCode"
import Results from "./pages/Results";
import '../src/style.css'
import User from "./Classes/User.js"
import Deck from "./Classes/Deck.js"

export default function App() {
  const socket = io.connect("http://localhost:4000")
  socket.emit('test-channel', "a test message")
  socket.on('other-test-channel', (data) => {
    console.log('received socket data from server:', JSON.stringify(data));
  });

  let LU = new User(1, 2,3,0, null, null)
  let RU = new User(5, 6, 6, 0, null, null)

  let user1 = new User(133, 0, 3, LU, RU)
  const newDeck = new Deck()

  user1._hand = newDeck.dealPlayerHand()

  //user1._hand.map((c) => console.log(c.name + " " + c.value))


  return (
    <div className="App">
      {/* <h1>Hello World</h1> */ }

      {user1._hand.map((c, index) => (
      <Card key = {index} image="images/GameCards.png" name={c.name} value={c.value} />)
      )}
      

     
     {/* <Game /> */}
      <Instructions />
      <Join />
      <NewCode />
      <Results> </Results>
    </div>
  );
}
