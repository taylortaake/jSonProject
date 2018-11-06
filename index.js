readJSON('data.json', function(error, manifest){
 
    manifest.name
    // => 'read-json'
 

})


// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

var readItems = fs.readFileSync("data.json");

var jsonData = JSON.parse(readItems);
items = jsonData.items;
var i = 0;
_.forEach(items, function (items, i) {
    fullName = items.fname + ' ' + items.lname;
    console.log("Full Name: ", fullName, " Age: ", items.age);
    i++;
});






