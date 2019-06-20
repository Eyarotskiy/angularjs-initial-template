describe("Service Test", function () {

	let service;

	beforeEach(function () {
		angular.mock.module("dataApp");

		angular.mock.inject(function (someService) {
			service = someService;
		})
	});

	it("service initial value should be 0", function () {
		expect(service.getCounter()).toEqual(0);
	});

	it("service increment should increase the value to 1", function () {
		service.incrementCounter();

		expect(service.getCounter()).toEqual(1);
	});
});
