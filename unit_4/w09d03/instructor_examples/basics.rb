long_variable_name = 1 # this is a var
puts long_variable_name
puts('hi')
puts 'hi'
p 'hi'

#some_var = gets
#puts some_var

puts "Ruby"
puts 'Python'

puts "Ruby".size
puts "Ruby".upcase

puts 23.to_s

foo = "bar"
puts "oh hai #{foo}"
puts 'oh hai #{foo}'

long_string = <<-EOF
asdfasdfasdf
asdfasdfasdfasdfasdfas
fasdfasdfas

asdfasdfsfd
EOF

puts long_string

a = false
b = true
puts a && b
puts a || b


puts 5/2
puts 122
puts 0x7a
puts 0172
puts 0b1110111011
puts 23_384_234_234

puts 5.0 / 2
p 5.fdiv 2
puts 12.to_f
puts 12.0.to_i

puts sprintf "%.4f" % (1/3.0)
puts 1.2e-3

puts 1.2 - 1.0

require 'bigdecimal'
puts BigDecimal("1.2") - BigDecimal("1.0")
puts BigDecimal('0.00000000001')

puts 2.to_r
puts Rational 0.5
puts 2/3r
puts 2/3r + 1

a = nil
p a

a = [1,3,4]
b = Array(1..6)
c = Array(1...6)

p a
p b[1]
p c

domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
puts domains
puts domains['de']
puts domains[1]
puts domains[:us]

domains = { "location" => "United States" }
p domains
domains = { :location => "United States"}
p domains
domains = { location: "United States" }
p domains

p light = 'on'
p light = :on

p :name.object_id
p :name.object_id
p "name".object_id
p "name".object_id

foo = :bar
foo = :baz

p :name.methods.size
p "name".methods.size

p true.class, false.class
p "Ruby".class
p 1.class
p 4.5.class
p 22_234_234.class
p :age.class
p [1,3,5].class
p ({ :name => "Jane", :age => 18 }).class

p '4'.to_i
p 4.to_s
p 5.to_f
p 0.5.to_r
p "Jane".to_sym

def asdf
    puts "Hello world!"
end
asdf()
asdf

def asdf(name)
    puts "Hello #{name}!"
end
asdf('Matt')
asdf 'Matt'

a = 0

if a > 1
    p 'greater than 1'
elsif a == 1
    p 'equals 1'
else
    p 'less than 1'
end

a = 5
unless a >= 1
    p "less than 1"
end

a = 1
puts 'equal 1' if a == 1
puts 'not greater than 1' unless a > 1

a = 0
while a < 5 do
    p a
    a += 1
end

a = 0
until a == 5 do
    p a
    a += 1
end

for i in 0...5 do
    puts i
end

# const myArray = ['one', 'two', 'three'];
# myArray.forEach((str) => {
#     console.log('the value is ' + str)
# })

['one', 'two', 'three'].each do |str|
    puts 'the value is ' + str
end

['one', 'two', 'three'].each { |str| puts 'the value is ' + str }


# const basicArray = [1,2,3];
# const timesTwo = basicArray.map((num)=>{
#     return num * 2
# })
# console.log(timesTwo)

times_two = [1,2,3].map do |num|
    num * 2
end
p times_two

times_two = [1,2,3].map { |num| num * 2 }
p times_two

def each(arr, &blk)
    for elem in arr
        blk.call(elem)
    end
end

each 0...5 do |currentNum|
    puts currentNum.to_s + "!!!"
end




def each(arr)
    for elem in arr
        yield(elem)
    end
end

each 0...5 do |currentNum|
    puts currentNum.to_s + "!!!"
end


log = Proc.new do |el|
    puts el
end
log.call(5)

log = Proc.new { |el| puts el }
log.call(5)

# const foo = (){
#     console.log('hi');
# }
#
# const bar = (callback)=>{
#     callback();
# }
# bar(foo)

foo = Proc.new do
    puts 'hi'
end

def bar(callback)
    callback.call()
end

bar(foo)


p [1,2,5,6].select { |i| i > 3 }
p [1,2,5,6].detect { |i| i > 3 }
p [1,2,5,6].reject { |i| i > 3 }



p [1,3,5,10,15].grep(1..5)
p [0.3, "three", :three, "thirty-three"].grep /three/
p [1,3,5,10,15].grep(1..5) { |i| i * 3 }

p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort
p ['squirtle', 'mew', 'charmeleon', 'pikachu'].sort_by { |word| word.length }


p [2,5,1,3].sort
# p [2,'hello', 1, 'what'].sort
p [2,'hello', 1, 'what'].sort_by(&:to_i)
p [2,'hello', 1, 'what'].sort_by(&:to_s)

p %w(mew pickachu).any? { |word| word.length < 3 }
p %w(mew pickachu).all? { |word| word.length <= 3 }
p %w(mew cat her the).all? { |word| word.length <= 3 }

p (5..10).reduce(:+)
p (1..4).reduce(:*)
p [5,6,7].reduce(5, :+)
