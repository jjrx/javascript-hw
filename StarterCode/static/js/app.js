// Data from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
	// Clear contents on page 
	d3.select("#query").html("");
	d3.select("tbody").html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  // console.log(filteredData);

  var tbody = d3.select("tbody");

  // If array is empty, inform the user no sightings match the input date
  if (filteredData.length === 0) {
  	d3.select("#query").append("p").text(`No data found for ${inputValue}`)
 	// Else, loop through each object to extract the desired info
  } else {
  	d3.select("#query").append("p").text(`Sightings for ${inputValue}`)

  	// Loop through each object
  	filteredData.forEach((sighting) => {
  		// Append a new row 
		  var row = tbody.append("tr");
		  // Loop through each key, value pair in the object
		  Object.entries(sighting).forEach(([key, value]) => {
		  	// Append the value from the current key, value pair into the table 
		    var cell = tbody.append("td");
		    cell.text(value);
		  });
		});
  }
});
	

  // // BONUS: Calculate summary statistics for the age field of the filtered data

  // // First, create an array with just the age values
  // var ages = filteredData.map(person => person.age);

  // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  // var mean = math.mean(ages);
  // var median = math.median(ages);
  // var mode = math.mode(ages);
  // var variance = math.var(ages);
  // var standardDeviation = math.std(ages);

  // Finally, add the summary stats to the `ul` tag
//   d3.select("tbody")
//     .append("td").text(`Mean: ${mean}`)
//     .append("td").text(`Median: ${median}`)
//     .append("td").text(`Mode: ${mode}`)
//     .append("td").text(`Variance: ${variance}`)
//     .append("td").text(`Standard Deviation: ${standardDeviation}`);
