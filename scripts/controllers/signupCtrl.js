/**
 * Created by yagouus on 31/08/17.
 */
angular.module("project").controller("signupCtrl", ["$scope", "$http", "$location", '$anchorScroll', 'restService', 'NgMap', function ($scope, $http, $location, $anchorScroll, restService, NgMap) {

    //Materialize
    $('.modal').modal();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $(document).ready(function() {
        $('select').material_select();
    });


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
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        };

        var fd = new FormData();
        fd.append('name', $scope.name);
        fd.append('sender', $scope.email);
        fd.append('tlf', $scope.phone);
        fd.append('msg', 'PREINSCRIPCION INICIACION -> ' + 'PREFERENCIA HOARIA:' + $scope.msg);

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

    $scope.setMessage = function(message){
        $scope.msg = message;
        $('#processModal').modal('open');
    }


}]);