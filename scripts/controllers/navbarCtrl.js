angular.module("project").controller("navbarCtrl", ["$scope", "$http", '$location', 'restService', function ($scope, $http, $location, restService) {

    //Positioning
    $('.target').pushpin({
        top: $(window).height() - 80
    });
    $(window).resize(function () {
        $('.target').pushpin({
            top: $(window).height() - 80
        });
    });
    $(".button-collapse").sideNav();

    $scope.route = function (route) {
        return route === $location.path();

    }


}]);