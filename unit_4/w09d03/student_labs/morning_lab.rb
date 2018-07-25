# Get Name
# var getName = function () {
#   var name = prompt("what is your name?");
#   return name;
# };

def getName
  puts "What is your name?"
  name = gets
  puts name
  return name
end

# p "Get Name"
# newName = getName
# puts "Output: #{newName}"

# Reverse It
# var reverseIt = function () {
#   var string = "a man, a plan, a canal, frenemies!";
#
#   var reverse = "";
#
#   for (var i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };
#
#   alert(reverse);
# };

def reverseIt
  string = "a man, a plan, a canal, fenemies!"
  reverse = ""
  for i in 0...string.size do
    reverse += string[string.size - (i + 1) ]
  end

  puts reverse
end

# reverseIt

# Swap Em
# var swapEm = function () {
#   var a = 10;
#   var b = 30;
#   var temp;
#
#   temp = b;
#   b = a;
#   a = temp;
#
#   alert("a is now " + a + ", and b is now " + b);
# };

def swapEm
  a = 10
  b = 30
  temp = b
  b = a
  a = temp
  puts "a is now #{a}, and b is now #{b}"
end

# swapEm

# Multiply Array
# var multiplyArray = function (ary) {
#   if (ary.length == 0) { return 1; };
#
#   var total = 1;
#   // var total = ary[0];
#
#   for (var i=0; i < ary.length; i++) {
#     total = total * ary[i];
#   };
#
#   return total;
# };

def multiplyArray ary
  return 1 if ary.size == 0
  total = 1
  for i in 0...ary.size do
    total *= ary[i]
  end
  return total
end

# puts multiplyArray [1, 2, 3, 4, 5]
# puts multiplyArray []

# Fizz Buzzer
# var fizzbuzzer = function(x){
#   if( x%(3*5) == 0 ) {
#     return 'fizzbuzz'
#   } else if( x%3 == 0 ) {
#     return 'fizz'
#   } else if ( x%5 == 0 ) {
#     return 'buzz'
#   } else {
#     return 'archer'
#   }
# }
def fizzbuzzer x
  if x % (3 * 5) == 0
    return "Fizzbuzz"
  elsif x % 3 == 0
    return "Fizz"
  elsif x % 5 == 0
    return "buzz"
  else
    return "Archer"
  end
end

# puts fizzbuzzer 7

# Nth Fibonacci
# var nthFibonacciNumber = function () {
#   var fibs = [1, 1];
#   var num = prompt("which fibonacci number do you want?");
#
#   while (fibs.length < parseInt(num)) {
#     var length = fibs.length;
#     var nextFib = fibs[length - 2] + fibs[length - 1];
#     fibs.push(nextFib);
#   }
#
#   alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
# };

def nthFibonacciNumber
  fibs = [1, 1]
  puts "Which fibonacci number do you want?"
  num = gets.to_i
  while fibs.size < num do
    length = fibs.size
    nextFib = fibs[length - 2] + fibs[length - 1]
    fibs.push(nextFib)
  end
  puts "#{fibs[fibs.size - 1]} is the fibonacci number at position #{num}"
end

# nthFibonacciNumber

# Search Array
# var searchArray = function(array,value) {
#   for(var i = 0; i < array.length-1; i++) {
#     if(array[i] == value) {
#       return true;
#       break;
#     }
#   }
#   return -1;
# };

def searchArray array, value
  for i in 0...array.size do
    if array[i] == value
      return true
      break
    end
  end
  return -1
end

# puts searchArray [1, 2, 3, 4, 5, 6], 8

# Palindrome
# Write a method that checks whether or not a string is a palindrome. Here is the javascript:
#
# var isPalindrome = function(str) {
#   for(var i = 0; i < str.length/2; i++){
#     if(str[i] != str[str.length-i-1]){
#       return false;
#       break;
#     }
#     return true;
#   }
# };

def isPalindrome str
  for i in 0...(str.size / 2) do
    if str[i] != str[str.size - i - 1]
      return false
    end
  end
  return true
end

# puts isPalindrome "racecars"

# hasDupes
# Write a method that checks whether or not an array has any duplicates. Here is the javascript:
#
# var hasDupes = function(arr){
#   var obj = {};
#   for (i = 0; i < arr.length; i++) {
#     if(obj[arr[i]]) {
#       return true;
#     }
#     else {
#       obj[arr[i]] = true;
#     }
#   }
#   return false;
# };

def hasDupes arr
  obj = {}
  for i in 0...arr.size do
    if obj[arr[i]]
      return true
    else
      obj[arr[i]] = true
    end
  end
  return false
end

# puts hasDupes [1, 2, 3, 4, 5]

# Sign up for Code Wars
# Pick some Ruby code challenges, find a good one? Share it in slack!

# red_line = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]
#
# green_line = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
#
# orange_line = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]

def returnLine(red_line, green_line, orange_line, station)
  if red_line.any? { |word| word == station }
    return red_line
  elsif green_line.any? { |word| word == station }
    return green_line
  else
    return orange_line
  end
end

def getStationDifference(my_line, station1, station2)
  diff = my_line.index(station1) - my_line.index(station2)
  if diff < 0
    return (diff * -1)
  end
  return diff
end

def mbtaProblem(station1, station2)
  red_line = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]

  green_line = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]

  orange_line = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]

  first_line = returnLine(red_line, green_line, orange_line, station1)
  second_line = returnLine(red_line, green_line, orange_line, station2)
  first_line_diff = 0
  second_line_diff = 0

  if first_line == second_line
    first_line_diff = getStationDifference(first_line, station1, station2)
    p "There are #{first_line_diff} stops from #{station1} to #{station2}"
  else
    first_line_diff = getStationDifference(first_line, station1, "Park Street")
    second_line_diff = getStationDifference(second_line, station2, "Park Street")
    p "There are #{first_line_diff + second_line_diff} stops from #{station1} to #{station2} including a transer at Park Street"
  end
end

mbtaProblem("South Station", "Forest Hills")
# p getStationDifference(green_line, "Government Center", "Kenmore")
# p returnLine(red_line, green_line, orange_line, "North Station")
# p green_line.index("Park Street") - green_line.index("Boylston")
