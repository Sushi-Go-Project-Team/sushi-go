import React from "react"
import io from "socket.io-client"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import {useNavigate} from 'react-router-dom';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY);

export default function Join({socket, handleChange, handleNameChange, joinRoom, createRoom}) {
	const navigate = useNavigate();

	async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div className="join">
			<div className = "join-div">
			<img src="images/join-logo-v2.png" alt="logo" className="join-image"/>
			</div>
	        <div className="center join-div">
				<p className="join-text">Enter Name:</p>
	            <input type="text" placeholder="George P Burdell" onChange = {handleNameChange}/>
		        <p className="join-text">Enter Game Room Pin:</p>
	            <input type="text" placeholder="Game Pin" onChange = {handleChange}/>
	            <button onClick = {joinRoom}><Link to="/landing">Enter</Link></button>
	            <p className="join-or">OR</p>
	            <button onClick = {createRoom}><Link to="/landing">Create New</Link></button>
				{/* {pin != "" && <p>New Game Pin: {pin}</p>} */}
				<button className="join-logout" onClick={() => signOutUser()}> Logout </button>
            </div>
        </div>
    )
}