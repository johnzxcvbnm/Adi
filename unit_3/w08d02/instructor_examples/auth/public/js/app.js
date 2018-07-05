const app = angular.module('MyApp', []);

app.controller('MyController', [ '$http', function($http){
    this.foo = 'bar';

    // $http({
    //     method:'POST',
    //     url:'/users',
    //     data: {
    //         username:'bobby',
    //         password:'bob'
    //     }
    // })

    $http({
        method:'POST',
        url:'/sessions',
        data: {
            username:'bobby',
            password:'bob'
        }
    })

    this.getSignedInUser = function(){
        $http(
            {
                method:"GET",
                url:"/app"
            }
        ).then(
            function(response){
                console.log(response);
            }
        )
    }
} ] )
