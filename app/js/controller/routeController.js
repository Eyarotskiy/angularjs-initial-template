dataApp.controller('routeController', ($scope, $rootScope, $routeParams, getCountryFactory, graphFactory) => {

	$scope.showCountryInfo = () => {
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
