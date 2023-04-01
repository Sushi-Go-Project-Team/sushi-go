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
        <div>
	        <div class="center join">
		        <h2>Join Game</h2>
	            <input type="text" placeholder="Game Pin"/>
	            <button>Enter</button>
	            <p>OR</p>
	            <button>Create New</button>
				<button class = "button" onClick={() => signOutUser()}> Logout </button>
            </div>
        </div>
    )
}