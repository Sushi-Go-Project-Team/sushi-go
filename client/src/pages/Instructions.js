import React from "react"

export default function Instructions() {
    return (
        <div className="instructions">
            <h1 className="instructions-heading">How to Play:</h1>
            {/* types of cards and flip them around to see point value and type and all8*/}
            <p>Displayed below are brief descriptions of the cards you'll use in this game. Check them out and get on with the game!</p>
            <p className="SoySauce">Soy Sauce Eggs</p> 
            <p className="soyDesc">A set of 2 of these cards scores 5 points! Just a single one is worthless.</p>
            
            <p className="BokChoy">Bok Choy</p>
            <p className="bokDesc"> A set of 3 bok choy cards scores 10 points. Having less than that is worthless</p>
            
            <p className="Gyoza">Gyoza</p>
            <p className="gyozaDesc">The more gyoza cards you have, the more you'll score</p>
            {/* insert table here*/}
            
            <p className="Tofu">Tofu Ramen</p>
            <p className="tofuDesc">3 points, but if on top of of a nori card, scores 9 points</p>
            
            <p className="Tonkatsu">Tonkatsu Ramen</p> 
            <p className="tonkatsuDesc">2 points but if on top of a nori card, scores 6 points</p>
            
            <p className="SpicyRamen">Spicy Ramen</p>
            <p className="spicyDesc">1 point but if on top of a nori card, scores 3 points</p>
            
            <p className="Nori">Nori</p>
            <p className="NoriDesc">Nori card with no ramen card on top scores 0 points</p>
            
            <p className="Chopsticks">Chopsticks</p>
            <p className="chopDesc">Scores 0 points but can be used to take 2 ramen cards in a future turn</p>
            
            <p className="Maki">Maki roll cards</p>
            <p className="makiDesc">The player that collects most maki roll icons (found at the top of the card) at the end of the round scores 6 points. The player in second place will get 3 points. If multiple people share first or second place, the points will be split between them evenly.</p>
            
            <p className="Mochi">Mochi</p>
            <p className="mochiDesc">The player with the most mochi cards at the end of the game scores 6 points and the player with the least mochi cards will lose 6 points. If multiple people tie for first or last place, the points gained or lost will be split evenly among them. </p>

        </div>
    )
}