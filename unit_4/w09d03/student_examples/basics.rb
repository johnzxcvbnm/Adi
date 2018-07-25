# long_variable_name = 1
#
# puts("hi");
# puts "hi"
# p 'hi'
#
# some_var = gets
# puts some_var

# puts "Ruby"
# puts 'Python'
#
# puts "Ruby".size
# puts "Ruby".upcase
#
# puts 23.to_s
#
# foo = "bar"
# puts "oh hai #{foo}"
# puts 'oh hai #{foo}'

# long_string = <<-EOF
# ;alksjdf;lkajsdf
# asdfhds
# asdfhdsasdf
# asdfhdssadf
# EOF
#
# puts long_string

# a = false
# b = true
# puts a && b
# puts a || b

# puts 5 / 2 #rounds
# puts 122 #normal
# puts 0x7a #hex value
# puts 0172 #octal
# puts 0b1111010 #binary
# puts 23_482_345_629 #long numbers: substitute _ for ,

# p 5.0 / 2 #force a float
# p 5.fdiv 2 #float division
# p 12.to_f #convert to float
# p sprintf "%.4f" % (1/3.0) #format a value
# p ("%.4f" % (1/3.0)).to_f
# p 1.2e-3 #scientific notation

# require 'bigdecimal'
# puts BigDecimal("1.2") - BigDecimal("1.0")
#
# puts 1.2 - 1.0 #outputs 0.19999999999999996
#
# require ('bigdecimal');
# puts BigDecimal('0.0000000000001') #output in scientific notation

# p 2.to_r #outputs (2/1)
# p Rational 0.5 #outputs (1/2)
# p 2/3r #can use fraction notation
# p 2/3r+1 #can combine fraction notation with other math

# a = nil #same as null
# puts a

# light = 'on' #could do this
# light = :on #better to do this
#
# foo = :on
# p light.object_id
# p foo.object_id
# foo = "on"
# p foo.object_id
#
# p :name.object_id
#  p :name.object_id #:name is the same object in memory as :name on the previous line
#  p "name".object_id
#  p "name".object_id #this is a different string, and therefore a different place in memory than "name" above

# p :name.methods.size
# p "name".methods.size

# foo = :bar
#  foo = :baz #completely different symbol than :bar

# a = [1,4,6]
# b = Array(1..6) # 1-6 - called a range
# c = Array(1...6) # 1-5
# a.push(8)
# p "A array"
# p a
# p "B array"
# p b
# p "C array"
# p c

# domains = { 'location' => "United States" } #could do this
# domains = { :location => "United States" } #better to do this
# domains = { location: "United States" } #Same as above
# p domains[:location]
#
# domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
# p domains
# puts domains['de']
# puts domains[1]
# puts domains[:us]

# p true.class, false.class
# p "Ruby".class
# p 1.class
# p 4.5.class
# p 3_463_456_457.class
# p :age.class
# p [1, 2, 3].class
# p({ :name => "Jane", :age => 17 }.class)

# p ('4'.to_i) #to integer
# p 4.to_s #to string
# p 5.to_f #to float
# p 0.5.to_r #to rational
# p "Jane".to_sym #to symbol

# def h
#   puts "Hello World!"
# end
#
# h()
# h

# def h(name)
#   puts "Hello #{name}"
# end
#
# h("Matt")
# h "matt"

# a = -1
# if a > 1
#   p "Greater than 1"
# elsif a == 1
#   p "equals 1"
# else
#   p "less than 1"
# end

# a = 0
# if(!(a >= 1))
# # unless a >= 1
#   p "Less than 1"
# end

# a = 1
# puts "equals 1" if a == 1
# puts "not greater than 1" unless a > 1

# a = 0
# while a < 5
#   p a
#   a += 1 #No such thing as ++
# end

# a = 0
# until a == 5 do
#   p a
#   a += 1
# end

q = 5
for i in 0...q do
  puts i
end
