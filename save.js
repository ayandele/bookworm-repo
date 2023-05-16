const key = `https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyDPsiNcDrNWoAHFp1fGOwZtBuGMJRUchhs`


let userInput = 'Math'
let requestURL = 'https://www.googleapis.com/books/v1/volumes?q=' + userInput + '&maxResults=15'

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
        console.log(data)
        // for (i = 0; i < data.length)
        console.log(data.items.length)
        for (i = 0; i < data.items.length; i++) {
            // let par = document.createElement('p');
            // let node = document.createTextNode(JSON.stringify(data.items[i].volumeInfo.imageLinks.thumbnail));
            // document.querySelector('.list-group').appendChild(par)
            // par.appendChild(node);
            // console.log(par);
            
            if (data.items[i].volumeInfo.imageLinks != undefined) {
                let img = document.createElement('img')
                img.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);
                img.setAttribute('height', 50);
                img.setAttribute('width', 50);
                document.querySelector('.list-group').appendChild(img);}
            else {
                let par = document.createElement('p')
                let node = document.createTextNode('Image unavailable');
                document.querySelector('.list-group').appendChild(par);
                par.appendChild(node);
            }

            
        }
    })

    // What we're working with:
        // userInput = megaFictionArray[j].title