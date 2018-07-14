const app = angular.module("jepApp", []);

app.controller("mainController", ["$http", function($http) {
  //Main title to be displayed
  this.title = "Jeopardy!";
  //
  this.newQuestion = null;

  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.playerOneDone = true;
  this.playerTwoDone = true;

  this.showQuestion = false;
  this.showAnswer = true;

  this.resetGame = () => {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.newQuestion = null;
    this.playerOneDone = true;
    this.playerTwoDone = true;
  }

  this.seeAnswer = () => {
    this.showAnswer = true;
  }

  this.seeQuestion = () => {
    this.showQuestion = true;
  }

  //Function deceases player one's score by value if they haven't changed their score yet
  this.decreasePlayerOne = (value) => {
    if(!this.playerOneDone){
      this.playerOneScore -= value;
      this.playerOneDone = true;
    }
  }

  //Function inceases player one's score by value if they haven't changed their score yet
  this.increasePlayerOne = (value) => {
    if(!this.playerOneDone){
      this.playerOneScore += value;
      this.playerOneDone = true;
    }
  }

  //Function deceases player two's score by value if they haven't changed their score yet
  this.decreasePlayerTwo = (value) => {
    if(!this.playerTwoDone){
      this.playerTwoScore -= value;
      this.playerTwoDone = true;
    }
  }

  //Function inceases player two's score by value if they haven't changed their score yet
  this.increasePlayerTwo = (value) => {
    if(!this.playerTwoDone){
      this.playerTwoScore += value;
      this.playerTwoDone = true;
    }
  }

  this.getQuestion = () => {
    //Reset the field so the answer isn't revealed when a new question is pulled
    this.showQuestion = false;
    // this.showAnswer = false;

    //Reset the players turns so they can change their score afterwards
    this.playerOneDone = false;
    this.playerTwoDone = false;

    $http({
      method: "GET",
      url: "http://jservice.io/api/random"
      }).then(response => {
                  console.log(response.data);
                  this.newQuestion = response.data[0];
              }, error => {
                  console.log(error);
      }).catch(err => {
                  console.log(`Catch: ${err}`);
    });
  }
}]);
