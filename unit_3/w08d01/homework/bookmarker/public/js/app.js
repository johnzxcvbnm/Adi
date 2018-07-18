const app = angular.module("BookmarkerApp", []);

app.controller("MainController", ["$http", function($http) {
  const controller = this;

  this.header = "BookMarker";
  this.indexEdit = -1;


  this.createBookmark = (user) => {
    // console.log(user);
    $http({
      method: "POST",
      url: "/bookmarker",
      data: {
        title: this.title,
        url: this.url,
        owner: user
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

  this.editBookmark = (mark) => {
    this.indexEdit = -1;
    $http({
      method: "PUT",
      url: `/bookmarker/${mark._id}`,
      data:
      {
        title: this.updatedTitle,
        url: this.updatedUrl,
        owner: mark.owner
      }
    }).then( (res) => {
      controller.getBookmarks();
    }, (err) => {
      console.log("Error Updating Bookmark");
    });
  }

  this.deleteBookmark = (mark) => {
    $http({
      method: "DELETE",
      url: `/bookmarker/${mark._id}`
    }).then( (res) => {
      controller.getBookmarks();
    }, (err) => {
      console.log("Error Deleting");
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
      console.log("Error Login");
    });
  }

  this.allowOptions = () => {
    $http({
      method: "GET",
      url: "/log"
    }).then( (res) => {
      controller.loggedIn = res.data.username;
    });
  }

  this.getBookmarks();

}]);
