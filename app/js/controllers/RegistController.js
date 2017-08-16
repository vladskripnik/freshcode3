angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.passData = {};
  $scope.todoData = {};
  $scope.info = {
    login: null,
    password: $scope.passData
  }
  console.log($scope.info);
  // Get all todos
  $http.get('/api/v1/regist')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
  // Create a new todo
  $scope.createTodo = () => {
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
  // Delete a todo
  $scope.deleteTodo = (todoID) => {
    $http.delete('/api/v1/regist/' + todoID)
    .success((data) => {
      $scope.todoData = data;
      console.log(data);
    })
    .error((data) => {
      console.log('Error: ' + data);
    });
  };
});