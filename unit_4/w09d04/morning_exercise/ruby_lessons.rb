######## delete_at/delete_if ########
# Delete_at(index) - deletes the item at <index> from the array
# This changes the original array
puts "-------- Delete At ----------"

my_array = ["Zero", "One", "Two", "Three", "Four"]

puts "My Array is : #{my_array}"

# Delete the item at index 2
my_array.delete_at(2)

# Display new array
puts "My new array is: #{my_array}"
# expected results ["Zero", "One", "Three", "Four"]


######## delete_if {conditional} ########
# Deletes all elements that meet the conditional
# This changes the original array
puts "-------- Delete If ----------"

my_array2 = ["Zero", "One", "Two", "Three", "Four"]
puts "My Array is: #{my_array2}"

my_array2.delete_if { |element| element.length >= 4 }
puts "My new array is: #{my_array2}"


######## Each with index ########
# Gives you each element with it's index in the array
# Does not change the original array
puts "-------- Each with Index ----------"
my_array3 = [10, 11, 12, 13, 14]

# my_array3.each_with_index { |element, index| p "#{element} is at index #{index}"}


my_array3.each_with_index { |element, index| element = (element - index) }
puts "My array is: #{my_array3}"
