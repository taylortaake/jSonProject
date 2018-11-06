readJSON('data.json', function(error, manifest){
 
    manifest.name
    // => 'read-json'
 

})


var fs = require("fs");

// calling lodash
var _ = require('lodash');

var items = fs.readFileSync("data.json");

var jsonData = JSON.parse(contents);
items = jsonData.items;
var i = 0;
_.forEach(items, function (items, i) {
    fullName = items.fname + ' ' + items.lname;
    console.log("Full Name: ", fullName, " Age: ", items.age);
    i++;
});






