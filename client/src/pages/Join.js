import React from "react"
import io from "socket.io-client"

export default function Join() {

	const socket = io.connect("http://localhost:4000")
  	socket.emit('test-channel', "a test message")
  	socket.on('other-test-channel', (data) => {
    	console.log('received socket data from server:', JSON.stringify(data));
  	});

	function roomJoinListener() {
		console.log("quit");
		socket.emit('room-code', "123456")
	  }

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
		            <input type="text" placeholder="Game Pin"/>
		            <button onClick={roomJoinListener} class= "button">Enter</button>
		            <p>OR</p>
		            <button class="button">Create New</button>
	            </div>
            </body>
        </div>
    )
}