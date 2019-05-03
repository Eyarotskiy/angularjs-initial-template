dataApp.controller('mainController', ($rootScope, getCountryFactory) => {

	$rootScope.countryList = [];
	$rootScope.showCountry = false;

	getCountryFactory.getCountryList();
});
