# Creates a standard playing Card
class Card
  attr_reader :value, :face, :suit
  def initialize(value, face, suit)
    @value = value
    @face = face
    @suit = suit
  end # End of Card Class

  def print_card
    puts "#{face} of #{suit}"
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
      puts "Value: #{i.value}  Face: #{i.face}  Suit: #{i.suit}"
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

  def cheat_draw(num)
    while(@deck[0].value != num)
      self.draw
    end
  end

end #End of Deck Class

class Player
  attr_reader :name, :hidden
  attr_accessor :hand, :money

  def initialize(name="John")
    @name = name
    @hand = []
    @money = 100
    @hidden = false
  end

  def hidden_true
    hidden = true
  end

  def hidden_false
    hidden = false
  end

  def draw(card)
    hand.push(card)
  end

  def empty_hand
    hand = []
  end

  def more_money(num)
    @money = @money += num
  end


  def show_hand
    start = 0
    puts "#{name}'s Hand:"
    if(hidden)
      start = 1
      puts "Face Down Card"
    end
    for i in start...hand.size do
      hand[i].print_card
    end
  end

  def hand_total
    sum = 0
    for i in hand do
      sum += i.value
    end
    sum
  end
end # End of Player Class

# Create a new Deck
my_deck = Deck.new

# Suffle the Deck
my_deck.shuffle

# Test Print
# my_deck.print_all

##### Set up the Variables ####
dealer_names = ["Joe Bob Dingles", "Joe Bob Dingles", "Devil Dealer", "Jerimey Jones", "Thor"]

# print "Enter your name: "
# player_name = gets.chomp
player_name = "John"

player = Player.new(player_name)
dealer = Player.new(dealer_names.sample)

win_condition = 200
lose_condition = 0
bet = 10


# loop do
#   input = gets.chomp

  player.empty_hand
  player.draw(my_deck.draw)
  player.draw(my_deck.draw)
  dealer.empty_hand
  dealer.draw(my_deck.draw)
  dealer.draw(my_deck.draw)

  puts " "
  player.show_hand
  puts "Hand Total: #{player.hand_total}"
  puts " "
  dealer.show_hand
  puts "Hand Total: #{dealer.hand_total}"
  puts " "

  if(player.hand_total > dealer.hand_total)
    puts "You win!"
    player.more_money(bet)
    puts "Player Money: #{player.money}"
    puts " "
  elsif(player.hand_total < dealer.hand_total)
    puts "You lose!"
    player.more_money(-1 * bet)
    puts "Player Money: #{player.money}"
    puts " "
  else
    puts "It's a tie!"
    puts "Player Money: #{player.money}"
    puts " "
  end
# end
