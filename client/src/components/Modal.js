import { Button } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card.js"
import "../modal.css"

export default function Modal({ closeModal, cards }) {
    const pickedCards = cards.map((card) => {
        switch(card) {
            case "SSE":
                return <img src="images/card-soy-sauce-egg.jpg" className="game--card" />;
            case "BC":
                return <img src="images/card-bok-choy.jpg" className="game--card" />;
            case "Gy":
                return <img src="images/card-gyoza.jpg" className="game--card"/>;
            case "Na-1":
                return <img src="images/card-narutomaki-1.jpg" className="game--card" />;
            case "Na-2":
                return <img src="images/card-narutomaki-2.jpg" className="game--card" />;
            case "Na-3":
                return <img src="images/card-narutomaki-3.jpg" className="game--card" />;
            case "Ton":
                return <img src="images/card-tonkatsu-ramen.jpg" className="game--card" />;
            case "Tof":
                return <img src="images/card-tofu-ramen.jpg" className="game--card"/>;
            case "Spi":
                return <img src="images/card-spicy-ramen.jpg" className="game--card"/>;
            case "Moc":
                return <img src="images/card-mochi.jpg" className="game--card"/>;
            case "Nor":
                return <img src="images/card-nori.jpg" className="game--card"/>;
            case "Cho":
                return <img src="images/card-chopsticks.jpg" className="game--card"/>;
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
                    {pickedCards}
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
                <div className="footer">
                    <button onClick={() => closeModal(false)}>Exit</button>
                </div>
            </div>
        </div>
    )
}