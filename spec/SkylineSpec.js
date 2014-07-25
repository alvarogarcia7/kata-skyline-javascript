describe("Skyline", function(){
	var skyline;
	beforeEach(function(){
		skyline = new Skyline();
	});

	it("should create an object", function(){
		expect(skyline).toBeTruthy();
		//skyline = system / subject under test
	});
	it("should accept a single building", function(){
		skyline.AddBuilding(1,11,5);
		expect(skyline.GetSkyline()).toEqual([1,11,5]);
	});

	//AAA
	//Arrange - Act - Assert
});

// margarita, edwin, alvaro