angular.module("project").service("restService", ["$http", "$location", function ($http, $location) {

    this.get = function (url, service) {
        return $http.get(url + service);
    };

    this.getSynsetWithID = function (synsetID) {
        return $http.get("https://babelnet.io/v4/getSynset?id=" + synsetID + "&key=1e545625-7f8d-44be-a678-140b25965229")
    };

    //Backend url
    this.url = 'http://localhost:8080';
    //this.url = 'http://crossfitberkana.com:8080';

}]);