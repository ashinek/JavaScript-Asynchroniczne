var p1 = new Promise(function(resolve, reject){
    resolve(10,2,3); //pojawi się tylko jedna wartość podana jako pierwsza
    //resolve([10,2,3]); //tablica jest jednym obiektem : >
    resolve(11); //pozostałe resolve są pomijane!
    resolve(12);
    resolve(13);
});


//resolve jest niemutowalny, tj nie mogę ich zmienić globalnie. Wywołana ponownie będzie miała tę samą wartość początkową.
p1.then(function(v){
    v=v*3;
    console.log(v);
});

p1.then(function(v){
    console.log(v);
});


console.log('start');
