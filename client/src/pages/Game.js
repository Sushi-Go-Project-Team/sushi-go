import React from "react"
import {Link} from "react-router-dom"
import Card from "../components/Card.js"
import Modal from "../components/Modal.js"
import { useState } from "react";
import Button from "react-bootstrap/Button"

export default function Game({socket, user, users, endGame}) {
    const [openModal, setOpenModal] = useState(false) // don't want modal to be open initially
    
    let otherHand;
    let otherName;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name !== user.name) {
            otherHand = users[i].currentHand;
            otherName = users[i].name;
            break;
        }
    }
    const pickedCards = user.currentHand.map((card) => {
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

    const otherCards = otherHand.map((card) => {
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
            <div className="GamePage">
                <h1>Game</h1>
                <button className="openModalBtn" onClick={() => {
                    setOpenModal(true)
                    }}
                    >
                        Open
                </button> 
                {openModal && <Modal closeModal={setOpenModal} cards={user.currentHand}/>}
                <div className="Card--container">
                <div className="Card--setOne">
                    <h2>{user.name}</h2>
                    {pickedCards}
                    {/* <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div> */}
                </div>
                <div className="Card--setTwo">
                    <h2>{otherName}</h2>
                    {otherCards}
                    {/* <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card id="deck2" className="Card--image" title="Deck 2" image="images/card-back.png" value="14"/> */}
                </div>
                {/* <div className="Card--setThree">
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div>                </div>
                <div className="Card--setFour">
                    <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card id="deck4" className="Card--image" name="Deck 4" image="images/card-back.png" value="14"/>
                </div> */}
            </div>
            <button onClick={endGame}><Link to="/results" className = "button--link">End Game!</Link></button>
            </div>
    )
}