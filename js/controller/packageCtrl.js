angular.module('devmtnTravel').controller('packageCtrl', function($scope, mainSrv){
    
    $scope.package = mainSrv.packageInfo

})
