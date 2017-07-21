process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(d){
    console.log("I've recieded data -> " + d);
});

process.stdin.on('error', function () {
    console.log("Error");
});

process.stdin.on('SIGTERM', function () {
    // console.log("I've done");
    process.stderr.write("Don't terminate me!");
});

process.stdin.on('end', function () {
    console.log("I've done");
});

console.log("Node is running as process #" + process.pid);