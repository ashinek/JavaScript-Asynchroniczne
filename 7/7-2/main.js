/*async function fn(){
    return 10;
}

fn().then(function(v){
    console.log(v); 
});
*/

async function fn(){
    var p1 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(10);
        },2000);
    });
    var result = await p1;
    console.log(result);
}

fn();