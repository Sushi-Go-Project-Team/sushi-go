import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

export default function Join() {
    return (
        <div>
	        <div className="center join">
				<img src="images/join-logo.png" alt = "ramen go logo" className = "join-image"/>
		        <h2>Join Game</h2>
	            <input type="text" placeholder="Game Pin"/>
	            <button className="button">Enter</button>
	            <p>OR</p>
	            <button className="button">Create New</button>
            </div>
        </div>
    )
}