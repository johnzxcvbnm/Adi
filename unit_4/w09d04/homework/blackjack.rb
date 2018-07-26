class Card
  attr_reader :value, :face, :suit
  def initialize(value, face, suit)
    @value = value
    @face = face
    @suit = suit
  end
end

class Deck
  attr_reader :deck
  def initialize()
    @deck = []
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
  end #End of Deck Initializer

  def print_all
    for i in @deck do
      p i
    end
  end

end #End of Deck Class

my_deck = Deck.new

my_deck.print_all
# deck = []

# for suit in ["Hearts", "Diamonds", "Clubs", "Spades"] do
#   for i in (1..13) do
#     if(i == 1)
#       deck.push(Card.new(11, "Ace", suit))
#     elsif(i == 11)
#       deck.push(Card.new(10, "Jack", suit))
#     elsif(i == 12)
#       deck.push(Card.new(10, "Queen", suit))
#     elsif(i == 13)
#       deck.push(Card.new(10, "King", suit))
#     else
#       deck.push(Card.new(i, i, suit))
#     end
#   end
# end

# p deck[0]
# for i in deck do
#   p i
# end
