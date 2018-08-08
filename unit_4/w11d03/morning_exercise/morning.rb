def cure array, index
  counter = index - 1
  while counter < array.size do
    array[counter] = (!array[counter])
    counter += index
  end
end

def goblins
  my_goblins = []
  for i in 0...100 do
    my_goblins.push(false)
  end

  for i in 1..100 do
    cure my_goblins, i
  end

  my_return = []
  for i in 0...100 do
    if my_goblins[i]
      my_return.push(i + 1)
    end
  end
  my_return
  # return my_goblins
end

p goblins
# my_result = goblins
#
# for i in 0...100 do
#   if my_result[i]
#     p "Index #{i + 1} is cured: #{my_result[i]}"
#   end
# end
# p "END OF PROGRAM"
