angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
	
	$scope.learningNgChange = function() {
    	console.log("An input changed!");
	};

	$scope.helloConsole = dataService.helloConsole;

	dataService.getTodos(function(response) {
		console.log(response.data);
		$scope.todos = response.data;
	});

})

.service('dataService', function($http) {

	this.helloConsole = function() {
		console.log('This is the hello console service!');
	};

	this.getTodos = function(callback) {
		$http.get('./mock/todos.json')
		.then(callback)
	};

});