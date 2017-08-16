'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);
/* Config */
phonecatApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    $routeProvide
    .when('/',{
      templateUrl:'template/FirstStepRegistration.html',
      controller:'PhoneListCtrl'
    })
    .when('/main',{
      templateUrl:'template/SecondStepRegistration.html',
      controller:'ContactCtrl'

    })
    .when('/authorization',{
      templateUrl:'template/authorization.html',
      controller:'authorizationCtrl'
      
    })
    .when('/phones/:phoneId', {
      templateUrl:'template/phone-detail.html',
      controller:'PhoneDetailCtrl'
    })
    .when('/exit', {
      templateUrl:'template/exit.html',
      controller:'exitCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
  }
  ]);
