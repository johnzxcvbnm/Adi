class Word
  def initialize word
    letters = word.split('')
    @letters_display = letters.map do |l|
      { letter: l, hidden: true }
    end
  end

  def render
    @letters_display.each do |l|
      if l[:hidden]
        print " _ "
      else
        print l.letter
      end
    end
  end
end
