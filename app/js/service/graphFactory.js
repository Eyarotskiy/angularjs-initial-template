dataApp.factory('graphFactory', $document => {
	const root = {};

	/**
	 * Initializing and drawing the graph with timeseries data with Chart.js library
	 *
	 * @param countryTime, countryValue - two arrays with timeseries data from JSON
	 */
	root.draw = (countryTime, countryValue) => {
		$document.ready(() => {
			const chartCanvas = document.getElementById('countryChart');

			if (chartCanvas) {
				root.chart = new Chart(chartCanvas, {
					type: 'line',
					data: {
						labels: countryTime,
						datasets: [{
							data: countryValue,
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
							],
							borderColor: [
								'rgba(255,99,132,1)',
							],
							borderWidth: 1
						}]
					},
					options: {
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						}
					}
				});
			}
		});

		Chart.defaults.global.defaultFontColor = '#fff';
		Chart.defaults.global.legend.display = false;
	};

	/**
	 * This function takes the country JSON data, finds the array for the selected country, sorts it by time and separates into two arrays (necessary for the chart)
	 *
	 * @param selectedCountryData - JSON with the data for the selected сountry
	 *
	 * @return Array[Array countryTimeArray, Array countryIdArray] - array which contains two separate arrays: timeSeries time and value
	 */
	root.sortTimeSeries = selectedCountryData => {
		const countryTimeArray = [];
		const countryIdArray = [];

		// sorting the arrays with data by time:
		const timeSeriesByDate = selectedCountryData.timeseries.sort((a, b) => {
			return new Date(a[0]).getTime() - new Date(b[0]).getTime() > 0 ? 1 : -1;
		});

		for (let i = 0; i < timeSeriesByDate.length; i++) {
			countryTimeArray.push(new Date(timeSeriesByDate[i][0]).toString('MMMM dS, yyyy HH:mm')); // converting time to more readable format with Date.js
			countryIdArray.push(timeSeriesByDate[i][1]);
		}

		return [countryTimeArray, countryIdArray];
	};

	return root;
});
