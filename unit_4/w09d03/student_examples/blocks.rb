# ["one", "two", "three"].each do |str|
#   puts "The value is #{str}"
# end

# ["One", "Two", "Three"].each { |str| puts "The value is #{str}" }

# times_two = [1,2,3].map do |num|
#   num * 2
# end
#
# puts times_two
#
# puts [1, 2, 3].map { |num| num * 2 }

# def each(arr, &blk)
#   for elem in arr
#     blk.call(elem)
#   end
# end

# def each(arr)
#   for elem in arr
#     yield(elem)
#   end
# end
#
# each 0...5 do |currentNum|
#   puts currentNum
# end

# log = Proc.new do |el|
#   puts el
# end

# log = Proc.new { |el| puts el }
#
# log.call(5)

# foo = Proc.new do
#   puts "Hi"
# end
#
# def bar(callback)
#   callback.call()
# end
#
# bar(foo)

# p [1, 2, 3, 4, 5].select { |i| i > 3 }
# p [1, 2, 3, 4, 5].detect { |i| i > 3 }
# p [1, 2, 3, 4, 5].reject { |i| i > 3 }

# p [1,3,5,10,15].grep (1..5) #returns [1,3,5]
# p [0.3, "three", :three, "thirty-three"].grep /three/ #returns ["three", :three, "thirty-three"]

# p [1,3,5,10,15].grep (1..5) {|i| i * 3} #returns [3,9,15]

# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
# p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length}

# p [2, 5, 1, 3].sort #returns [1, 2, 3, 5]

# p [2, "hello", 1, "what"].sort #ArgumentError: comparison of Fixnum with String failed
# p [2, "hello", 1, "what"].sort_by(&:to_i) #["what", "hello", 1, 2]
# p [2, "hello", 1, "what"].sort_by(&:to_s) #[1, 2, "hello", "what"]

# %w() is a function that will return an array of the given "words"
# p %w(mew pikachu).any? { |word| word.length <= 3 } #returns true

# p %w(mew pikachu).all? { |word| word.length <= 3 } #returns false
# p %w(mew cat her the).all? { |word| word.length <= 3 } #returns true

# p (5..10).reduce(:+) #returns 45
# p (1..4).reduce(:*) #returns 24
# p [5, 6, 7].reduce(5, :+) #returns 23

print ['charma'] * 5 * ' '
puts ' charmeleon'
