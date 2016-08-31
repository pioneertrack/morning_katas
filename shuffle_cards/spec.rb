require './deck'

describe Deck do 

  subject(:deck) { Deck.new }

  it 'should initialize with an array of 52 cards' do
    expect(subject.cards.class).to eq(Array)
    expect(subject.cards.length).to eq(52)
  end

  it 'should start at card 2 for each new suit by increments of 13' do
    expect(subject.cards[0]).to eq("2 of Clubs")
    expect(subject.cards[13]).to eq("2 of Diamonds")
    expect(subject.cards[26]).to eq("2 of Hearts")
    expect(subject.cards[39]).to eq("2 of Spades")
  end

  it 'should end at Ace card for each suit by increments of 13 after the first suit' do
    expect(subject.cards[12]).to eq("Ace of Clubs")
    expect(subject.cards[25]).to eq("Ace of Diamonds")
    expect(subject.cards[38]).to eq("Ace of Hearts")
    expect(subject.cards[51]).to eq("Ace of Spades")
  end

  it 'should have swapped some cards after shuffle' do
    original_deck = subject.cards.dup
    subject.shuffle
    expect(original_deck == subject.cards).to be(false)
  end

  it 'should have the same number of cards after shuffle' do
    expect(subject.shuffle.length).to eq(52)
  end
end