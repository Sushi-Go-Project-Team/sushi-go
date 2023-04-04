//Have a count for how many cards there is in total
class Deck {
    deck = []
    constructor() {
        //Hard code cards in deck for now
        this.deck = [Card("Soy Sauce Eggs", 4), Card("Soy Sauce Eggs", 8), Card("Soy Sauce Eggs", 14), Card("Bok Choy"), Card("Tofu Ramen", 3), Card("Tonkatsu Ramen", 2), Card("Spicy Ramen", 1), Card("Spicy Ramen", 3, Card("Spicy Ramen", 7), Card("Spicy Ramen", 10))]
    }
    
    // set addCard(Card()) {
    //     deck.append(Card())
    // }
    get getDeck() {
        return deck
    }

    dealPlayerHand(userHand) {
        //at start of game deal 7 random cards to each User
        for (let i = 0; i < 7; i++) {
            let randIdx = Math.floor(Math.random() * deck.length)
            let randC = deck.remove(randIdx)
            userHand.append(randC)
        }
    } 
}

export default {Deck};
//Holds all exported functons/attributes

