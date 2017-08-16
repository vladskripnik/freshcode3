'use strict';

phonecatApp.controller('PhoneListCtrl',[
  '$scope','$http', '$location', 'Phone',
  function($scope, $http, $location, Phone,items1,registerstep,info) {
    $scope.items1 = ["img/images/slider/users/1.jpg",
    "img/images/slider/users/2.jpg",
    "img/images/slider/users/3.jpg",
    "img/images/slider/users/4.jpg",
    "img/images/slider/users/5.jpg",
    "img/images/slider/users/6.jpg",
    "img/images/slider/users/7.jpg",
    "img/images/slider/users/8.jpg",
    "img/images/slider/users/9.jpg",
    "img/images/slider/users/10.jpg",
    "img/images/slider/users/11.jpg","img/images/slider/users/12.jpg",
    "img/images/slider/users/13.jpg","img/images/slider/users/14.jpg","img/images/slider/users/15.jpg","img/images/slider/users/16.jpg","img/images/slider/users/17.jpg",
    "img/images/slider/users/18.jpg","img/images/slider/users/19.jpg","img/images/slider/users/20.jpg","img/images/slider/users/21.jpg","img/images/slider/users/22.jpg",
    "img/images/slider/users/24.jpg"];
    $scope.info = {
    sex: null,
    research: null,
    age: null,
    region: null
  }
    Phone.query({phoneId: 'phones'}, function(result) {
      $scope.items2 = result['imageUrl'];
    });
    $scope.registerstep = function(){
      $location.path("/main");
      console.log($scope.info);
      $http.post('/api/v1/regist', $scope.info)
      .success((data) => {
      $scope.info = {};
      $scope.todoData = data;
      console.log(data);
      })
      .error((error) => {
      console.log('Error: ' + error);
      });
    };
  }
  ]);
