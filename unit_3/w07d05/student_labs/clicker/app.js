// Global Angular
const app = angular.module("MyApp", []);

app.controller("MainController", function(){
  this.hello = "The Clicker";

  this.number = 0;

  this.goUp = () => {
    this.number++;
  }

  this.goDown = () => {
    this.number--;
  }

  this.reset = () => {
    this.number = 0;
  }
});
