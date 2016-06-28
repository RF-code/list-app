var colors = [
		"red", 
		"orange", 
		"yellow", 
		"green",
		"blue",
		"indigo",
		"violet",
		];

var count = 0;

var cycle = function(array) {
	console.log(array[count]);
	if (count == array.length-1) {
		count = 0;
	} else {
		count++;
	};
};

var display = function(){
	cycle(colors);
};