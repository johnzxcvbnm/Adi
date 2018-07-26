
dictionary = ["potato", "sucralose", "tea", "rice", "quinoa"]

word = dictionary.sample

puts "Guess which word I secretly chose!"
puts "The word has #{word.size} letters."

loop do
  input = gets.chomp

  if input == word
    puts "Yep.  You got it.  The word was #{word}"
  else
    puts "WRONG"
    puts "(t)ry again or (q)uit?"
    again = gets.chomp.downcase
    break if again == "q"
  end
end


# puts "Write something"
# input = gets.chomp
# puts "You wrote: #{input}"
#
# if input == "something"
#   puts "YOU WROTE SOMETHING"
# end
