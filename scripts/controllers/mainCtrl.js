angular.module("project").controller("mainCtrl", ["$scope", "$http", "$location", 'restService', function ($scope, $http, $location, restService) {

    //Materialize
    $('.modal').modal();
    $('.parallax').parallax();

}]);