
#initialize a deck of cards and print out
#shuffle deck

class Deck
  
  attr_reader :suits, :cards, :length

  def initialize
    @suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    @cards = build
    @length = 52
  end

  def shuffle
    # iterate over each card and swap it with a randomly selected card
    # each card has the same probability of landing in any given spot (1/52)
    cards.each_with_index do |card, current_index|
      new_index = random
      cards[current_index], cards[new_index] = cards[new_index], cards[current_index]
    end
    cards
  end

  private

  def random
    rand(0...length)
  end

  def build
    new_deck = []
    suits.each do |suit|
      for card in (2..14)
        case card
        when 11
          new_deck << "Jack of #{suit}"
        when 12
          new_deck << "Queen of #{suit}"
        when 13
          new_deck << "King of #{suit}"
        when 14
          new_deck << "Ace of #{suit}"
        else 2..10
          new_deck << "#{card} of #{suit}"
        end
      end
    end
    new_deck
  end
end

deck = Deck.new
puts deck.cards
puts deck.length
puts deck.shuffle
puts deck.length