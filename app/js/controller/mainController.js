dataApp.controller('mainController', function($rootScope, getCountryFactory) {

	$rootScope.countryList = [];
	$rootScope.showCountry = false;

	getCountryFactory.getCountryList();
});
