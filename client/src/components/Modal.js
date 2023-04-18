import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card.js"
import "../modal.css"
import { useState, useCallback } from "react";

export default function Modal({ closeModal, cards, pickCard, cardsPicked, setPlayer, player, setPlayers, players, socket, code }) {
    // const [chosenCards, setChosenCards] = useState([]);
    // const [pairs, setPairs] = useState([]);
    const [prevCard, setPrevCard] = useState(null);
    const handleClick = (card) => {
        pickCard(card);
        const index = cards.findIndex(c => c === card);
        cards.splice(index, 1);
        setPlayer((prevPlayer) => ({
            ...prevPlayer,
            cardsPicked: [...cardsPicked, card],
            currentHand: cards
        }));
        socket.emit('picked-card', code, player.name, card, cards);
        // socket.on('updated-card', (users) => {
        //     setPlayers(users);
        // });
        // , () => {
        //     console.log(player);
        //     socket.emit('picked-card', code, player);
        //   });
        // // Add clicked card to pickedCards array
        // setChosenCards([...chosenCards, card]);
        // // Check if the previously clicked card matches the current card
        // if (prevCard !== null && prevCard.id !== card.id && prevCard.pairWith.includes(card.id)) {
        //     if (prevCard.image === card.image) {
        //         // Cards match, add to matchedCards array
        //         setPairs([...pairs, prevCard, card]);
        //         setPrevCard(null);
        //     } else {
        //         // Cards don't match, reset pickedCards array
        //         setTimeout(() => {
        //             setChosenCards([]);
        //             setPrevCard(null);
        //         }, 1000);
        //     }
        // } else if (prevCard ) {
        //     setPrevCard(card);
        // }
    };

    const handCards = cards.map((card) => {
        switch(card) {
            case "SSE":
                return <img src="images/card-soy-sauce-egg.png" onClick={() => handleClick(card)} className="game--card" />;
            case "BC":
                return <img src="images/card-bok-choy.png" onClick={() => handleClick(card)} className="game--card" />;
            case "Gy":
                return <img src="images/card-gyoza.png" onClick={() => handleClick(card)} className="game--card"/>;
            case "Na-1":
                return <img src="images/card-narutomaki-1.png" onClick={() => handleClick(card)} className="game--card" />;
            case "Na-2":
                return <img src="images/card-narutomaki-2.png" onClick={() => handleClick(card)} className="game--card" />;
            case "Na-3":
                return <img src="images/card-narutomaki-3.png" onClick={() => handleClick(card)} className="game--card" />;
            case "Ton":
                return <img src="images/card-tonkatsu-ramen.png" onClick={() => handleClick(card)} className="game--card" />;
            case "Tof":
                return <img src="images/card-tofu-ramen.png" onClick={() => handleClick(card)} className="game--card"/>;
            case "Spi":
                return <img src="images/card-spicy-ramen.png" onClick={() => handleClick(card)} className="game--card"/>;
            case "Moc":
                return <img src="images/card-mochi.png" onClick={() => handleClick(card)} className="game--card"/>;
            case "Nor":
                return <img src="images/card-nori.png" onClick={() => handleClick(card)} className="game--card"/>;
            case "Cho":
                return <img src="images/card-chopsticks.png" onClick={() => handleClick(card)} className="game--card"/>;
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
                    <button className = "modal-button button--link" onClick={() => closeModal(false)}>Exit</button>
                </div>
            </div>
        </div>
    )
}