const suits = ["hearts", "diamonds", "clubs", "spades"];

class Deck {

	newDeck() {
		// iterate over suits
		// iterate over cards
		// for each suit push card in Deck
		// return deck
		let deck = [];
		for (var i = 0; i < suits.length; i++) {
			for (var j = 2; j < 15; j++) {
				if (j < 11) {
					deck.push(j + "of " + suits[i]);
				} else if (j == 11) {
					deck.push("Jack of " + suits[i]);
				} else if (j == 12) {
					deck.push("Queen of " + suits[i]);
				} else if (j == 13) {
					deck.push("Kind of " + suits[i]);
				} else { 
					deck.push("Ace of " + suits[i]);
				}
			}
		}
		return deck;
	}

	shuffle() {
		// iterate over deck
		// swap cards with a randomly generated val btwn 0-51
		let deck = this.newDeck();
		for (var i = 0; i < deck.length; i++) {
			let random = this.getRandomIntInclusive(1, 51);
			deck[i], deck[random] = deck[random], deck[i];
		}
		return deck;
	}

	// Returns a random integer between min (included) and max (included)
	// Using Math.round() will give you a non-uniform distribution!
	getRandomIntInclusive(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

}

Deck;
