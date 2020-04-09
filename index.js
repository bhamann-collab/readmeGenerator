var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/repos/bhamann-collab/Card_Game', true)
request.responseType = 'json';
request.onload = function() {
    var status = request.status
    if (status === 200) {
        var dataObj = JSON.parse(request.responseText)
        console.log(dataObj.name)
    } else {
        
    }
}
request.send()
