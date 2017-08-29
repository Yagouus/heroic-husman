angular.module("project").controller("mainCtrl", ["$scope", "$http", "$location", '$anchorScroll', 'restService', 'NgMap', function ($scope, $http, $location, $anchorScroll, restService, NgMap) {

    //Materialize
    $('.modal').modal();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

    //Map
    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    $scope.sendMail = function () {


        var config = {
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        };

        var fd = new FormData();
        fd.append('name', $scope.name);
        fd.append('name', $scope.email);
        fd.append('name', $scope.phone);
        fd.append('name', $scope.msg);

        console.log(restService.url);


        return $http.post(restService.url + '/email', fd, config)
            .then(function success(response) {
                swal('Listo!', 'Tu mensaje ha sido enviado', 'success');
                $('#uploadModal').modal('close');
                return response;
            }, function error(response) {
                swal('Error!', 'An error ocurred :(', 'error')
            });
    };


}]);