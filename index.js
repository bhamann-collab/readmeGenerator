var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var urlExists = require('url-exists');


// request.open('GET', 'https://api.github.com/repos/facebook/react', true)
// request.responseType = 'json';
// request.onload = function() {
//     var status = request.status
//     if (status === 200) {
//         var dataObj = JSON.parse(request.responseText)
//         console.log(`Name: ${dataObj.name}`)
//         console.log(`Description: ${dataObj.description}`)
//         console.log(`License: ${dataObj.license}`)
//         urlExists('https://www.npmjs.com/package/react', function(err, exists) {
//             if(exists === true) {
//                 console.log(`Installation: npm install react`)
//             } else {
//                 console.log(`Installation: Not found`)
//             } 
//         });

//     }
// }
// request.send()



fs.writeFile('TEST.md','generates a readme file', function (err) {
    if (err) throw err;
    console.log('File is created successfully.')
})

