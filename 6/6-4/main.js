function add10(v){
    console.log(v + 10);
}

function* gen(){
    var value = yield;
    console.log(value);
}

var it = gen();
it.next();
it.next(5);