dataApp.filter("changeCase", function () {
	return function (value, toUpper) {
		if (angular.isString(value)) {
			const processedValue = toUpper ? value.toUpperCase() : value.toLowerCase();

			return processedValue;
		} else {
			return value;
		}
	};
});
