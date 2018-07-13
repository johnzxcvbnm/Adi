// Global Angular
const app = angular.module("MyApp", []);

app.controller("MainController", function(){
  this.hello = "YOLO BRO!";
  this.showImages = true;
  this.showInfo = false;

  this.toggleInfo = () => {
    this.showInfo = !this.showInfo;
  }

  this.contacts = [
    {
      name: 'Jenny',
      phone: 8675309,
      state: 'California',
      image: 'http://old.unsquare.com/dance/wp-content/uploads/2008/11/jennylewis01.jpg'
    },
    {
      name: 'Claire',
      phone: 6060842,
      state: 'DC',
      image: 'http://www1.pictures.zimbio.com/mp/yOE-jyqpuoql.jpg'
    },
    {
      name: 'Morris',
      phone: 7779311,
      state: 'Minnesota',
      image: 'https://s1.ticketm.net/tm/en-us/dbimages/111807a.jpg'
    },
    {
      name: 'Alicia',
      phone: 4894608,
      state: 'New York',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/AliciaKeys2013.jpg/220px-AliciaKeys2013.jpg'
    },
    {
      name: 'Etta',
      phone: '842-3089',
      state: 'California',
      image: 'http://images5.fanpop.com/image/photos/30600000/SWEET-ETTA-JAMES-etta-james-30694011-584-519.gif'
    }
  ];
});
