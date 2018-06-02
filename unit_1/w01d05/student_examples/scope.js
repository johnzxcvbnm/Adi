
const checkSquare = (num) => {
  return Math.sqrt(num) % 1 == 0;
}

// console.log(checkSquare(25));
// console.log(checkSquare(7));

const checkToLimit = (num) => {
  for(let i = 1; i <= num; i++){
    if(checkSquare(i)){
      console.log(i + " is a perfect square!  High five bro!");
    } else {
      console.log(i + " is NOT a perfect square.  Sad");
    }
  }
}

// checkToLimit(100);
