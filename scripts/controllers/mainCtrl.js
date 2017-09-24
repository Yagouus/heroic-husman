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

        $('#processModal').modal('close');

        var config = {
            headers: {
                'Content-Type': "application/json"
            }
        };

        var text = "NOMBRE: " + $scope.name
            + "\nTLF: " + $scope.phone
            + "\nMENSAJE: " + $scope.msg;

        var mail = {
            "to": $scope.email,
            "subject": "CONSULTA WEB",
            "text": text
        };

        return $http.post(restService.url + '/email', mail, config)
            .then(function success(response) {
                swal('Listo!', 'Tu mensaje ha sido enviado', 'success');
                $('#uploadModal').modal('close');
                return response;
            }, function error(response) {
                swal('Error!', 'An error ocurred :(', 'error')
            });
    };

    $scope.setMessage = function (message) {
        $scope.msg = message;
        $('#processModal').modal('open');
    }


}]);