var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {templateUrl : "content/home.html"})
    .when("/page1", {templateUrl : "content/default.html"})
    .when("/page2", {templateUrl : "content/default.html"})
    .when("/page3", {templateUrl : "content/default.html"})
    .when("/page4", {templateUrl : "content/default.html"});
});