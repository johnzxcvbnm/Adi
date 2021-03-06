##Hello World##
#1. Print "Hello World" to the console
p "Hello World"

# 2. Interpolate the `adjective` variable into the Hello World string using `#{}`
adjective = "Big Bad"
p "Hello #{adjective} World"

# 3. Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to uppercased letters.
myVar = "Hello World"
p myVar.upcase

## Arrays
p "------Arrays--------"

### Nums Array
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1. Use `.uniq` to print the array with all duplicate entries removed
p nums.uniq

# 2. Next, use `.push` and `.pop` , `.shift` `.unshift` and `.length` on the array as you would with javaScript (if you need to add a number, add 5)
nums.pop
nums.push(5)
nums.shift
nums.unshift(1337)
p "nums length is #{nums.length}"
p nums

# 3. Use `.include?` to check if the array contains the number 8
p "nums has the number 8: #{nums.include? 8}"

# 4. Use `.find_all` to find all the numbers greater than 10
p nums.find_all { |i| i > 10 }

# 5. use `.count` to let you know how many numbers are greater than 4
p nums.count { |i| i > 4 }

# 6. use `.each_with_index` to print each item times its index
nums.each_with_index { |i, index| p "#{i} times #{index} is #{(i * index)}" }

# 7. `.find` the number that is divisible by 7 and 5 and is greater than 0
p nums.find { |i| (i % 7 == 0) && (i % 5 == 0) && (i > 0)}

# 8. `.find_index` of the number that is divisible by 5 and 7 and is greater than 0
p "Index is #{nums.find_index { |i| (i % 7 == 0) && (i % 5 == 0) && (i > 0)}}"

# 9. return the `.first` 3 numbers
p "First 3: #{nums.first(3)}"

# 10. return the `.last` 5 numbers
p "Last 5: #{nums.last(5)}"

# 11. `.group_by` the modulo of 3 ( `% 3` )
p nums.group_by { |i| i % 3 }

# 12. use `minmax` to return the smallest and largest number
p nums.minmax

### Enumerables ###
p "----------Enumerables-----------"

# 1. use `.all?` to check if all the numbers are greater than 0?
p "All of nums > 0: #{ nums.all? { |i| i > 0} }"

# 2. use `any?` to check if there are any numbers that are divisible by 8
p "Any divisible by 8: #{ nums.any? { |i| i % 8 == 0 } }"

# 3. use `.reject` to return all the numbers that are NOT divisible by 3
p nums.reject { |i| i % 3 == 0 }

# 4. use `.select` to return all the numbers divisible by 5
p nums.select { |i| i % 5 == 0}

### Color Array ###
p "-------- Color Array --------"

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# 1. Print out a random color.
p colors[0]

# 2. Print out the `colors` array in reverse order.
p colors.reverse

# 3. Print out all of the colors in the array with all capital letters.
p colors.map { |i| i.upcase }

### Methods ###
p "-------- Methods --------"

# Write a method that finds the area of a rectangle given values for width and height
# * Remember, the keyword 'return' is implied and can be omitted

def some_area(width, height)
  width * height
end

p some_area(10, 10)

# Write a method that will loop over the nums array and print each number multiplied by 5
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five arr
  for i in arr do
    p "5 times #{i} is #{i * 5}"
  end
end

multiply_each_by_five(nums)

### Methods with a Hash ###

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

# Write a method that will take in any hash and return the price of the item.

def what_price arg
  return arg[:price]
end
p "-------- Hash --------"
p "The price of a table is #{what_price(table)}"

# Write a method that will take in two hashes and will return the sum of the prices for the items in the hashes.
def print_item_sums(arg1, arg2)
  return (arg1[:price] + arg2[:price])
end
p "The price of the table plus the lamp is #{print_item_sums(table, lamp)}"

### EULER PROBLEM 1 ###
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

def euler limit
  sum = 0
  for i in 0...limit do
    if (i % 3 == 0) || (i % 5 == 0)
      sum += i
    end
  end
  sum
end

my_num = 1000
p "Euler sum of #{my_num} is #{euler(my_num)}"

### PRIMES ###
# Write a method called check_prime? that will test whether a number is Prime. The method will return true if Prime, false if not.
#
# Write another method called get_primes that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with get_primes 100, it will print all the Prime numbers up to and including 100.
#
# This method can call on the previous check_prime? method.
#
# A Prime number is a number that is not evenly divisible by another number except 1 and itself.
#
# To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
require "Prime"

def check_prime(arg)
  Prime.prime?(arg)
end

def get_primes(limit)
  my_arr = []
  for i in 0..limit do
    if check_prime(i)
      my_arr.push(i)
    end
  end
  my_arr
end

my_prime = 7
p "My number is #{my_prime} and is prime: #{check_prime(my_prime)}"

my_prime_list = 100
p "My prime numbers upto #{my_prime_list} is #{get_primes(my_prime_list)}"

### PANDIGITAL NUMBERS ###
# A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.
#
# The number 15234 is 1-to-n pandigital.
#
# The number 333 is not 1-to-n pandigital.
#
# The number 0 is not 1-to-n pandigital.
#
# The number 10 is not 1-to-n pandigital.
#
# The number 987654321 is 1-to-n pandigital.
#
# Write a method that checks if a number is 1-to-n pandigital.

def pandigital(num)
  my_array = num.to_s.chars.map(&:to_i).sort
  for i in 0...my_array.size do
    if my_array[i] != (i + 1)
      return false
    end
  end
  true
end

my_test = 15234
my_test2 = 333
my_test3 = 0
my_test4 = 10
my_test5 = 987654321
p "#{my_test} is pandigital: #{pandigital(my_test)}"
p "#{my_test2} is pandigital: #{pandigital(my_test2)}"
p "#{my_test3} is pandigital: #{pandigital(my_test3)}"
p "#{my_test4} is pandigital: #{pandigital(my_test4)}"
p "#{my_test5} is pandigital: #{pandigital(my_test5)}"

### WORD FREQUENCY ###
# Find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

def word_frequency(sen)
  my_array = sen.split(' ')
  max = 0
  my_word = ""
  for i in my_array do
    if my_array.count(i) > max
      max = my_array.count(i)
      my_word = i
    end
  end
  my_word
end

long_string = "I love really love lamp lamp love what is going on what a zzt"
long_string2 = "Find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result."
p word_frequency(long_string2)
