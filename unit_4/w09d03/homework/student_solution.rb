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
