def bubble_sort_2 array
  array.sort
end

def helper_sort array, limit
  for i in 0...limit do
    if array[i] > array[i + 1]
      temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
    end
  end
end

def bubble_sort array
  for i in 1...array.size do
    helper_sort array, array.size - i
  end
  return array
end

my_test_case = [4, 3, 6, 77, 0]
my_other_test_case = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

p bubble_sort(my_test_case)
p bubble_sort(my_other_test_case)
# p bubble_sort_2 my_test_case

def check_row board
  for i in 0...board.size do
    my_string = board[i].sort.join("")
    if !(my_string.include? '123456789')
      return false
    end
  end
  true
end

def check_col board
  check_row board.transpose
end

def check_3x3 board
  my_array = []
  for i in 0...3 do
    for x in 0...3 do
      my_array.push(board[i][x])
    end
  end
  p my_array
  true
end


def done_or_not board
  if check_row(board) && check_col(board) && check_3x3(board)
    return "Finished!"
  end
  "Try again"
end

my_test_board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]]

my_other_test_board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
                      [6, 7, 2, 1, 9, 0, 3, 4, 9],
                      [1, 0, 0, 3, 4, 2, 5, 6, 0],
                      [8, 5, 9, 7, 6, 1, 0, 2, 0],
                      [4, 2, 6, 8, 5, 3, 7, 9, 1],
                      [7, 1, 3, 9, 2, 4, 8, 5, 6],
                      [9, 0, 1, 5, 3, 7, 2, 1, 4],
                      [2, 8, 7, 4, 1, 9, 6, 3, 5],
                      [3, 0, 0, 4, 8, 1, 1, 7, 9]]

# p done_or_not my_test_board
# p done_or_not my_other_test_board
