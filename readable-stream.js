//Read
var request = require('request');

var s = request('http://www.pluralsight.com/');

s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});



//Write
console.log("stdout is writable? " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");


//Pipe
var request = require('request');
var fs = require('fs');
var zlib = require('zlib');
// Version 1:  Pipe HTML to standard out
var s = request('http://www.pluralsight.com/');

s.pipe(process.stdout);

// Version 2:  Chain request and pipe together
//request('http://www.pluralsight.com/').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
//request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
//request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));