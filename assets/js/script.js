nytKey = "7Q08soKcOnSaAMVL6QsI0AdfNHT6loWB"

// need to create objects of books with their information based on the genre keywork in the "display_name"

async function displayFiction() {
    $(".list-group").empty();
    var fictionLabel = $("<h2>");
    fictionLabel.text("Fiction");
    $(".list-group").append(fictionLabel);

    var responseJSON = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(async function (response) {
            return await response.json();
        });

    let fictionList = responseJSON.results.lists.filter(list => list.list_name.includes("Fiction"));

    let finishedFictionCards = [''];

    let megaFictionArray = [];

    // for loop that gathers all of the fiction book information renders it to a fiction card 
    for (let i = 0; i < fictionList.length; i++) {
        megaFictionArray = megaFictionArray.concat(fictionList[i].books)
    }

    console.log(megaFictionArray);

    // for loop here that gets into the book information mega array and creates the cards
    for (let j = 0; j < megaFictionArray.length; j++) {
        var fictionBookCard = $("<div>").addClass("card card-body my-3");

        // displays the title as an h2 element with the class card-title 
        var fictionBookTitle = $("<h2>").addClass("card-title p-2");
        fictionBookTitle.text(megaFictionArray[j].title);

        // displays the author as an h3 element with the class card-author
        var fictionBookAuthor = $("<h3>").addClass("card-author p-2");
        fictionBookAuthor.text("Author: " + megaFictionArray[j].author);

        // displays the description as an h4 element with class of card-text
        var fictionBookDescription = $("<h5>").addClass("card-text p-2");
        fictionBookDescription.text(megaFictionArray[j].description);

        // append the book fiction book title to the fiction book card 
        fictionBookCard.append(fictionBookTitle).append(fictionBookAuthor).append(fictionBookDescription);
        console.log(fictionBookCard)
        // push the data we want to display on each book card into the finished fiction cards array
        finishedFictionCards.push(fictionBookCard);


    }
    console.log(finishedFictionCards);

    // code that appends everything in the finished fiction cards array to an html element on the page when the user clicks on the fiction button 

    // future dev: figure out how to append the 61 finished fiction cards to different pages
    $(".list-group").append(finishedFictionCards)
};

async function displayNonFict() {
    $(".list-group").empty();
    var nonFictLabel = $("<h2>");
    nonFictLabel.text("Non Fiction");
    $(".list-group").append(nonFictLabel);

    var responseJSON = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(async function (response) {
            return await response.json();
        });
    let nonFiction = responseJSON.results.lists.filter(lists => lists.list_name.includes("Nonfiction"));
    var finishedNFCards = [''];
    var megaNonFictionArray = [];

    // for loop that gathers all of the non fiction book information renders it to a non fiction card 
    for (let i = 0; i < nonFiction.length; i++) {
        var megaNonFictionArray = megaNonFictionArray.concat(nonFiction[i].books)
    }

    console.log(megaNonFictionArray);

    // for loop here that gets into the book information mega array and creates the cards
    for (let j = 0; j < megaNonFictionArray.length; j++) {
        var nonFictionBookCard = $("<div>").addClass("card card-body my-3");

        // displays the title as an h2 element with the class card-title 
        var nonFictionBookTitle = $("<h2>").addClass("card-title");
        nonFictionBookTitle.text(megaNonFictionArray[j].title);

        // displays the author as an h3 element with the class card-author
        var nonFictionBookAuthor = $("<h3>").addClass("card-author");
        nonFictionBookAuthor.text("Author: " + megaNonFictionArray[j].author);

        // displays the description as an h4 element with class of card-text
        var nonFictionBookDescription = $("<h5>").addClass("card-text");
        nonFictionBookDescription.text(megaNonFictionArray[j].description);

        // append the book non fiction book title to the non fiction book card 
        nonFictionBookCard.append(nonFictionBookTitle).append(nonFictionBookAuthor).append(nonFictionBookDescription);

        // push the data we want to display on each book card into the finished fiction cards array
        finishedNFCards.push(nonFictionBookCard);


    }
    console.log(finishedNFCards);

    // code that appends everything in the finished fiction cards array to an html element on the page when the user clicks on the fiction button 
    $(".list-group").append(finishedNFCards)
};

// event listener registered to the dropdown to display the cards array assocated with the genre of interest 
$('.fiction-btn').on('click', displayFiction);
$('.non-fiction-btn').on('click', displayNonFict)


var formData = []

// save the user input to local storage
$(".sign-up-btn").on("click", function (e) {
    e.preventDefault();
    var firstName = $("#inputFirstName").val();
    var lastName = $("#inputLastName").val();
    var userEmail = $("#inputEmail").val()

    const dataObj = {
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail
    };

    console.log(dataObj)

    formData.push(dataObj);


    localStorage.setItem("userData", JSON.stringify(formData));

});


// api call to random quote generator
factKey = "SQhVO7dkmUiJDR4FAbi/Fw==cPvInScNfpF76iUh";
let randomQuote='';

var category = 'education'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: {'X-Api-Key': 'SQhVO7dkmUiJDR4FAbi/Fw==cPvInScNfpF76iUh' },
    contentType: 'application/json',
    success: function (result) {
        console.log(result);
        randomQuote = result[0].quote;
        console.log(randomQuote)
        $(".quoteText").append('"' + randomQuote + '"');
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    },
    

});

