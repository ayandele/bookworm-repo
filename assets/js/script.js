// need to fetch API
var bestSellerHist = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json"
$.ajax({
    url: bestSellerHist,
    method: 'GET',
}).then(function (response) {
    console.log('Ajax Reponse \n-------------');
    console.log(response);
})
// need to dynamically render pertinent information to the page when a user searches for specific key words
