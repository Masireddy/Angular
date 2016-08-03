angular.module('productsPage')
.controller('productsCtrl',["$scope","productSVC",function($scope,productSVC){
$scope.products = productSVC.getProducts();

$scope.AddtoCart = function(item){
   productSVC.addtoCartItems(item);
}

}]);

