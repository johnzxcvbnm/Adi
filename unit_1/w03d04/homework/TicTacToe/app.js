//Global variables
//myTurn array is used to determine whose turn is next
//gridNum is from the users input and is how wide of a grid to create
const myTurn = ["X", "O"];
let gridNum = 0;

//Callback function to determine if every letter in the array equals X
//Used to determine if someone won the game
const isXLetter = (myLetter) => {
  return myLetter === "X";
}

//Callback function to determine if every letter in the array equals O
//Used to determine if someone won the game
const isOLetter = (myLetter) => {
  return myLetter === "O";
}

//Checks row number 'num' on the board to see if there is a winner
//Function returns the row number of the winning row, otherwise it returns -1
const checkRow = (num) => {
  //Create a new array and push the text of the entire row onto it
  const myArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${num}-${i}`).text() );
  }
  //If all the letters on that row are the same, return that row value
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return num;
  }
  //Otherwise return -1
  return -1;
}

//Checks to see if col number 'num' on the board to see if there is a winner
//Functions returns the col number of the winning col, otherwise it returns -1
const checkCol = (num) => {
  //Create a new array and push the text of the entire col onto it
  const myArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${i}-${num}`).text() );
  }
  //If all the letters on that col are the same, return that col value
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return num;
  }
  //Otherwise return -1
  return -1;
}

//Checks the two diagonals to see if there is a winner
//Returns either the first box or last box if one of them is a winner, otherwise returns -1
const checkDia = () => {
  //Creates two arrays for each diagonal and pushes the text onto each array
  const myArray = [];
  const mySecondArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${i}-${i}`).text() );
    mySecondArray.push( $(`#${i}-${gridNum - 1 - i}`).text() );
  }
  //Returns the value of the winning diagonal, if there is one
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return 0;
  } else if (mySecondArray.every(isXLetter) || mySecondArray.every(isOLetter)){
    return gridNum - 1;
  }
  //Otherwise returns -1
  return -1;
}

//Pulls the text from the winning square to alert the user of who won
//Cordinates are determined from the winCondition function and the checkRow/Col/Dia functions
const pullWin = (x, y) => {
  const winner = $(`#${x}-${y}`).text();
  alert(`The winner is ${winner}!  Good Game!`);
}

//Function checks to see if there is a winner
//If there is a winner, it alerts the user who won, then disables the board
const winCondition = () => {
  //Loop through each row and col (and dia) to determine if there is a winner
  for(let i = 0; i < gridNum; i++){
    //If there is a winning row
    if(checkRow(i) > -1){
      //Alert the user who won
      pullWin(checkRow(i), 0);
      //Turn off all the handlers
      $("div").off();
      //Exit the loop so you don't get multiple alerts
      return;
    } else if(checkCol(i) > -1){
      pullWin(0, checkCol(i));
      $("div").off();
      return;
    } else if(checkDia() > -1)
    {
      pullWin(0, checkDia());
      $("div").off();
      return;
    }
  }
}

const tieCheck = () => {
  const $myH2 = $("h2");
  for(let i of $myH2){
    if(i.innerHTML === ""){
      return;
    }
  }
  alert("Game is a tie!");
}

const canPlay = ($target) => {
  return $target.children().text() === "";
}

const playSquare = (event) => {
  const $myTarget = $(event.currentTarget);

  if(canPlay($myTarget)){
    $myTarget.children().text(myTurn[0]);
    winCondition();
    tieCheck();
    myTurn.push(myTurn[0])
    myTurn.shift();
  }
}

const generateSquares = (num) => {
  $(".grid").empty();
  myTurn[0] = "X";
  myTurn[1] = "O";


  let width = Math.floor(90 / num);

  if(num == 5 || num == 6){
    width = Math.floor(87 / num);
  }
  // $("h2").css("line-height", width);
  for(let i = 0; i < num * num; i++){
    const $mySquare = $("<div>").addClass("square");
    $mySquare.css("width", width + "%");
    $mySquare.css("height", width + "%");
    $mySquare.html("<h2></h2>");
    $mySquare.css("font-size", (3 * width) + "px");
    $mySquare.attr("id", (i%num) + "-" + Math.floor(i/num));
    $mySquare.on("click", playSquare);
    $(".grid").append($mySquare);
  }
}

const pullInput = () => {
  gridNum = parseInt($("#inputBox").val());
  if( (gridNum > 2) && (gridNum < 8) ){
    generateSquares(gridNum);
  }
}

$( () => {
  $("#inputButton").on("click", pullInput);
});
