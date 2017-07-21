var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('Directory exists, removing....')
    if(fs.existsSync('temp/new.txt'))
        fs.unlinkSync('temp/new.txt');
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
    process.chdir('temp');
    fs.writeFileSync('test.txt', "Some text");
    fs.renameSync('test.txt','new.txt');
    console.log("File has size: " + fs.statSync('new.txt').size + ' bytes.');
    console.log("File content: " + fs.readFileSync('new.txt').toString());
}

//async
fs.mkdir('temp', function(err) {
    fs.exists('temp', function(exists) {
        if (exists) {
            process.chdir('temp');
            fs.writeFile('test.txt', 'This is some test text for the file', function(err) {
                fs.rename('test.txt','new.txt', function(err) {
                    fs.stat('new.txt', function(err, stats) {
                        console.log('File has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function(err, data) {
                            console.log('File contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    });
});

var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64');

console.log(b.toString('utf-8',0,2));