def pattern_match? word

  # regexp = /[A-D]/i
  # regexp = /^h/
  # regexp = /\.$/
  regexp = /colou?r/



  # p regexp.match(word)

  if regexp.match(word)
    return "#{word}: true"
  end

  # word.each_char do |l|
  #   if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u' )
  #     return "#{word}: true"
  #   end
  # end
  "#{word}: false"
end



# p pattern_match? 'hello.'
# p pattern_match? '.hi!'
# p pattern_match? '?howdy'
# p pattern_match? 'aloha'
# p pattern_match? 'pffft'
# p pattern_match? 'colours'
# p pattern_match? 'color'


def valid_date? word
  # exp = /\d\d(-?|\/?)\d\d(-?|\/?)\d\d\d\d/
  exp = /[01]\d(-?|\/?)\d\d(-?|\/?)\d{2,4}/


  if exp.match(word)
    true
  else
    false
  end
end

p valid_date?('12-12-2112')
p valid_date?('12122112')
p valid_date?('12/12/2112')
