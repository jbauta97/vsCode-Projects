const cfg = {
    decks: 1
};

console.log(shuffle(generateCardList()));


// Creates an array of all the cards that will be in play for a shoe
function generateCardList(){
    var cardList = [];
    for (let i = 0; i < cfg.decks; i++){
        for (let j = 2; j <= 10; j++){
            cardList.push(card(j, 'Clubs'));
            cardList.push(card(j, 'Spades'));
            cardList.push(card(j, 'Hearts'));
            cardList.push(card(j, 'Diamonds'));
        }

            cardList.push(card('Jack', 'Clubs'));
            cardList.push(card('Jack', 'Spades'));
            cardList.push(card('Jack', 'Hearts'));
            cardList.push(card('Jack', 'Diamonds'));
            cardList.push(card('Queen', 'Clubs'));
            cardList.push(card('Queen', 'Spades'));
            cardList.push(card('Queen', 'Hearts'));
            cardList.push(card('Queen', 'Diamonds'));
            cardList.push(card('King', 'Clubs'));
            cardList.push(card('King', 'Spades'));
            cardList.push(card('King', 'Hearts'));
            cardList.push(card('King', 'Diamonds'));
            cardList.push(card('Ace', 'Clubs'));
            cardList.push(card('Ace', 'Spades'));
            cardList.push(card('Ace', 'Hearts'));
            cardList.push(card('Ace', 'Diamonds'));
    }
    return cardList;
}

// Randomly inserts all cards from the list into a new shoe
function shuffle(cardList){
    var shoe = [];
    const totalLength = cardList.length;
    for (let i = 0; i < totalLength; i++){
        console.log(cardList);
        let removePos = randomInteger(0, cardList.length);
        shoe.push(cardList.splice(removePos, 1)[0]);
    }
    return shoe;
}

function card(v, s){
    return {val: v, suit: s};
}

// Hand value is passed to determine value of aces
function valFromString(handVal, cardStr){
    if (cardStr == 'Ace'){
        return handVal > 10 ? 1:11;
    }
    return 10;
}

// min and max are INCLUSIVE
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

