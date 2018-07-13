const app = angular.module("movieApp", []);

app.controller("mainController", ["$http", function($http) {
  this.appName = "Jonk Movie Whoose";

  this.baseURL = "http://www.omdbapi.com/?";
  this.apikey = "apikey=" + "5ff94ce1";
  this.query = "s=";
  this.movieTitle = "";
  //Since the query changes multiple times, I removed it from this line and added it just as part of the URL
  this.searchURL = this.baseURL + this.apikey + "&";

  this.movies = [];

  this.showInfo = false;

  this.getMovie = (myID) => {
    this.showInfo = true; //Toggles on the movie information
    this.query = "i="; //A query of 'i' is used for searching movie IDs

    $http({
      method: "GET",
      url: this.searchURL + this.query + myID
      }).then(response => {
                  this.movies = [response.data];
                  console.log(this.movies);
              }, error => {
                  console.log(error);
      }).catch(err => {
                  console.log(`Catch: ${err}`);
    });
  }

  // console.log(this.searchURL);
  this.getMovies = () => {
    this.query = "s=";
    this.showInfo = false; //Toggles off all the movie information.  Mainly used if you do multiple searches
    $http({
      method: "GET",
      url: this.searchURL + this.query + this.movieTitle
      }).then(response => {
                  this.movies = response.data.Search;
                  console.log(this.movies);
              }, error => {
                  console.log(error);
      }).catch(err => {
                  console.log(`Catch: ${err}`);
    });
  }

}]); //close app.controller
