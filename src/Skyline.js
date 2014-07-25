function Skyline(){
	this.input;
}

Skyline.prototype.AddBuilding = function(start, height, end) {
	this.input = [start, height, end];
};

Skyline.prototype.GetSkyline = function(){
	return this.input;
};