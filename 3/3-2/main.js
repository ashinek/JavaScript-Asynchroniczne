setTimeout(() => {
    console.log(1);
},1000);
/* Dwa sposoby przekazywania wartosci do callback w setTimeout
function showValue(v){
    return function (){
        console.log(v);
    }
}

setTimeout(showValue(5),1000);*/

function showValue(v){
    console.log(v);
    
}

setTimeout(showValue,1000,5);

//wielopoziomowe callbacki

setTimeout(function(){
    console.log('1');
    setTimeout(function(){
        console.log('2');
        
    },1000);
},1000);
