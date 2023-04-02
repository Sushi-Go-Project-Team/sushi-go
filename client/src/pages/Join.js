import React from "react"
import io from "socket.io-client"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import {useNavigate} from 'react-router-dom';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY);

export default function Join({socket}) {
	const navigate = useNavigate();

	async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

	const [code, setCode] = React.useState("")

	function handleChange(event) {
        // const {name, value, type, checked} = event.target
        setCode( event.target.value);
	}

	async function joinRoom() {
		const roomIdNum = code;
		await socket.join(roomIdNum);
		socket.to(roomIdNum).emit('joined-room', roomIdNum);
	}

	async function createRoom() {
		const roomIdNum = Math.floor(Math.random() * 100000) + 100000;
		await socket.join(roomIdNum.toString());
		socket.to(roomIdNum).emit('created-room', roomIdNum);
		
	}

    return (
        <div className="join">
			<div>
			<img src="images/join-logo.png" alt="logo" className="join-image"/>
			</div>
	        <div className="center">
		        <h2>Join Game</h2>
	            <input type="text" placeholder="Game Pin" onChange = {handleChange}/>
	            <button onClick = {joinRoom} >Enter</button>
	            <p>OR</p>
	            <button onClick = {createRoom}>Create New</button>
				<button onClick={() => signOutUser()}> Logout </button>
            </div>
        </div>
    )
}