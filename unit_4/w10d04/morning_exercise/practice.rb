def clock hour, min
  my_array = []
  hour_pos = (hour / 12.0) * 360.0
  min_pos = (min / 60.0) * 360.0

  if (hour_pos > 360) || (min_pos > 360)
    return "Out of Range"
  end

  my_array.push((hour_pos - min_pos).abs)
  my_array.push(360 - (hour_pos - min_pos).abs)

end

# p clock(6, 00)
# p clock(12, 00)
# p clock(12, 15)
# p clock(9, 45)
# p clock(1, 59)
# p clock(500, 34)

# Part 1
# def hasRepeats sen, num
#   sen[num...sen.size].include? sen[0...num]
# end
#
# p hasRepeats "This returns true because This happens twice", 4
# p hasRepeats "This returns false", 4

def hasRepeats sen, num
  if num > sen.size
    return false
  end

  outcome = false
  for i in (0...sen.size-num)
    outcome = sen[i+num...sen.size].include? sen[i...num+i]
    if outcome
      return outcome
    end
  end
  outcome
end

# p hasRepeats "This returns true because true happens twice", 4
# p hasRepeats "This still returns false.", 4


def makeChange paid, total
  diff = (paid - total).round(2)
  temp = (diff * 100).round.to_i
  my_change = [0, 0, 0, 0]
  my_change[0] = temp / 25
  temp = temp % 25
  my_change[1] = temp / 10
  temp = temp % 10
  my_change[2] = temp / 5
  temp = temp % 5
  my_change[3] = temp

  p "Your change is #{diff}.  #{my_change[0]} quarters, #{my_change[1]} dimes, #{my_change[2]} nickels, and #{my_change[3]} pennies."
end

makeChange 5.00, 4.42
