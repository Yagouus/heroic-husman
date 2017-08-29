angular.module("project").controller("navbarCtrl", ["$scope", "$http", '$location', '$anchorScroll', 'restService', function ($scope, $http, $location, $anchorScroll, restService) {

    //Positioning
    $('.target').pushpin({
        top: $(window).height()
    });

    $(window).resize(function () {
        $('.target').pushpin({
            top: $(window).height()
        });
    });

    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
        closeOnClick: true
    });

    $scope.route = function (route) {
        return route === $location.path();
    };

    //ScrollTo
    $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };





}]);