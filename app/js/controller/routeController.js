dataApp.controller('routeController', function($scope, $rootScope, $routeParams, getCountryFactory, graphFactory)  {

	$scope.showCountryInfo = function() {
		if (Object.keys($routeParams).length) {
			$rootScope.showCountry = true;
			$rootScope.activeCountry = $routeParams.country;

			getCountryFactory.getData($routeParams.country, $routeParams.id);
			graphFactory.draw();
		}
		else {
			$rootScope.showCountry = false;
		}
	};

	$scope.showCountryInfo();
});
