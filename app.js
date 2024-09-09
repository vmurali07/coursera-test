(function(){
    'use strict';
  
  angular.module('FoodCheckApp', [])
  .controller('FoodCheckController', FoodCheckController);
  
  FoodCheckController.$inject = ['$scope'];
  function FoodCheckController($scope){
    $scope.foodlist = "";
    $scope.amount = 0;
    $scope.message = "";
  
    $scope.foodMessage = function(){
        if($scope.foodlist == 0){
        $scope.message = "Please enter data first";
      }
      else if($scope.foodlist.split(',').length < 4 && $scope.foodlist.split(',').length > 0){
        $scope.message = "Enjoy!";
      }
      else if($scope.foodlist.split(',').length > 3){
        $scope.message =  "Too Much!!";
      }
      return $scope.message;
    };
  }
  }())
  