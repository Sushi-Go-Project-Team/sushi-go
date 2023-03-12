
const {
    deck,
    dealPlayerHand
    }    = require("./Deck.js");

//make common deck for all users 
class User {
    static d = deck
    constructor(userID, cardsToPick, hand, numPuddings, leftUser, rightUser) {
        this.userID = userID;
        this.cardsToPick = cardsToPick;
        this.hand = d.dealPlayerHand(hand);
        this.numPuddings = numPuddings;
        this.leftUser = leftUser;
        this.rightUser = rightUser;
    }
    
    get leftUser() {
        return this.leftUser
    }

    get rightUser() {
        return this.rightUser
    }
 
    get hand() {
        console.log(hand)
        return hand
    }
}