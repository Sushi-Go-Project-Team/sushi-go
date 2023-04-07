import React from 'react'
import {Link} from "react-router-dom"
import PlayerCard from '../components/PlayerCard';

const Landing = ({socket, code, players}) => {
  const users = players.map((player) => {
    return <PlayerCard user={player.name} />
  });

  return (
    <div>
        <h1>Room Code: {code}</h1>
        {users}
        <button><Link to="/game">Start Game!</Link></button>
    </div>
  )
}

export default Landing