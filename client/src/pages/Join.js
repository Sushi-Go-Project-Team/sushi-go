import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"

export default function Join() {
    return (
        <div>
	        <div class="center">
		        <h2>Join Game</h2>
	            <input type="text" placeholder="Game Pin"/>
	            <button class="button">Enter</button>
	            <p>OR</p>
	            <button class="button">Create New</button>
            </div>
        </div>
    )
}