(function(){
    'use strict';

    console.log("Starting the angular app");

    var x=1;

    angular.module('MyAngularApp', [])
    .controller("MyFirstController", function() {
        console.log ("Starting the controller");
    } );

} ) ();
