my_birds = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']

my_colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Darker Blue"]

class Muppet
  attr_reader :name, :color
  def initialize name, color
    @name = name
    @color = color
    p "This muppet is called #{name}!"
  end

  def honk
    p "#{@name} is making a honking sound!"
  end

  def flail
    p "#{@name} is flailing its arms"
  end
end

joe_bob_dingles = Muppet.new("Joe Bob Dingles", my_colors.sample)

# p joe_bob_dingles
# joe_bob_dingles.honk
# joe_bob_dingles.flail

class Bird
  attr_reader :species, :name, :adjective
  def initialize(adjective, name, species)
    p "#{name}, is a(n) #{adjective} bird!"
    @species = species
    @name = name
    @adjective = adjective
  end

  def hungry
    p "#{name} wants some regurgitated worms!"
  end

  def fly
    p "Flap! #{name} is taking flight!"
  end
end

son_gun_bird = Bird.new("Son Gun", "David", my_birds.sample)

# p son_gun_bird
# son_gun_bird.hungry
# son_gun_bird.fly

class Dessert
  attr_reader :name, :sugar_content
  def initialize(name, sugar_content=100)
    @name = name
    @sugar_content = sugar_content
  end

  def eat
    p "Yum! This #{name} is sooooo delicious!"
  end
end

class Pie < Dessert
end

class DeepFriedDessert < Dessert
  def eat
    puts "Yum!  This #{name} is sooo...ack!  ugh!  *heart-attack*"
  end
end

donut = DeepFriedDessert.new("Donut")
# donut.eat

class IceCream < Dessert
  attr_reader :name, :sugar_content, :toppings
  def initialize(name, sugar_content=100)
    @toppings = "Plain"
    super
  end
end

ice = IceCream.new("Choc Ice")
p ice
