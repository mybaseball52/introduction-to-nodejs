var maxTime = 1000;

var isEven = function(a,callback){
    return (a%2 === 0) ? true : false;
}

module.exports.isEven = isEven;

module.exports.foo = 'bar';