//Modules
angular.module("project", ['ngRoute']);

//Sections
angular.module("project").config(["$routeProvider", function ($routeProvider) {

//Routing
    $routeProvider
        .when("/main", {
            controller: "mainCtrl",
            templateUrl: "views/main.html"
        })
        .otherwise("/main");
}]);