(function($){

	var dataSet = [5, 10, 15, 20, 25]
	var body = d3.select('.d3');

	body.selectAll('p')
		.data(dataSet)
		.enter()
		.append('p')
		.html(function(d){return d;});

		console.log(body.selectAll('p'));
}(jQuery));