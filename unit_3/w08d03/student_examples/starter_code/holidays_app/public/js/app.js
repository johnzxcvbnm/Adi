const app = angular.module("HolidaysApp", []);

app.controller("MainController", ["$http", function($http) {
  this.h5 = "Holidays Celebrate";
  this.createForm = {};
  this.holidays = [];
  this.holiday = "";
  this.showModel = false;

  this.createHoliday = () => {
    // console.log("Submit button calls this function");

    $http({
      method: "POST",
      url: "/holidays",
      data: this.createForm
    }).then( (res) => {
      // this.getHolidays();
      // this.holidays.push(res.data);
      this.holidays.unshift(res.data);
      // console.log(res.data);
      this.createForm = {};
    }, (err) => {
      console.log("Error Posting!");
    })
  }

  this.getHolidays = () => {
    $http({
      method: "GET",
      url: "/holidays"
    }).then( (res) => {
      // console.log(res.data);
      this.holidays = res.data;
      this.holiday = this.holidays[0];
    }, (err) => {
      console.log("Failed to get");
    });
  }

  this.deleteHoliday = ( id ) => {
    // console.log("DELETING");
    console.log(id);
    $http({
      method: "DELETE",
      url: `/holidays/${id}`
    }).then( (res) => {
      const removeByIndex = this.holidays.findIndex(holiday => holiday._id === id );
      this.holidays.splice(removeByIndex, 1);
      // console.log(res);
    }, (err) => {
      console.log("Error Deleting");
    });
  }

  this.updateCelebrated = (holiday) => {
    // console.log("Let's celebrate ", holiday.name, " Day!");
    holiday.celebrated = !holiday.celebrated;
    // console.log(holiday.celebrated);

    $http({
      method: "PUT",
      url: `/holidays/${holiday._id}`,
      data: { celebrated: holiday.celebrated }
    }).then( (res) => {
      // console.log(res.data.celebrated);
    }, (err) => {
      console.log("Error Updating Celebration");
    });
  }

  this.chooseOneHoliday = (holiday) => {
    this.holiday = holiday;
    // console.log(this.holiday.name);
  }

  this.updateLikes = (holiday) => {
    holiday.likes++;

    $http({
      method: "PUT",
      url: `/holidays/${holiday._id}`,
      data: holiday
    }).then( (res) => {
      // console.log(res);
      // this.getHolidays();
    }, (err) => {
      console.log("Error updating likes");
    });
  }

  this.toggleModel = () => {
    this.showModel = !this.showModel;
    // console.log("Toggle Model");
    // console.log(this.showModel);
  }

  this.editHoliday = () => {
    this.showModel = false;

    // console.log(this.createForm);
    $http({
      method: "PUT",
      url: `/holidays/${this.holiday._id}`,
      data: this.holiday
    }).then( (res) => {
      // this.createForm = {};
      console.log(res);
    }, (err) => {
      console.log("Error updating Holiday");
    });
  }

  this.getHolidays();

}]);
