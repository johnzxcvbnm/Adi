const myTurn = ["X", "O"];
let gridNum = 0;

const isXLetter = (myLetter) => {
  return myLetter === "X";
}

const isOLetter = (myLetter) => {
  return myLetter === "O";
}

const checkRow = (num) => {
  const myArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${num}-${i}`).text() );
  }
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return num;
  }
  return -1;
}

const checkCol = (num) => {
  const myArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${i}-${num}`).text() );
  }
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return num;
  }
  return -1;
}

const checkDia = () => {
  const myArray = [];
  const mySecondArray = [];
  for(let i = 0; i < gridNum; i++){
    myArray.push( $(`#${i}-${i}`).text() );
    mySecondArray.push( $(`#${i}-${gridNum - 1 - i}`).text() );
  }
  if(myArray.every(isXLetter) || myArray.every(isOLetter) ){
    return 0;
  } else if (mySecondArray.every(isXLetter) || mySecondArray.every(isOLetter)){
    return gridNum - 1;
  }
  return -1;
}

const winCondition = () => {
  for(let i = 0; i < gridNum; i++){
    if(checkRow(i) > -1){
      alert("You Win! ROW");
      $("div").off();
      return;
    } else if(checkCol(i) > -1){
      alert("You Win! COL");
      $("div").off();
      return;
    } else if(checkDia() > -1)
    {
      alert("You Win! DIA");
      $("div").off();
      return;
    }
  }
}

const checkWin = () => {

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

  const width = Math.floor(90 / num);
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
