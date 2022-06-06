(function(){
    'use strict';

    console.log("Starting the angular app");

    var x=1;

    angular.module('MyAngularApp', [])
    .controller("MyFirstController", ['$scope', '$filter', '$injector' ,'$log', DIController]);
    
    function DIController (
                                              $scope, 
                                              $filter,
                                              $injector,
                                              $log) {
        console.log ("Starting the controller");

        $scope.name=""; 
        $scope.totalValue=0;

        $scope.displayNumeric=function () {
            var totalNameValue=calculateNumerForString($scope.name);
            $scope.totalValue=totalNameValue;
        }

        function calculateNumerForString(string) {
            var totalStringValue=0;
            for (var i=0;i<string.length;i++) {
                totalStringValue+=string.charCodeAt(i);
            }
            return totalStringValue;
        }


        $scope.sayHello = function () {
            return "Hi there!";
        }

        $scope.upperCase=function () {
            var upCase=$filter("uppercase");
            $scope.textInput=upCase($scope.textInput);
        }

        console.log($injector.annotate(DIController));

        $log.log("Hola");

    } ;

} ) ();
