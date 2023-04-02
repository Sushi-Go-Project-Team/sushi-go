import React from "react"
import {Link} from "react-router-dom"
import Card from "../components/Card.js"
import Button from "react-bootstrap/Button"

export default function Game(props) {
    return (
        <div className="GamePage">
            <div className="Card--container">
                <div className="Card--setOne">
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div>
                </div>
                <div className="Card--setTwo">
                    <div className="Card--deck">
                        <Card name="Deck 1" image="images/card-back.png" value="14"/>   
                    </div>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card className="Card--image" name="Soy Sauce Eggs" image="images/card-back.png" value="14"/>
                    <Card id="deck2" className="Card--image" title="Deck 2" image="images/card-back.png" value="14"/>
                </div>
                <div className="Card--setThree">
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
                </div>
            </div>
            <Button><Link to="/results" className = "button--link">End Game!</Link></Button>
        </div>
    )
}