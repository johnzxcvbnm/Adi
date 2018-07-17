const app = angular.module('MyApp', []);

app.controller('AuthController', ['$http', function($http){

  const controller = this;
  this.createUser = () => {
    $http({
      method: "POST",
      url: "/users",
      data:
      {
        username: this.username,
        password: this.password
      }
    }).then( (res) => {
      console.log(res);
    }, () => {
      console.log("Error Creating");
    });
  }

  this.logIn = () => {
    $http({
      method: "POST",
      url: "/sessions",
      data:
      {
        username: this.username,
        password: this.password
      }
    }).then( (res) => {
      console.log(res);
    }, () => {
      console.log("Error LogIn");
    });
  }

  this.goApp = () => {
    $http({
      method: "GET",
      url: "/app"
    }).then( (res) => {
      // console.log(res);
      controller.loggedInUserName = res.data.username;
    })
  }

}]);
