const app = angular.module("myHomework", []);

app.controller("CarsController", function() {
  this.myTitle = "My Awesome Cars";
  this.types = ["Honda", "Toyota", "Mazda", "Chevy", "Tesla", "Volvo", "Saab", "Fiat"];
  this.colors = ["mistyrose", "cornflowerblue", "lemonchiffon", "tomato", "azure", "snow", "orchid", "blanchedalmond", "papayawhip" ,"thistle"];
});

app.controller("DriversController", function() {
  
});
