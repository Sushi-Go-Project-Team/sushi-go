import React from 'react'
import {Link} from "react-router-dom"

const Landing = ({socket}) => {
  return (
    <div>
        <h1>Landing Page</h1>
        <button><Link to="/game">Start Game!</Link></button>
    </div>
  )
}

export default Landing