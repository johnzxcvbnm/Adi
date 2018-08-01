def has_vowel? word
  # word.chars.each do |char|
  #   if char == 'a' || char == 'e'|| char == 'i' || char == 'o' || char == 'u'
  #     return true
  #   end
  # end
  # false

  (word.downcase.count "aeiou") > 0
end

# p has_vowel? "Hello, world"

def hello number
  # for i in 0...number do
  #   p "hello"
  # end

  if number > 0
    p "hello"
    hello (number - 1)
  end
end

# hello 3

def personal_greeting name
  p "Why hello there #{name}, how are you today?"
end

# personal_greeting "John"

students = %w[Mike Carol Alice Greg Marcia Peter Jan Bobby Cindy]
def roll_call students
  # students.each do |name|
  #   p "Welcome, #{name}!"
  # end

  if students.size > 0
    p "Welcome, #{students.shift}!"
    roll_call students
  end
end

# roll_call students

students2 = [
  {
    "first_name" => "Mike",
    "last_name" => "Carol"
  },
  {
    "first_name" => "Alice",
    "last_name" => "Greg"
  },
  {
    "first_name" => "Marcia",
    "last_name" => "Peter"
  },
  {
    "first_name" => "Jan",
    "last_name" => "Bobby"
  },
  {
    "first_name" => "Cindy",
    "last_name" => "Bo-Jingles"
  }
]

def hash_roll_call students
  if students.size > 0
    person = students.shift
    p "Welcome, #{person["first_name"]} #{person["last_name"]}"
    hash_roll_call students
  end
end

# hash_roll_call students2

classy_students = []

class Student
  attr_reader :first_name, :last_name

  def initialize (first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def print_name
    p "My name is #{@first_name} #{@last_name}"
  end
end

for i in 0...5 do
  classy_students.push(Student.new(students.sample, students.sample))
end

# for i in classy_students do
#   i.print_name
# end

def class_roll_call students
  if students.size > 0
    p "Welcome, #{students.shift}!"
    roll_call students
  end
end

# class_roll_call students

def tri_of_hash num
  if num > 0
    tri_of_hash (num - 1)
    for i in 0...num do
      print "#"
    end
    print "\n"
  end
end

# tri_of_hash 7

def up_tri_of_hash num
  if num > 0
    for i in 0...num do
      print "#"
    end
    print "\n"
    up_tri_of_hash (num - 1)
  end
end

# up_tri_of_hash 7


def greatestRow array
  large = 0
  for i in 0...array.size do
    if large < array[i].reduce(:+)
      large = array[i].reduce(:+)
    end
  end
  return large
end

def greatestCol array
  greatestRow array.transpose
end

def greatestDia array
  sum1 = 0
  sum2 = 0
  for i in 0...array.size do
    sum1 += array[i][i]
    sum2 += array[array.size - 1 - i][array.size - 1 - i]
  end
  if (sum1 > sum2)
    return sum1
  end
  sum2
end

def greatestSum array
  my_sums = [(greatestRow array), (greatestCol array), (greatestDia array)]
  my_sums.max
end

arr = [ [10, 20, 30],
        [40, 50, 60],
        [70, -80, 90] ];

p greatestSum arr

bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

p greatestSum bigArray
