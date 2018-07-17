const app = angular.module("BookmarkerApp", []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;

  this.header = "BookMarker";


  this.createBookmark = () => {
    $http({
      method: "POST",
      url: "/bookmarker",
      data: {
        title: this.title,
        url: this.url
      }
    }).then( (res) => {
      // console.log(res);
      controller.getBookmarks();
    }, () => {
      console.log("Error Posting");
    });
  }

  this.getBookmarks = () => {
    $http({
      method: "GET",
      url: "/bookmarker"
    }).then( (res) => {
      // console.log(res);
      controller.bookmarks = res.data;
    }, () => {
      console.log("Error Getting");
    });
  }

  this.getBookmarks();

}]);
