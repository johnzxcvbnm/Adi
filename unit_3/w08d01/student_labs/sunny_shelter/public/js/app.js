const app = angular.module("ShelterApp", []);

app.controller("MainController", ["$http", function($http) {
  this.title = "My Animal Shelter";

  const controller = this;

  this.indexEdit = -1;

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

  this.toggleAdopted = (animal) => {
    let newValue = !animal.adopted;
    animal.adopted = newValue;

    $http({
      method: "PUT",
      url: `/shelter/${animal._id}`,
      data: animal
      // {
      //   name: animal.name,
      //   species: animal.species,
      //   breed: animal.breed,
      //   gender: animal.gender,
      //   image: animal.image,
      //   age: animal.age,
      //   adopted: newValue
      // }
    }).then( (res) => {
      controller.getAnimals();
    }, () => {
      console.log("Error Updating Adopted");
    });
  }

  this.deleteAnimal = (animal) => {
    $http({
      method: "DELETE",
      url: `/shelter/${animal._id}`
    }).then( (res) => {
      controller.getAnimals();
    }, (err) => {
      console.log("Error Deleting");
    });
  }

  this.editAnimal = (animal) => {
  // this.editAnimal = function(animal) {
    // console.log("Made it!");
    // console.log(this.breed);
    this.indexEdit = -1;
    $http({
      method: "PUT",
      url: `/shelter/${animal._id}`,
      data: {
        name: this.updatedName,
        species: this.updatedSpecies,
        breed: this.updatedBreed,
        gender: this.updatedGender,
        image: this.updatedImage,
        age: this.updatedAge,
        adopted: this.adopted
      }
    }).then( (res) => {
      // console.log(res);
      controller.getAnimals();
    }, (err) => {
      console.log("Error Updating Animals");
    });
  }

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
      console.log("Error Creating User");
    });
  }

  this.logIn = () => {
    $http({
      method: "POST",
      url: "/sessions",
      data:
      {
        username: this.logUsername,
        password: this.logPassword
      }
    }).then( (res) => {
      console.log(res);
      controller.allowOptions();
    }, () => {
      console.log("Error LogIn");
    });
  }

  this.allowOptions = () => {
    $http({
      method: "GET",
      url: "/app"
    }).then( (res) => {
      controller.loggedIn = res.data.username;
    });
  }

  this.getAnimals();
}]);
