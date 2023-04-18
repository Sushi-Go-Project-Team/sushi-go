import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card.js"
import "../modal.css"
import { useState, useCallback } from "react";

export default function Modal({ closeModal, cards, pickCard, cardsPicked, setPlayer, player, setPlayers, players, socket, code, cardClick }) {
    // const [chosenCards, setChosenCards] = useState([]);
    // const [pairs, setPairs] = useState([]);
    const [prevCard, setPrevCard] = useState(null);
    const [hand, setHand] = useState(cards);

    function modalExit () {
        closeModal(false)
        socket.emit('ready', code, player);
        socket.on('ready', (users) => {
            setPlayers(users);
            console.log(users);
            if (users[0].name == player.name) {
                setPlayer(users[0]);
            } else {
                setPlayer(users[1]);
            }
            console.log(player.currentHand);
        })
    }

    const handCards = player.currentHand.map((card) => {
        switch(card) {
            case "SSE":
                return <img src="images/card-soy-sauce-egg.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "BC":
                return <img src="images/card-bok-choy.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "Gy":
                return <img src="images/card-gyoza.png" onClick={()=>cardClick(card)} className="game--card"/>;
            case "Na-1":
                return <img src="images/card-narutomaki-1.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "Na-2":
                return <img src="images/card-narutomaki-2.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "Na-3":
                return <img src="images/card-narutomaki-3.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "Ton":
                return <img src="images/card-tonkatsu-ramen.png" onClick={()=>cardClick(card)} className="game--card" />;
            case "Tof":
                return <img src="images/card-tofu-ramen.png" onClick={()=>cardClick(card)} className="game--card"/>;
            case "Spi":
                return <img src="images/card-spicy-ramen.png" onClick={()=>cardClick(card)} className="game--card"/>;
            case "Moc":
                return <img src="images/card-mochi.png" onClick={()=>cardClick(card)} className="game--card"/>;
            case "Nor":
                return <img src="images/card-nori.png" onClick={()=>cardClick(card)} className="game--card"/>;
            case "Cho":
                return <img src="images/card-chopsticks.png" onClick={()=>cardClick(card)} className="game--card"/>;
            default:
              break;
          }
    });

    return (
        <div className="modalBackground"> 
            <div className="modalContainer">
                <div className="title"></div>
                    <h1> Pick one card</h1>
                    <div className="body">
                        <div className="currentHand">
                            {handCards}
                                {/* <button className="cards"> 
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
                                </button> */}
                        </div>
                    </div>
                <div className="footer">
                    <button className = "modal-button button--link" onClick={modalExit}>Exit</button>
                </div>
            </div>
        </div>
    )
}