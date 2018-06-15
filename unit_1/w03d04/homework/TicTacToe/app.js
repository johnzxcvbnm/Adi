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
      //If there is a winning col
    } else if(checkCol(i) > -1){
      //Alert the user who won
      pullWin(0, checkCol(i));
      //Turn off all the handlers
      $("div").off();
      //Exit the loop
      return;
      //If there is a winning Diagonal
    } else if(checkDia() > -1){
      //Alert the user who won
      pullWin(0, checkDia());
      //Turn off all the handlers
      $("div").off();
      //Exit the loop
      return;
    }
  }
}

//Function loops through every square, if there are no more moves left, alert the user that there is a tie
const tieCheck = () => {
  const $myH2 = $("h2");
  for(let i of $myH2){
    if(i.innerHTML === ""){
      return;
    }
  }
  alert("Game is a tie!");
}

//Function determines if a space can be played on
//If the space has no text then it can be played on
const canPlay = ($target) => {
  return $target.children().text() === "";
}

//Function places an X or O on the clicked square, if it can be played on
//Then it checks to see if one of the players has won, or if the game is tied
const playSquare = (event) => {
  //Pulls the square that was clicked on
  const $myTarget = $(event.currentTarget);

  //If you can play on it, then it places the apropriate letter on the square
  if(canPlay($myTarget)){
    $myTarget.children().text(myTurn[0]);
    //Check to see if someone won the game
    winCondition();
    //Check to see if the game is a tie
    tieCheck();
    //Pushes whoever went to the back of the array, thus rotating whose turn it is
    myTurn.push(myTurn[0])
    myTurn.shift();
  }
}

//Function generates the field of play based off of the users input
//It generates (num times num) number of squares to populate the field
//Each square contains a h2 which holds who played there (or empty string)
//Along with a handler which allows you to play on that square
const generateSquares = (num) => {
  //Reset button resets the field and resets the player array, so X always goes first
  $(".grid").empty();
  myTurn[0] = "X";
  myTurn[1] = "O";

  //width of each square so it populates the field correctly with lines in between each box
  let width = Math.floor(90 / num);

  //Special case for a 5x5 and 6x6 so it renders correctly
  if(num == 5 || num == 6){
    width = Math.floor(87 / num);
  }

  //Generates num times num (3x3, 4x4, etc) number of squares based off of the users input
  for(let i = 0; i < num * num; i++){
    //Create a new square
    const $mySquare = $("<div>").addClass("square");
    //Set the height and width based off of the above calculation
    $mySquare.css("width", width + "%");
    $mySquare.css("height", width + "%");
    //Add an empty h2 to hold who plays there, and sets the font size for different size fields
    $mySquare.html("<h2></h2>");
    $mySquare.css("font-size", (3 * width) + "px");
    //Sets an ID up as a cordinate system, so the top row of a 3x3 would be (0-0, 0-1, 0-2)
    //This allows the system to iterate through the grid to determine if there is a winner
    $mySquare.attr("id", (i%num) + "-" + Math.floor(i/num));
    //Create a handler for when the user clicks on the square
    $mySquare.on("click", playSquare);
    //Add the square to the container 'grid'
    $(".grid").append($mySquare);
  }
}

//Function pulls the input from the input box after the user clicks on the 'RESET' button
//If the input is valid ( only numbers 3 - 7 will be accepted ) the apropriate grid is then drawn
//Otherwise nothing happens
//Input range is in place because drawing more than 7 squares wide breaks out of the container that has the playing squares, thus breaking the game logic
const pullInput = () => {
  gridNum = parseInt($("#inputBox").val());
  if( (gridNum > 2) && (gridNum < 8) ){
    generateSquares(gridNum);
  }
}

//Document Ready Function
//Adds a listener to the 'RESET' button
$( () => {
  $("#inputButton").on("click", pullInput);
});//End of Document Ready Function`
