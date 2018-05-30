//Loops & Booleans
//Loop It

// for(let i = 0; i < 15; i++)
// {
//   console.log("hi!");
// }
//
// for(let i = 0; i < 30; i++)
// {
//   console.log("YEP!");
// }


//PART I
// let some_num = 5;
//
// while(some_num < 10)
// {
//   console.log("that's a small number");
//   some_num++;
// }
//
// while(some_num > 20)
// {
//   console.log("that's a big number");
//   some_num--;
// }

//Part II

let fave_day = "LOL";

while(fave_day === "Sat" || fave_day === "Sun") {
  console.log("I like the weekend");
  break;
}

while(fave_day === "Mon" || fave_day === "Tues" || fave_day === "Wed" || fave_day === "Thurs" || fave_day === "Fri") {
  console.log("Give me a good \'ol weekday");
  break;
}

while(fave_day != "Sat" && fave_day != "Sun" && fave_day != "Mon" && fave_day != "Tues" && fave_day != "Wed" && fave_day != "Thurs" && fave_day != "Fri") {
  console.log("ERROR");
  break;
}
