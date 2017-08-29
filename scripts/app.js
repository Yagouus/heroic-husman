//Modules
angular.module("project", ['ngRoute', 'ngMap']);

//Sections
angular.module("project").config(["$routeProvider", function ($routeProvider) {

//Routing
    $routeProvider
        .when("/main", {
            controller: "mainCtrl",
            templateUrl: "views/main.html",
            reloadOnSearch: false
        })
        .when("/hero", {
            controller: "heroCtrl",
            templateUrl: "views/hero.html",
            reloadOnSearch: false
        })
        .otherwise("/main");
}]);