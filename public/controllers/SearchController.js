var appControllers=angular.module('app.controllers',[]);

appControllers.controller('SearchController',function($scope,Area,Search){

	$scope.areas=[];
	$scope.selectedArea=null;
	$scope.search={term:null,search_results:[]};
	$scope.ratings={rate:3.5};

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
    		console.log("Lets search "+$scope.selectedArea+" "+$scope.search.term)
            Search.getResult($scope.selectedArea,$scope.search.term)
                  .then(function(result){
                  	console.log("Oye "+JSON.stringify(result.data));
                  	$scope.search.search_results=result.data;
                  	/*result.data.forEach(function(item){
                      $scope.search.search_results.push(item._fields[0]);
                  	})*/
                  	console.log("Oye 2 "+JSON.stringify($scope.search.search_results));
                  })
                  .catch(function(err){
                  	console.log("Error "+err);
                  })

    	}
    	console.log("Searching ... "+keyEvent)
    }    


});