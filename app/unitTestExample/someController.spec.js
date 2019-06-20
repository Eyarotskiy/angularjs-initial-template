describe('Some Controller', function () {

	let mockScope, backend, controller;

	beforeEach(function () {
		angular.mock.module('dataApp');

		angular.mock.inject(function ($controller, $rootScope, $http, $httpBackend) {
			mockScope = $rootScope.$new();

			controller = $controller('someController', {
				$scope: mockScope
			});

			backend = $httpBackend;

			backend.when("GET", "persons.json").respond([
				{"name": "Ivan1"},
				{"name": "Ivan2"}
			]);

			backend.when("GET", "/view/country.html").respond([]);

			backend.flush();
		})
	});

	it('should initialize counter value with 0', function () {
		expect(mockScope.counter).toEqual(0);
	});

	it('should increase counter value by 1', function () {
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});

	it("check whether all requests are handled", function () {
		backend.verifyNoOutstandingExpectation();
	});

	it("the length of persons should be 2", function () {
		expect(mockScope.persons.data.length).toEqual(2);
	});

	it("check the names of persons", function () {
		expect(mockScope.persons.data[0].name).toEqual('Ivan1');
		expect(mockScope.persons.data[1].name).toEqual('Ivan2');
	});

});
