angular.module("project").service("restService", ["$http", "$location", function ($http, $location) {

    this.get = function (url, service) {
        return $http.get(url + service);
    };


    //Backend url
    //this.url = 'http://localhost:3000';
    this.url = 'http://crossfitberkana.com:3000';

}]);
