// const pushText = () => {
//   const newText = $(event.currentTarget).children().html();
//   let oldText = $(".screen").children().html();
//   if(oldText === undefined){
//     oldText = "";
//   }
//   $(".screen").empty();
//   $(".screen").append( $("<h1>").text( oldText + newText ) );
// }
//
// const clear = () => {
//   $(".screen").empty();
// }
//
// const parseScreen = () => {
//
// }
//
// const enableButtons = () => {
//   $(".button").on("click", pushText);
//   $(".button").eq(0).on("click", clear);
//   $("#equalsButton").on("click", () => { console.log("Equals"); });
// }

$( () => {
  let memoryNumber = [];
  let mathFunc = [];

  const clearScreen = () => {
    $(".screen").empty();
  }

  const clearVar = () => {
    memoryNumber = [];
    mathFunc = [];
  }

  const clear = () => {
    clearScreen();
    clearVar();
  }

  const pushText = () => {
    const newText = $(event.currentTarget).children().html();
    let oldText = $(".screen").children().html();
    if(oldText === undefined){
      oldText = "";
    }
    clearScreen();
    $(".screen").append( $("<h1>").text( oldText + newText ) );
  }

  const pushTotal = (num) => {
    clearScreen();
    $(".screen").append( $("<h1>").text(num) );
  }

  const pushNumber = () => {
    const num = parseFloat($(".screen").children().html());
    const fun = $(event.currentTarget).children().html();
    if(!isNaN(num)){
      memoryNumber.push(num);
      mathFunc.push(fun);
    }
    console.log(memoryNumber);
    console.log(mathFunc);
    clearScreen();
  }

  const totalFunction = () => {
    pushNumber();
    let num = 0;
    if(memoryNumber.length > 1){
      if(mathFunc.length > 0){
        switch(mathFunc[0]){
          case "+": num = memoryNumber[0] + memoryNumber[1];
                    break;
          case "-": num = memoryNumber[0] - memoryNumber[1];
                    break;
          case "X": num = memoryNumber[0] * memoryNumber[1];
                    break;
          case "÷": num = memoryNumber[0] / memoryNumber[1];
                    break;
        }
    }
      clearVar();
      pushTotal(num);
    }
    else {
      num = memoryNumber[0];
      clearVar();
      pushTotal(num);
    }
  }


  const enableButtons = () => {
    $(".number").on("click", pushText);
    $(".clear").on("click", clear);
    $(".func").on("click", pushNumber);
    $("#equalsButton").on("click", totalFunction);
  }

  enableButtons();
});//End of Document Ready Function
