var appService=angular.module('app.service',[]);

appService.service('Area',function($http,CONSTANT){
   this.getAreas = function() {
       return $http.get(CONSTANT.API_URL+'/city/bangalore/areas');
     };

   /*this.getBookmarks = function() {
        return $http.get(CONSTANT.API_URL+'/bookmarks?created_by='+Storage.getUsername());
      };

   this.createBookmark = function(bookmark) {
        return $http.post(CONSTANT.API_URL+'/bookmark',bookmark,{headers:{"Content-Type":"application/json"}});
      };

   this.deleteBookmark = function(_id){
     return $http.delete(CONSTANT.API_URL+'/bookmark/'+_id);
   };

   this.updateBookmark = function(_id,bookmark){
     return $http.put(CONSTANT.API_URL+'/bookmark/'+_id,bookmark,{headers:{"Content-Type":"application/json"}});
   }*/
});


