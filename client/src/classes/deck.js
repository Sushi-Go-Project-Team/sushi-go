//Have a count for how many cards there is in total
class Deck {
    static deck = [];

    constructor() {
        this.deck = ["SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE", "SSE",
        "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC", "BC",
        "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy", "Gy",
        "Na-1", "Na-1", "Na-1", "Na-1", "Na-1", "Na-1",
        "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2", "Na-2",
        "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", "Na-3", 
        "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", "Ton", 
        "Tof", "Tof", "Tof", "Tof", "Tof", 
        "Spi", "Spi", "Spi", "Spi", "Spi",
        "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc", "Moc",
        "Nor", "Nor", "Nor", "Nor", "Nor", "Nor", 
        "Cho", "Cho", "Cho", "Cho"];
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

