import React from "react"
import {Link} from "react-router-dom"
import Button from "react-bootstrap/Button"
import {useNavigate} from 'react-router-dom';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY);

export default function Join() {
	const navigate = useNavigate();

	async function signOutUser() {
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div className="join">
			<div className = "join-div">
			<img src="images/join-logo.png" alt="logo" className="join-image"/>
			</div>
	        <div className="center join-div">
		        <p className="join-text">Enter Game Room Pin:</p>
	            <input type="text" placeholder="Game Pin"/>
	            <button>Enter</button>
	            <p className="join-or">OR</p>
	            <button>Create Room</button>
				<button className="join-logout" onClick={() => signOutUser()}> Logout </button>
            </div>
        </div>
    )
}