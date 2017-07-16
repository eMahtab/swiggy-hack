var appControllers=angular.module('app.controllers',[]);

appControllers.controller('SearchController',function($scope,Area,Search){

	$scope.areas=[];
	$scope.selectedArea=null;
	$scope.search={term:null,search_results:[]};
	
	$scope.sorted_prices=[];
	$scope.show_search_options=false;
	$scope.sorted_prices_range=[];
	

	function sortNumber(a,b) {
      return a - b;
    }

	function sortPriceWise(){
		console.log("For Sorting "+JSON.stringify($scope.search.search_results));
		$scope.search.search_results.forEach(function(i){
			console.log("Adding "+i._fields[1].properties.price.low)
            $scope.sorted_prices.push(i._fields[1].properties.price.low) 
            $scope.sorted_prices.sort(sortNumber);            
		})
        console.log("After Sort "+$scope.sorted_prices)
        var x;
        for(x=0;x<$scope.sorted_prices.length;x++){
           if(x==0){
           	$scope.sorted_prices_range[0]={"value":$scope.sorted_prices[0],"msg":"Under "+$scope.sorted_prices[0]}
           }else {
           	$scope.sorted_prices_range[x]={"value":$scope.sorted_prices[x],
           	                               "msg":$scope.sorted_prices[x-1]+"-"+$scope.sorted_prices[x]}
           }
           console.log("Array "+JSON.stringify($scope.sorted_prices_range[x]));
        }
        

	}

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
                  	if(result.data.length > 0){
                  		$scope.show_search_options=true;
                  	}
                  	sortPriceWise();
                  	console.log("Oye 2 "+JSON.stringify($scope.search.search_results));
                  })
                  .catch(function(err){
                  	console.log("Error "+err);
                  })

    	}
    	console.log("Searching ... "+keyEvent)
    }    


});