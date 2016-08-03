angular.module('cartPage')
    .controller('cartCtrl',["$scope","productSVC",function($scope,productSVC){
        $scope.cartproducts =productSVC.returnCartItems();       
    }])