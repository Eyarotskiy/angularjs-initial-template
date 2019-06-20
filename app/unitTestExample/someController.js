dataApp.controller('someController', function ($scope, $http) {
	$scope.counter = 0;

	$scope.incrementCounter = function () {
		$scope.counter++;
	};

	$http.get("persons.json").then(
		function (data) {
			$scope.persons = data;
		}, function (error) {
			console.log(error);
		});
});
