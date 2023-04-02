import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card.js"
import "../modal.css"

export default function Modal({ closeModal }) {
    return (
        <div className="modalBackground"> 
            <div className="modalContainer">
                <div className="title"></div>
                    <h1> Pick one card</h1>
                <div className="body">
                    <button className="cards"> 
                        <img src="./images/GameCards.png" alt="my image" />                        
                    </button>
                    <button className="cards"> 
                        <img src="./images/GameCards.png" alt="my image" />                        
                    </button>
                    <button className="cards"> 
                        <img src="./images/GameCards.png" alt="my image" />                        
                    </button>
                    <button className="cards"> 
                        <img src="./images/GameCards.png" alt="my image" />                        
                    </button>
                    <button className="cards"> 
                        <img src="./images/GameCards.png" alt="my image" />                        
                    </button>
                </div>
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Exit</button>
                </div>
            </div>
        </div>
    )
}