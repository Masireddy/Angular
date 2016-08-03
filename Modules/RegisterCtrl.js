angular.module("registerPage")
.controller('registerCtrl',["$scope",function($scope){    
    
    $scope.countries=[
        {        
        name : "India",
        code : "IN"
        },
        {        
        name : "United States of America",
        code : "US"
        }]    
}]);

