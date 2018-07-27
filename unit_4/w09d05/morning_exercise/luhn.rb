def luhn(card)
  my_array = card.to_s.chars.map(&:to_i)
  counter = my_array.size - 2
  while counter >= 0 do
    my_array[counter] *= 2
    if(my_array[counter] >= 10)
      my_array[counter] -= 9
    end
    counter -= 2
  end
  my_array.reduce(:+) % 10 == 0
end

my_cc = 4408041234567893

# p "My CC is luhn: #{luhn(my_cc)}"
# p luhn(1234567890123456) #should be false
# p luhn(4408041234567893) #should be true
# p luhn(38520000023237) #should be true
# p luhn(4222222222222) #should be true

my_test_array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
def print_right(array, path, return_array)
  if path == []
    return_array.push(array[0][0])
    start = [0, 0]
    path.push("#{start[0]}-#{start[1]}")
  else
    start = path[path.size - 1].split('-').map(&:to_i)
  end
  while start[1] < array[start[0]].size - 1 do
    start[1] += 1
    return_array.push(array[start[0]][start[1]])
    path.push("#{start[0]}-#{start[1]}")
  end
  if(path.size == (array.size * array[0].size))
    return return_array
  else
    return print_down(array, path, return_array)
  end
end

def print_down(array, path, return_array)
  start = path[path.size - 1].split('-').map(&:to_i)
  p start
  while start[0] < array[start[1]].size - 1 do
    start[0] += 1
    return_array.push(array[start[0]][start[1]])
    path.push("#{start[0]}-#{start[1]}")
  end

  if(path.size == (array.size * array[0].size))
    return return_array
  else
    return print_left(array, path, return_array)
  end
end

def print_left(array, path, return_array)
  start = path[path.size - 1].split('-').map(&:to_i)
  p start
  while start[1] > 0 do
    start[1] -= 1
    return_array.push(array[start[0]][start[1]])
    path.push("#{start[0]}-#{start[1]}")
  end

  if(path.size == (array.size * array[0].size))
    return return_array
  else
    return print_up(array, path, return_array)
  end
end

def print_up(array, path, return_array)
  start = path[path.size - 1].split('-').map(&:to_i)
  start[0] -= 1
  while (start[0] > 0) && !(path.any? { |e| e == "#{start[0]}-#{start[1]}" }) do
    p "Start: #{start}"
    return_array.push(array[start[0]][start[1]])
    path.push("#{start[0]}-#{start[1]}")
    start[0] -= 1

  end

  # p !(path.any? { |e| e == "#{start[0]}-#{start[1]}" })

  if(path.size == (array.size * array[0].size))
    return return_array
  else
    return return_array
  end
end


p print_right(my_test_array, [], [])
