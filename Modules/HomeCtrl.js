angular.module('homePage')
    .controller('homeCtrl',["$scope",function($scope){
       
        var staffList =["194549","197453"];
         
        $scope.searchClick = function(){
                 
            angular.forEach(staffList,function(item){
                
                  
                if (item == $scope.search) {
                    console.log("Staff exists");
                }
                else {
                    
                    console.log("Staff does not exist");
                }
                
            })
            
        };
        
       
    }]);