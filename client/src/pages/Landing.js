import React from 'react'
import {Link} from "react-router-dom"
import PlayerCard from '../components/PlayerCard';
import LoadPlayerRow from './LoadPlayer';

const Landing = ({socket, code, players}) => {
  // const users = players.map((player) => {
  //   return <PlayerCard user={player.name} />
  // });
  const users = players.map((player) => {
    return player.name;
  });

  return (
    <div>
        <h1 className = "gameLogo"> Ramen GO!</h1>
        <div className = "loadContainer">
          <h1 className = "gamePin"> GAME PIN: {code}</h1>
          <LoadPlayerRow firstName = {users[0]}  secondName = {users[1]} />
          {/* <LoadPlayerRow firstName = "Player 3" secondName = "Player 4" /> */}
            <button id = "startBtn"><Link id= "startBtn" to="/game">Start Game!</Link></button>
          {/* {users} */}
        </div>
    </div>
  )
}

export default Landing