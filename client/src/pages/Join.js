import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

export default function Join() {
    return (
        <div>
            <head>
	            <title>Sushi Go</title>
	            <link rel="stylesheet" type="text/css" href="style.css"/>
            </head>
            <body>
	            <div class="banner">
		            <h1>Sushi Go</h1>
	            </div>
	            <div class="center">
		            <h2>Join Game</h2>
					<Button><Link to="/instructions" className = "button--link">How to Play</Link></Button>
		            <input type="text" placeholder="Game Pin"/>
		            <button class="button">Enter</button>
		            <p>OR</p>
		            <button class="button">Create New</button>
	            </div>
            </body>
        </div>
    )
}