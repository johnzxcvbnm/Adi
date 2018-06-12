// const $myContainer = $("<div>").css("width", "400px");

const generateRow = (name1, name2) => {
  const $myContainer = $("<div>").css("width", "400px").css("height", "50px");

  for(let i = 0; i < 4; i++){
    $myContainer.append( $("<div>").addClass(name1 + "Square")
                                   .css("background-color",  name1) );
    $myContainer.append( $("<div>").addClass(name2 + "Square")
                                   .css("background-color",  name2) );
  }
  $("body").append($myContainer);
}

const generateSquares = () => {
  for(let i = 0; i < 8; i++){
    if(i % 2 == 0){
      generateRow("red", "black");
    } else {
      generateRow("black", "red");
    }
  }

  // $("body").append($myContainer);
}

const generateTriangleRow = (num) => {
  const $myContainer = $("<div>").addClass("row");
  for(let i = 0; i < num; i++){
    const $myTri = $("<div>").addClass("triangle");
    $myContainer.append($myTri);
  }

  if(num == 1){
    $("body").append($myContainer);
  } else {
    generateTriangleRow(num - 1);
    $("body").append($myContainer);
  }
}


$( () => {
  // generateSquares();

  generateTriangleRow(8);
});//End of On Ready Function
