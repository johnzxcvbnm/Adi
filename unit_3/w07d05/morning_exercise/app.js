//Function is used in conjunction with the map function to split up the digits in an array
const splitNumber = (number) => {
  return number.toString().split("").map(Number);
}

//Function is used to see is the argument is a valid credit card number
const validCard = (card) => {

  //First you take the number and break it into an array
  let newCard = card.toString().split("").map(Number);

  switch(newCard[0]){
    case 3: if(newCard[1] === 7 || newCard[1] === 4){ console.log("You have AMERICAN EXPRESS!"); }
       else if(newCard[1] === 8)                    { console.log("You have DINERS CLUB! I don't know what that is!"); }
       else                                         { console.log("You have AMEX!"); } break;
    case 4:                                           console.log("You have a VISA!"); break;
    case 5:                                           console.log("You have a MASTER CARD.  Go apply for VISA!"); break;
    case 6:                                           console.log("You have a DISCOVER!"); break;
    default:                                          console.log("You have some weird card.  I'm guessing a gift card? Maybe?");
  }

  for(let i = newCard.length - 2; i >= 0; i -= 2){
    newCard[i] = newCard[i] * 2;
  }

  newCard = newCard.map(splitNumber);

  // console.log(`New Card: ${newCard}`);

  let sum = 0;
  for(let i of newCard){
    for(let x of i){
      sum += x;
    }
  }

  // console.log(`Sum is: ${sum}`);

  return (sum % 10 === 0);
}


// console.log(validCard(4408041234567893));

console.log(validCard(1234567890123456)); //#should be false
console.log(validCard(4408041234567893)); //#should be true
console.log(validCard(38520000023237)); //#should be true
console.log(validCard(4222222222222)); //#should be true
