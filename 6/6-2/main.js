var a = 1;

function* fn(){
    a++;
    yield;
    console.log(a);
    
}

var it = fn();

function increment(){
    a++;
}

it.next(); //uruchamiamy generator
console.log(a);
increment();
it.next();