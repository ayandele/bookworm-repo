// fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyDPsiNcDrNWoAHFp1fGOwZtBuGMJRUchhs')
//     .then(res => res.json())
//     .then(data => console.log(data));

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
    // let typeInput = ['Computers']
    // for (i = 0; i < data.items.length; i++) {
    //     let selectedLists = data.items[i].volumeInfo.categories;
    //.lists.filter(list => list.list_name.includes("Fiction"))
    //     console.log(selectedLists)
        
    // }
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
    console.log(data);})