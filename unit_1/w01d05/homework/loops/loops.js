// Practice with Loops - Nested Loop
// You may need to do a little bit of research on nested for loops, but try to solve this on your own first:
//
// Print out each individual number in this grid:

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for(let i = 0; i < grid.length; i++){
  for(let x = 0; x < grid[i].length; x++){
    console.log(grid[i][x]);
  }
}
