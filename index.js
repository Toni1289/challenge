const fs = require("fs");
csv = fs.readFileSync("input.csv")
// Reading the file using default
// fs npm package
var array = csv.toString().split("\r\n");

const arr = []

for( const i of array){
	const obj = i.split(',')
	arr.push({
		fullname:obj[0],
		eid:obj[1],
		group:obj[2],
		group:obj[3],
		group:obj[4],
		'email Student':obj[5],
  		'phone Student':obj[6],
  		'email Parent':obj[7], 
  		'phone Parent':obj[8], 
  		'invisible':obj[9],
  		'see_all':obj[10]
	})
}

// Convert the resultant array to json and
// generate the JSON output file.
let json = JSON.stringify(arr);
fs.writeFileSync('output.json', json);

