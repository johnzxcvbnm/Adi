# T -> U

# def DNAtoRNA(dna)
#   dna.upcase.gsub('T', 'U')
# end
#
# p DNAtoRNA("GCAT")
# p DNAtoRNA("gcat")

# 12 - [2, 3, 4, 6]
# 13 - 13 is prime

def divisors(integer)
  my_div = []
  for i in 2..(integer/2)
    if integer % i == 0
      my_div.push(i)
    end
  end
  if my_div.size == 0
    return "#{integer} is prime"
  end
  my_div
end

p divisors(12)
p divisors(25)
p divisors(13)

# function divisors(integer) {
#   const divisors = [...Array(integer).keys()].slice(2).filter(n => integer % n === 0);
#   return (divisors.length>0 ? divisors : `${integer} is prime`);
# };
