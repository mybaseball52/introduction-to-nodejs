var os = require('os');
var mathfun =  require('./mathfun');

console.log(mathfun.isEven(3) );

var toMb = function(f){
    return(Math.round((f/1024/1024) * 100) / 100);
}

var request = require('request');

request('https://app.pluralsight.com/', function(err,res,body){
    if(!err && res.statusCode === 200){
        console.log(body);
    }
})



console.log('Host:' + os.hostname());
console.log('15 min. load avarage: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');