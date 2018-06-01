const printGreeting = (name) => {
  return ("Hello there, " + name + "!");
}

// console.log(printGreeting("Slimer"));

const reverseWordOrder = (word) => {
  let temp = "";
  let arr = word.split(" ");
  for(let i = arr.length - 1; i >= 0; i--){
    temp += arr[i] + " ";
  }
  return temp;
}

// reverseWordOrder("Ishmael me call")
// console.log(reverseWordOrder("Ishmael me call"));

const calculate = (num1, num2, operation) => {
  if(operation === "add"){
    return num1 + num2;
  }
  if(operation === "sub"){
    return num1 - num2;
  }
  if(operation === "mult"){
    return num1 * num2;
  }
  if(operation === "div"){
    return num1 / num2;
  }
  if(operation === "exp"){
    return Math.pow(num1, num2);
  }
  return null;
}

// console.log(calculate(4, 3, "exp"));

const printConsecutives = (num) => {
  for(let i = 0; i < num.length - 2; i++){
    if(((num[i] + 1) == num[i + 1]) && ((num[i + 1] + 1) == num[i + 2])){
      console.log(num[i] + " " + num[i + 1] + " " + num[i + 2]);
    }
  }
}

// printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
// printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

const letterReverse = (word) => {
  let temp = "";
  for(let i = word.length - 1; i >= 0; i--){
    temp += word[i];
  }
  return temp;
}

// console.log(letterReverse("Luke I am your father"));
// console.log(letterReverse("Aren't you a little short for a storm trooper"));
