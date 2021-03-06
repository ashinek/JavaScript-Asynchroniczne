function logValue(v) {
    console.log(v);
}

var p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(1);
    }, Math.random() * 4000);
});

var p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(2);
    }, Math.random() * 4000);
});

//jakikolwiek 'Reject' przerywa wykonanie całości.
Promise.all([p1,p2]).then(logValue);