var request = require('request');

// request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
//     console.log(body);
//     request('https://jsonplaceholder.typicode.com/posts/2', function(error, response, body) {
//         console.log(body);
//     });
// });

function getResource(url) {
    return new Promise(function(resolve, reject){
        request(url, function(error, response, body){
            if (error) {
                reject();
            } else {
                resolve(body);
            }
        });
    });
}

var post1 = getResource('https://jsonplaceholder.typicode.com/posts/1');
var post2 = getResource('https://jsonplaceholder.typicode.com/posts/2');
var post3 = getResource('https://jsonplaceholder.typicode.com/posts/3');

function logText(text){
    console.log(text);
}

post1.then(logText)
.then(function(){
    return post2;
}).then(logText)
.then(function(){
    return post3;
}).then(logText);