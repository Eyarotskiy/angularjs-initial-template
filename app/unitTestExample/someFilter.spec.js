describe("Filter Test", function () {

	let filterInstance;

	beforeEach(function () {
		angular.mock.module("dataApp");

		angular.mock.inject(function ($filter) {
			filterInstance = $filter("changeCase");
		})
	});

	it("should transform to lower case", inject(function () {
		const result = filterInstance("Hello World");

		expect(result).toEqual("hello world");
	}));

	it("should transform to upper case", inject(function () {
		const result = filterInstance("Hello World", true);

		expect(result).toEqual("HELLO WORLD");
	}));

});
