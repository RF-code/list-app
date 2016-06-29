var colors = [
		"RED", 
		"ORANGE", 
		"YELLOW", 
		"GREEN",
		"BLUE",
		"INDIGO",
		"VIOLET",
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
	document.body.style.backgroundColor = colors[count]
	cycle(colors);
};

var listAll = function(array){
	for (var i = 0; i < array.length; i++) {
		document.getElementById('colorSpace').innerHTML +=
		"<li>" + array[i] + "</li>";
	}
}

listAll(colors);