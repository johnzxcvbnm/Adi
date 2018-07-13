// Global Angular
const app = angular.module("MyApp", []);

app.controller("MainController", function(){
  this.hello = "YOLO BRO!";
  this.userInput = "";
  this.userOutput = this.userInput;
});
