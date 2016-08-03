angular.module('Qantas')
.controller('homePageCtrl',["$scope",function($scope){
    $scope.loadNav="app/Templates/Header.html";
     $scope.loadData=function(type){
         if( type == "home") {
           $scope.loadURL="app/Templates/Home.html";
       }        
        if( type == "register") {
          $scope.loadURL="app/Templates/Register.html";
        }
       if( type == "login") {
           $scope.loadURL="app/Templates/Login.html";
       }
         if( type == "products") {
           $scope.loadURL="app/Templates/Products.html";
       }
         if( type == "cart") {
           $scope.loadURL="app/Templates/Cart.html";
       }
 
    }
        
        
}]);