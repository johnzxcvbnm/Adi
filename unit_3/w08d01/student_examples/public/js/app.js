const app = angular.module("MyApp", []);

app.controller("MyController", ["$http", function($http) {
  // this.foo = "bar";
  const controller = this;

  this.createTodo = function() {
    $http({
      method: "POST",
      url: "/todos",
      data: {
        description: this.description,
        complete: this.complete
      }
    }).then(function(response){
      // console.log(response);
      controller.getTodos();
    }, function(){
      console.log(error);
    });
  }

  this.getTodos = function() {
    $http({
      method: "GET",
      url: "/todos"
    }).then(function(response){
      controller.todos = response.data;
      // console.log(response);
    }, function() {
      console.log(error);
    });
  }

  this.getTodos();

}]);
