angular.module("project").controller("navbarCtrl", ["$scope", "$http", '$location', '$anchorScroll', 'restService', function ($scope, $http, $location, $anchorScroll, restService) {

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
    };

    //ScrollTo
    $scope.scrollTo = function(id) {

        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };





}]);