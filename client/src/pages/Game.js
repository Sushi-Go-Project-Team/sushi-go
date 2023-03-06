import React from "react"
import Card from "../components/Card.js"

export default function Game() {
    return (
            <div className="GamePage">
                <h1>Game</h1>
                <div className="Card--container">
                    <div className="Card--setOne">
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <div className="Card--deck">
                            <Card name="Deck 1" image="images/GameCards.png" value="14"/>   
                        </div>
                    </div>
                    <div className="Card--setTwo">
                        <div className="Card--deck">
                            <Card name="Deck 1" image="images/GameCards.png" value="14"/>   
                        </div>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card id="deck2" className="Card--image" title="Deck 2" image="images/GameCards.png" value="14"/>
                    </div>
                    <div className="Card--setThree">
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <div className="Card--deck">
                            <Card name="Deck 1" image="images/GameCards.png" value="14"/>   
                        </div>                </div>
                    <div className="Card--setFour">
                        <div className="Card--deck">
                            <Card name="Deck 1" image="images/GameCards.png" value="14"/>   
                        </div>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card className="Card--image" name="Soy Sauce Eggs" image="images/GameCards.png" value="14"/>
                        <Card id="deck4" className="Card--image" name="Deck 4" image="images/GameCards.png" value="14"/>
                    </div>
                </div>
            </div>
    )
}