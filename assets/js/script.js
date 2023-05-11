fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyDPsiNcDrNWoAHFp1fGOwZtBuGMJRUchhs`,{
    method: "GET",
    headers: {
        "Accept": "application/json"
    },
})
    .then(function (response) {
        return response.json();
})
    .then(function (data) {
        console.log(data);
});

let userInput = 'Comics'
let requestURL = 'https://www.googleapis.com/books/v1/volumes?q=' + userInput

fetch(requestURL ,{
    method: "GET",
    headers: {
        "Accept": "application/json"
    },
})
    .then(function (response) {
        return response.json();
})
    .then(function(data) {
        console.log(data.items[0].volumeInfo.title);
        // for (i = 0; i < data.length)
        console.log(data.items.length)
        for (i = 0; i < data.items.length; i++) {
            let par = document.createElement('p');
            let node = document.createTextNode(JSON.stringify(data.items[i].volumeInfo.title));
            document.body.appendChild(par);
            par.appendChild(node);
            console.log(par);
        }
    })

