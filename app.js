(function(){
    'use strict';

    console.log("Starting the angular app");

    let x=1;

    angular.module('MyAngularApp', [])
    .controller("MyFirstController", ['$scope', '$filter', '$injector' ,'$log', 'lovesFilter', '$timeout' ,DIController])
    .filter ('loves', lovesFilter);
    
    function DIController ( $scope, 
                            $filter,
                            $injector,
                            $log,
                            lovesFilter,
                            $timeout) {

        console.log ("Starting the controller");

        const me=this;

        me.name=""; 
        me.totalValue=0;
        me.cookieCost=.45;
        $scope.onceCounter=0;
        $scope.counter=0;

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

        me.sayLovesMessage = function () {
            let msg = "Manu likes cookies";
            msg = lovesFilter (msg);
            return msg;
        }

        me.upperCase=function () {
            var upCase=$filter("uppercase");
            me.textInput=upCase(me.textInput);
        }

        me.showMeInformation = function () {
            $log.log(me);
        }

        me.showScopeInformation = function () {
            $log.log($scope);
        }

        me.showNumberOfWatchers = function () {
            $log.log("Number of Watchers: ", $scope.$$watchersCount);
        }

        me.countOnce = function () {
            $scope.onceCounter=1;
            $log.log("Invoked the countOnce function");
        }

        me.incrementCounter = function () {
            setTimeout(function () {
                $scope.counter++;
                $log.log("Counter incremented!");
                $scope.$digest();
            },2000);
        }

        me.incrementCounterApply = function () {
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.counter++;
                    $log.log("Counter incremented using $apply!");
                });
            },2000);
        }

        me.incrementTimeoutCounter = function () {
            $timeout (function () {
                $scope.counter++;
                $log.log("Counter incremented using angular timeout!");
            }, 2000);
        }

        $scope.$watch('onceCounter', function (newValue, oldValue) {
            $log.log("Once Old value: ", oldValue);
            $log.log("Once New value: ", newValue);
            });

        $scope.$watch('counter', function (newValue, oldValue) {
            $log.log("Counter Old value: ", oldValue);
            $log.log("Counter New value: ", newValue);
            });

        $scope.$watch(function () {
            $log.log("Digest Loop Fired!");
            });

        console.log($injector.annotate(DIController));

        $log.log("Hola");

    } ;

    // Custom Filter
    // replaces the works likes by loves
    function lovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace ("likes", "loves");
            return input;
        }
    }

} ) ();
