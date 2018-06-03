//Landscaper Game - w01d05 homework

//An array of arrays that holds all the equipment information
//First element is the name of the equipment
//Second element is the cost
//Third element is how much money the equipment generates for you
//Fourth element is how many the user owns and is the only element that gets updated
const equipment = [["Teeth", 0, 1, 1],
                  ["Rusty Scissors", 5, 5, 0],
                  ["Push Lawnmower", 25, 50, 0],
                  ["Battery-Powered Lawnmower", 250, 100, 0],
                  ["A Team of Starving Students", 500, 250, 0]];
let money = 0; //Running total for the users money.
let answer = ""; //Promt value returned from user.

//Function that resets the game and returns everything to their default values
const resetGame = () => {
  money = 0;
  answer = "";
  for(let i = 1; i < equipment.length; i++){
    equipment[i][3] = 0;
  }
}

//Function which calculates how much money the user is currently generating and returns it
const moneyMultiplier = () => {
  let sum = 0;
  for(let i = 0; i < equipment.length; i++){
    sum += equipment[i][2] * equipment[i][3];
  }
  return sum;
}

//Prompts the user asking them what they want to do.
//Returns the users input
const promptUser = () => {
   return prompt("Do you want to cut the lawn?  You'll earn $" + moneyMultiplier() + "\nDo you want to buy some better equipment?" + "\nDo you want to sell old equipment?" + "\n\nCurrent Money: $" + money, "Cut/Buy/Sell");
}

//Creates a long string which lists everything the user can buy, how much it costs, and how many the user already owns.
//Returns the long string.
const buyList = () => {
  let temp = "Input a number to a number to buy that equipment\n\n";
  for(let i = 0; i < equipment.length; i++){
    temp += i + ". " + equipment[i][0];
    temp += "   Cost: $" + equipment[i][1] + "    Owned: " + equipment[i][3] + "\n";
  }
  temp += "\nCurrent Money: $" + money;
  return temp;
}

//Checks to see if the user has enough money to buy the equipment in equipment[num]
//Returns true if they can buy it or false otherwise
const canBuy = (num) => {
  return equipment[num][1] <= money;
}


//Lists all the equipment and what the user can buy.
//Function then buys the equipment after checking to see if the user has enough money.
const buyCommand = () => {
  let temp = prompt(buyList());
  temp = parseInt(temp);

  //Checks to see if the user entered in a valid number
  if((1 <= temp) && (temp < equipment.length)){
    if(canBuy(temp)){
      alert("You bought " + equipment[temp][0] + " for $" + equipment[temp][1]);
      equipment[temp][3]++;
      money -= equipment[temp][1];
    } else {
    alert("Not enough money");
    }
  } else {
    alert("Invalid Command");
  }
}

//Creates a string that lists all the equipment that the user can sell.
//Returns the string.
const sellList = () => {
  let temp = "Input a number to a number to sell that equipment\n\n";
  for(let i = 0; i < equipment.length; i++){
    temp += i + ". " + equipment[i][0];
    temp += "   Sale Price: $" + Math.floor(equipment[i][1] / 2) + "    Owned: " + equipment[i][3] + "\n";
  }
  temp += "\nCurrent Money: $" + money;
  return temp;
}

//Checks to see if the user has the equipment to sell.
const canSell = num => {
  return equipment[num][3] != 0;
}

//Lists what equipment the user can sell
const sellCommand = () => {
  let temp = prompt(sellList());
  temp = parseInt(temp);

  if((1 <= temp) && (temp < equipment.length)){
    if(canSell(temp)){
      alert("You sold " + equipment[temp][0] + " for $" + Math.floor(equipment[temp][1] / 2));
      equipment[temp][3]--;
      money += Math.floor(equipment[temp][1] / 2);
    } else {
    alert("You don't own any!");
    }
  } else {
    alert("Invalid Command");
  }
}

//Checks to see if the user has won yet
//User wins when they earn $1000 or more AND if they have bought at least one group of students
const winCheck = () => {
  return (money >= 1000) && (equipment[4][3] > 0);
}

//Function to play the game
//User Commands:
//'quit' or "Quit" - Exits the program early by returning out of the Function
//'cut' or "Cut" - Cuts the grass and generates money based off of what equipment the user has
//'buy' or "Buy" - Brings up the buy menu so the user can buy equipment
//'sell' or "Sell" - Brings up the sell menu so the user can sell equipment
//Game continues until the user wins or quits
const playGame = () => {
  //Sets default values for the game
  resetGame();

  //Continues the game until the user wins
  while(!winCheck()){

    //Prompts the user
    answer = promptUser();

    //Quits the program early by exiting the function
    if(answer === "quit" || answer === "Quit"){
      return;
    } else if(answer === "Cut" || answer === "cut"){
      money += moneyMultiplier();
    } else if(answer === "buy" || answer === "Buy"){
      buyCommand();
    } else if(answer === "sell" || answer === "Sell"){
      sellCommand();
    } else {
      alert("Invalid Command");
    }
  }
  alert("You Win!");
}

playGame();
