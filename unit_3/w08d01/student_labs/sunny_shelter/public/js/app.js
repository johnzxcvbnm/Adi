const app = angular.module("ShelterApp", []);

app.controller("MainController", ["$http", function($http) {
  this.title = "My Animal Shelter";

  const controller = this;

  this.createAnimal = () => {
    $http({
      method: "POST",
      url: "/shelter",
      data: {
        name: this.name,
        species: this.species,
        breed: this.breed,
        gender: this.gender,
        image: this.image,
        age: this.age,
        adopted: this.adopted
      }
    }).then( (res) => {
      // console.log(res);
      controller.getAnimals();
    }, () => {
      console.log("error");
    });
  }

  this.getAnimals = () => {
    $http({
      method: "GET",
      url: "/shelter"
    }).then( (res) => {
      // console.log(res);
      controller.animals = res.data;
    }, () => {
      console.log("Error");
    });
  }

  this.getAnimals();
}]);
