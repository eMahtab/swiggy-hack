var appService=angular.module('app.service');

appService.service('Search',function($http,CONSTANT){
   this.getResult = function(area,search) {
       return $http.get(CONSTANT.API_URL+'/city/bangalore/area/'+area+'?search='+search);
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


