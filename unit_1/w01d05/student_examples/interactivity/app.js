console.log("Console YOLO");

// const yourAnswer = prompt("Are you happy it is friday?", "No way!");
// console.log(yourAnswer);

// const yourAnswer = prompt("Do you like apples?", "Yes/No");

let yourAnswer = "";
while(yourAnswer !== "Yes"){
  yourAnswer = prompt("Do you like apples?", "Yes/No");
  if(yourAnswer === "Yes"){
    alert("Excellent!");
  } else if(yourAnswer === "No") {
    alert("What is wrong with you?");
  } else {
    alert("Does not compute!");
  }
}
// if(yourAnswer == 12){
//   console.log("What????");
// }
