//Landscaper Game - w01d05 homework

let money = 0; //Running total for the users money.
let answer = ""; //Promt value returned from user.
const equipment = [["Teeth", 0, 1, 1],
                  ["Rusty Scissors", 5, 5, 0],
                  ["Push Lawnmower", 25, 50, 0],
                  ["Battery-Powered Lawnmower", 250, 100, 0],
                  ["A Team of Starving Students", 500, 250, 0]];

const resetGame = () => {
  money = 0;
  answer = "";
  for(let i = 1; i < equipment.length; i++){
    equipment[i][3] = 0;
  }
}

const moneyMultiplier = () => {
  let sum = 0;
  for(let i = 0; i < equipment.length; i++){
    sum += equipment[i][2] * equipment[i][3];
  }
  return sum;
}

const promptUser = () => {
   return prompt("Do you want to cut the lawn?  You'll earn $" + moneyMultiplier() + "\nDo you want to buy some better equipment?" + "\nDo you want to sell old equipment?" + "\n\nCurrent Money: $" + money, "Cut/Buy/Sell");
}

const buyList = () => {
  let temp = "Input a number to a number to buy that equipment\n\n";
  for(let i = 0; i < equipment.length; i++){
    temp += i + ". " + equipment[i][0];
    temp += "   Cost: $" + equipment[i][1] + "    Owned: " + equipment[i][3] + "\n";
  }
  temp += "\nCurrent Money: $" + money;
  return temp;
}

const canBuy = (num) => {
  return equipment[num][1] <= money;
}

const buyCommand = () => {
  let temp = prompt(buyList());
  temp = parseInt(temp);

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

const sellList = () => {
  let temp = "Input a number to a number to sell that equipment\n\n";
  for(let i = 0; i < equipment.length; i++){
    temp += i + ". " + equipment[i][0];
    temp += "   Sale Price: $" + Math.floor(equipment[i][1] / 2) + "    Owned: " + equipment[i][3] + "\n";
  }
  temp += "\nCurrent Money: $" + money;
  return temp;
}

const canSell = num => {
  return equipment[num][3] != 0;
}

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

const winCheck = () => {
  return (money >= 1000) && (equipment[4][3] > 0);
}

const playGame = () => {
  resetGame();

  while(!winCheck()){
    answer = promptUser();
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
