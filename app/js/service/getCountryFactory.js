dataApp.factory('getCountryFactory', ($http, $rootScope, graphFactory) => {
	const root = {};

	/**
	 * Getting the list of countries from DB (JSON file in our case)
	 */
	root.getCountryList = () => {
		$http.get('/json/countryList.json').then(
			response => {
				$rootScope.countryList = response.data;
			},
			errorResponse => {
				console.log(`Something went wrong: ${errorResponse}`);
			});
	};

	/**
	 * Getting the country data
	 *
	 * @param country, id - country name and id, contained in the URL's parameters
	 */
	root.getData = (country, id) => {
		$http.get('/json/countryData.json').then(
			response => {
				const selectedCountryData = response.data.find(entry => entry.id === parseInt(id));
				const timeSeriesData = graphFactory.sortTimeSeries(selectedCountryData);
				$rootScope.countryName = country;

				root.showData(selectedCountryData);
				graphFactory.draw(timeSeriesData[0], timeSeriesData[1]);
			},
			errorResponse => {
				console.log(`Something went wrong: ${errorResponse}`);
			});
	};

	/**
	 * Showing the data of the selected country
	 *
	 * @param selectedCountryData - JSON with the data for the selected сountry
	 */
	root.showData = selectedCountryData => {
		$rootScope.countryStatus = selectedCountryData.status;
		$rootScope.countryMaxValue = root.findValue('max', selectedCountryData.timeseries);
		$rootScope.countryMinValue = root.findValue('min', selectedCountryData.timeseries);
	};

	/**
	 * Returns min/max value of timeseries country data
	 *
	 * @param Array[string, number] valuesArray - country timeseries array with data
	 * @param order - 'min' or 'max'
	 * 
	 * @return finalValue - min/max value of the country
	 */
	root.findValue = (order, valuesArray) => {
		let finalValue = (order === 'max') ? 0 : 100;
		let currentValue;

		for (let i = 0; i < valuesArray.length; i++) {
			currentValue = valuesArray[i][1];

			if (order === 'max' && currentValue > finalValue) {
				finalValue = valuesArray[i][1];
			} else if (order === 'min' && currentValue < finalValue) {
				finalValue = valuesArray[i][1];
			}
		}

		return finalValue;
	};

	return root;
});
