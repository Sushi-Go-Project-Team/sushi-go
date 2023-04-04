//Have a count for how many cards there is in total
import Card from "../components/Card.js"
class Deck {
    static deck = []
    constructor() {
        //Hard code cards in deck for now
        this.deck = [new Card("Soy Sauce Eggs", 4), new Card("Soy Sauce Eggs", 8), new Card("Soy Sauce Eggs", 14), new Card("Bok Choy", 4), new Card("Tofu Ramen", 3), new Card("Tonkatsu Ramen", 2), new Card("Spicy Ramen", 1), new Card("Spicy Ramen", 3), new Card("Spicy Ramen", 7), new Card("Spicy Ramen", 10)]
    }
    
    // set addCard(Card()) {
    //     deck.append(Card())
    // }
    get getDeck() {
        return this.deck
    }

    dealPlayerHand() {
        //at start of game deal 7 random cards to each User
        let userHand = []
        for (let i = 0; i < 7; i++) {
            let randIdx = Math.floor(Math.random() * this.deck.length)
            let randC = this.deck.splice(randIdx, 1)
            userHand.push(randC[0])
        }
        return userHand
    } 
}

export default Deck;
//Holds all exported functons/attributes

