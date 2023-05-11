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
    let selectedLists = data.items
    for (i = 0; i < data.items.length; i++)
         //.lists.filter(list => list.list_name.includes("Fiction"))
        console.log(selectedLists[i].volumeInfo.categories)
        if (selectedLists[i].volumeInfo.categories === 'Computers') {
            console.log('hello!')
        }
    // console.log(selectedLists)
});