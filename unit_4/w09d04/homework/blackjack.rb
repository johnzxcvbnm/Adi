# Creates a standard playing Card
class Card
  attr_reader :value, :face, :suit
  def initialize(value, face, suit)
    @value = value
    @face = face
    @suit = suit
  end
end

class Deck
  # Let other functions read the Deck Array
  attr_reader :deck

  # Initializer creates num_decks (default of 1) standard deck(s) of cards
  def initialize(num_decks=1)
    @deck = []
    for z in 0...num_decks do
      for suit in ["Hearts", "Diamonds", "Clubs", "Spades"] do
        for i in (1..13) do
          if(i == 1)
            @deck.push(Card.new(11, "Ace", suit))
          elsif(i == 11)
            @deck.push(Card.new(10, "Jack", suit))
          elsif(i == 12)
            @deck.push(Card.new(10, "Queen", suit))
          elsif(i == 13)
            @deck.push(Card.new(10, "King", suit))
          else
            @deck.push(Card.new(i, i, suit))
          end
        end
      end
    end
  end #End of Deck Initializer

  # Function prints all the cards in the Deck Array to the console
  # Used for testing and debugging purposes
  def print_all
    for i in @deck do
      print i
      p "Value: #{i.value}  Face: #{i.face}  Suit: #{i.suit}"
    end
  end

  # Function swaps two cards in the Deck Array
  # Used in the shuffling function
  def swap(a, b)
    temp = @deck[a]
    @deck[a] = @deck[b]
    @deck[b] = temp
  end

  # Function Shuffles the deck throughly
  # Function swaps two random cards 156 times to simulate shuffling
  def shuffle
    for i in (0...(@deck.size * 3)) do
      self.swap(rand(0...@deck.size), rand(0...@deck.size))
    end
  end

  def draw
    @deck.unshift(@deck.pop)
    @deck[0]
  end

end #End of Deck Class

# Create a new Deck
my_deck = Deck.new

# Suffle the Deck
my_deck.shuffle

# Test Print
# my_deck.print_all
