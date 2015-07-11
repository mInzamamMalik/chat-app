/**
 * Created by 192.168.3.24 on 7/11/2015.
 */
var app = angular.module("app", ['ngNewRouter', 'ngMaterial',
    'firebase','app.home']);

app.controller("AppController",AppController);

AppController.$routeConfig = [
    {path : '/'     ,    component : 'home'  }
];

function AppController($router,dataservice){


}


app.service("dataservice",function($firebaseArray){

    var ref = new Firebase("https://inzi-chat-app.firebaseio.com/users");
    this.users = $firebaseArray(ref);





});
