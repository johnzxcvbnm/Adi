# class String
#   def zumpledeboop
#     self.upcase.reverse
#   end
# end

# p "Hello World".zumpledeboop

class World
  # attr_reader :shape
  # attr_writer :shape
  attr_accessor :shape, :name
  attr_reader :people

  def initialize name, shape="oblate spheroid"
    @shape = shape
    @name = name
    @people = []
  end

  # def name
  #   @name
  # # end
#
  # def people
  #   @people
  # end
  #
  # def name=value
  #   @name = value
  # end
  # def populate
  #   @people << { name: "Shrimpy McShrimpsky", age: 20 }
  # end

  def populate name, age
    @people << { name: name, age: age }
  end

end

# world1 = World.new
# world1.name = "Tatooine"
# p world1.name
# p world1.class

# world1.name = "Tatooine"

# p world1.people
# world1.populate
# world1.populate
# world1.populate
#
# p world1.people

# world1 = World.new "Panthelassa"
# world2 = World.new "Tatooine", "sphere"
# world3 = World.new "Nothing But Shrimp", "dome"
# world4 = World.new "San Junipero", "cylinder"
#
# p world1.name
# p world2.name
# p world3.name
# p world4.name
#
# world3.populate "Eleanor ShellStrop", 36
# world3.populate "Chidi Anagonye", 32
# world3.populate "Tahani Al-Jamil", 34
# world3.populate "Jianyu", 31
#
# p world3.people
#
# world3.name = 'The Good Place'
# p world3.name

planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)

milky_way = []

planets.each do |planet|
  world = World.new planet, "Oblique Spheroid"
  milky_way << world
end

# p milky_way
# for i in milky_way
#   p i
# end


class Person
  attr_reader :name, :age, :favorite_color, :height

  def initialize(name:, age:, favorite_color:, height:)
    @name = name
    @age = age
    @favorite_color = favorite_color
    @heiht = height
  end
end

me = Person.new(name: "David", age: 35, favorite_color: :blue, height: 68)
# p me.favorite_color

class Animal
  attr_reader :age

  def initialize
    @age = 0
  end

  def get_older
    @age = @age += 1
  end
end

class Cat < Animal
  def sound
    "meow"
  end
end

class Dog < Animal
  def sound
    "Boof"
  end
end

jade = Cat.new
p jade.class
p Cat.superclass
p jade.age
jade.get_older
p jade.sound
p jade.age
