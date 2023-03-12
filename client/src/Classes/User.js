//make common deck for all users 
import {Deck} from './Deck.js'
class User {
    static d = new Deck();
    constructor(userID, cardsToPick, hand, numPuddings, leftUser, rightUser) {
        this.userID = userID;
        this.cardsToPick = cardsToPick;
        this.hand = User.d.dealPlayerHand(hand);
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