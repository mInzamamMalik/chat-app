/**
 * Created by 192.168.3.24 on 7/11/2015.
 */



var app = angular.module("app.home", []);

app.controller("HomeController",function(dataservice){

this.signup = function($location){
       dataservice.users.$add(this.username);
        $location.path("/messages");
}


});