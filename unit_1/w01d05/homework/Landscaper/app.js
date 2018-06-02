//Landscaper Game - w01d05 homework

let money = 0; //Running total for the users money.
let answer = ""; //Promt value returned from user.
let equipment = "teeth"; //Equipment the user currently has.  Changes as the user is able to buy different equipment.
let moneyMultiplier = 1; //How much money the user gets based off of what equipment they have

//Prompts the user letting them know what equipment they have and how much they can earn
//Returns the users input
const promptUser = () => {
  return prompt("Do you want to cut the lawn using your " + equipment + "?  You'll earn $" + moneyMultiplier, "Cut");
}


while(answer !== "quit"){
  alert("You currently have $" + money);
  answer = promptUser();
  if(answer === "Cut"){
    money += moneyMultiplier;
  }

}
