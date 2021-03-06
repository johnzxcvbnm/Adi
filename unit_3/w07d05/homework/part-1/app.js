const app = angular.module("myHomework", []);

app.controller("CarsController", function() {
  this.myTitle = "My Awesome Cars";
  this.types = ["Honda", "Toyota", "Mazda", "Chevy", "Tesla", "Volvo", "Saab", "Fiat"];
  this.colors = ["mistyrose", "cornflowerblue", "lemonchiffon", "tomato", "azure", "snow", "orchid", "blanchedalmond", "papayawhip" ,"thistle"];

  this.newColor = "";
  this.newType = "";

  this.addColor = () => {
    this.colors.push(this.newColor);
  }

  this.addType = () => {
    this.types.push(this.newType);
  }

});

app.controller("DriversController", function() {
  this.name = "John Kusching, Lord of the Road";
  this.driverImg = "http://bigcitydriver.com/wp-content/uploads/2013/06/road-rage-cat-driving-300x199.jpg";
  this.isShy = false;

  this.showHide = () => {
    this.isShy = !this.isShy;
  }
});
