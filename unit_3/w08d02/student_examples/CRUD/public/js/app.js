const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = -1;

    this.createTodo = function(){
        $http({
            method:'POST',
            url:'/todos',
            data: {
                description:this.description,
                complete:this.complete
            }
        }).then(function(response){
            controller.getTodos();
        })
    }
    this.getTodos = function(){
        $http({
            method:'GET',
            url:'/todos'
        }).then(function(response){
            controller.todos = response.data;
            // console.log(controller);
        })
    }

    this.toggleTodoComplete = (todo) => {
      // console.log(todo);

      let newCompleteValue = !todo.complete;

      $http({
        method: "PUT",
        url: `/todos/${todo._id}`,
        data: {
          description: todo.descrition,
          complete: newCompleteValue
        }
      }).then( (res) => {
        controller.getTodos();
      }, () => {
        console.log("Error PUT");
      });
    }

    this.deleteTodo = (todo) => {
      $http({
        method: "DELETE",
        url: `/todos/${todo._id}`
      }).then( (res) => {
        controller.getTodos();
      }, (error) => {
        console.log(`Error Deleting`);
      });
    }

    this.editTodo = (todo) => {
      $http({
        method: "PUT",
        url: `/todos/${todo._id}`,
        data: {
          description: this.updatedDescription,
          complete: todo.complete
        }
      }).then( (res) => {
        controller.getTodos();
      }, (error) => {
        console.log("Error PUT");
      });
    }

    this.getTodos();
}]);
