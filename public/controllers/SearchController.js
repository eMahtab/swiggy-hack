var appControllers=angular.module('app.controllers',[]);

appControllers.controller('SearchController',function($scope,Area){

	$scope.areas=[];
	$scope.selectedArea=null;

     Area.getAreas()
         .then(function(result){
         	console.log("Areas "+JSON.stringify(result.data))
         	result.data.forEach(function(area){
         		console.log("F "+JSON.stringify(area._fields[0].properties.location))
         		$scope.areas.push(area._fields[0].properties.location);
         	})
         	//$scope.areas.push(
         })

    $scope.ad = function(area){
    	console.log("Changed "+area )
    	$scope.selectedArea = area;
    	var myEl = angular.element( document.querySelector( '#jk' ) );
        myEl.html(area+' <span class="caret"></span>');     
    } 

    $scope.searchIt = function(keyEvent){
    	if(keyEvent.which === 13){
    		console.log("Awesome")
    	}
    	console.log("Searching ... "+keyEvent)
    }    


});