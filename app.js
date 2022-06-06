(function(){
    'use strict';

    console.log("Starting the angular app");

    let x=1;

    angular.module('MyAngularApp', [])
    .controller("MyFirstController", ['$scope', '$filter', '$injector' ,'$log', DIController]);
    
    function DIController ( $scope, 
                            $filter,
                            $injector,
                            $log) {
        console.log ("Starting the controller");

        const me=this;

        me.name=""; 
        me.totalValue=0;

        me.displayNumeric=function () {
            let totalNameValue=calculateNumerForString(me.name);
            me.totalValue=totalNameValue;
        }

        function calculateNumerForString(string) {
            var totalStringValue=0;
            for (var i=0;i<string.length;i++) {
                totalStringValue+=string.charCodeAt(i);
            }
            return totalStringValue;
        }


        me.sayHello = function () {
            return "Hi there!";
        }

        me.upperCase=function () {
            var upCase=$filter("uppercase");
            me.textInput=upCase(me.textInput);
        }

        console.log($injector.annotate(DIController));

        $log.log("Hola");

    } ;

} ) ();
