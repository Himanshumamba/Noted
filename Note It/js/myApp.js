

var app  =angular.module("noteAll",['ngAnimate']);

app.controller("listCtrl" ,function($scope){

	$scope.products = ["apple","eggs","mangoes","Bananans","Orange","Elephant","Ballons","jams"];

	$scope.addItems = function(){

		$scope.errortext = "";
		
        
        if(!$scope.addMe){return;}


		else if($scope.products.indexOf($scope.addMe) == -1){
          $scope.products.push($scope.addMe); 
          $scope.addMe='';   
		}

		else{

          $scope.errortext = "Note Already Existed!";

		}


 }


$scope.removeItem = function(x){

$scope.products.splice(x,1);


}



});