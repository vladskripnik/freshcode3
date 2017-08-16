'use strict';

/* Phone Detail Controller */
phonecatApp.controller('PhoneDetailCtrl',[
  '$scope','$http', '$location', '$routeParams', 'Phone',
  function($scope, $http, $location, $routeParams, Phone) {
    $scope.phoneId = $routeParams.phoneId;
    Phone.get({phoneId: $routeParams.phoneId}, function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
      $scope.phonename = data.id;
      //data.$save();
    });
    $scope.phonedata = 'Nexus-S';   
    $scope.rateFunction = function(rating) {
      $scope.score = rating;
    };
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
    if ($scope.phoneId == $scope.phonedata) {
      $http.get('http://smktesting.herokuapp.com/api/reviews/1')
      .success(function (data){
        $scope.items = data ;
      })
      .error(function (data,status){
        console.log(data);
        console.log(status);
      })}
      else
      {
        $http.get('http://smktesting.herokuapp.com/api/reviews/2')
        .success(function (data){
          $scope.items = data ;
        })
        .error(function (data,status){
          console.log(data);
          console.log(status);
        })};
        $scope.AddComment = function () {
          var data =({
            rate: $scope.score,
            text: $scope.textcomment,
          });
          if($scope.phoneId == $scope.phonedata){
            if(localStorage.getItem('Token') == undefined || localStorage.getItem('Token') == null){
              alert('Вам следует зарегистрироваться!');
            }
            else
            {
              $http.post('http://smktesting.herokuapp.com/api/reviews/1', data,{ headers: { 'Authorization': 'Token '+ localStorage.getItem('Token')}})
              .success(function (result){
              })
              .error(function (data,status){
                console.log(data);
                console.log(status);
              });
            }
          }
          else {
            if(localStorage.getItem('Token') == undefined){
              alert('Вам следует зарегистрироваться!');
            }
            else{$http.post('http://smktesting.herokuapp.com/api/reviews/2', data,{ headers: { 'Authorization': 'Token '+ localStorage.getItem('Token')}})
              .success(function (result){
              })
            .error(function (data,status){
              console.log(data);
              console.log(status);
            });
          }
        }
      }
    }
    ]);