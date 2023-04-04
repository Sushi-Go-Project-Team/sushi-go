import React from 'react'

const ResultPlayerCard = (props) => {
  return (
    <div className = "player">
        <pre><p className = "player-info">{props.number}      {props.name}</p></pre>
        <p className = "player-info"><strong>{props.score}</strong></p>
    </div>
  )
}

export default ResultPlayerCard