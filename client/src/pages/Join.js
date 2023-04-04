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
	const[pin, setPin] = React.useState("")

	function handleChange(event) {
        // const {name, value, type, checked} = event.target
        setCode(event.target.value);
	}

	function joinRoom() {
		const roomIdNum = code;
		socket.emit('join', roomIdNum, socket.id);
		socket.on('join', (data, id) => {
			console.log(id);
		});
	}

	function createRoom() {
		const roomIdNum = Math.floor(Math.random() * 100000) + 100000;
		setPin(roomIdNum);
		socket.emit('join', roomIdNum.toString());
		socket.on('join', (data) => {
			console.log(data);
		});
	}

    return (
        <div className="join">
			<div>
			<img src="images/join-logo.png" alt="logo" className="join-image"/>
			</div>
	        <div className="center">
		        <h2>Join Game</h2>
	            <input type="text" placeholder="Game Pin" onChange = {handleChange}/>
	            <button onClick = {joinRoom}>Enter</button>
	            <p>OR</p>
	            <button onClick = {createRoom}><Link to="/landing">Create New</Link></button>
				{pin != "" && <p>New Game Pin: {pin}</p>}
				<button onClick={() => signOutUser()}> Logout </button>
            </div>
        </div>
    )
}