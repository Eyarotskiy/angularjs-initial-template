dataApp.factory("someService", function () {
	let counter = 0;

	return {
		incrementCounter: function () {
			counter++;
		},
		getCounter: function () {
			return counter;
		}
	}
});
