angular.module("loginPage")
        .controller("loginCtrl",["$scope",function($scope){
    
         var userList=[
                        {
                            username: "srinivasareddy",
                            password: "Srinu1984"
                        },
                        {
                            username: "ramakrishna",
                            password: "rk1234"
                        },
                        {
                            username: "bhargav",
                            password: "bhargav1234"
                        }       
        
                    ];
$scope.user = {};         
$scope.Signin = function(){     
                angular.forEach(userList, function (item) {
                 if (item.username == $scope.user.email && item.password == $scope.user.password) {
                     $scope.feed ="validated";
                 }
                else {
                    $scope.feed ="Not validated";
                }
                });    
        };
    /*
    It is underscore.js functionality
    return _.contains(userList,$scope.user);
    */
             
}]);