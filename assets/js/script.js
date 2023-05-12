nytKey = "m55v0Usn6xrUWXHZHI74FzW9fp0A0Ycw"
// need to create objects of books with their information based on the genre keywork in the "display_name"

// function to get book title, author, image and description from the api based on t
// need to fetch API
fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`, {
    method: "GET",
    headers: {
        "Accept": "application/json"
    },
})
    .then(function (response) {
        return response.json();
    })

    // fiction list
    .then(function (data) {
        console.log(data);
        const fictionList = data.results.lists.filter(list => list.list_name.includes("Fiction"));
        console.log(fictionList);

        // nonfiction list
        const nonFiction = data.results.lists.filter(list => list.list_name.includes("Nonfiction"));
        console.log(nonFiction);

        // array to push completed fiction cards into
        var finishedFictionCards = [''];
        function displayFiction() {

            // for loop that gathers all of the fiction book information renders it to a fiction card 
            for (i = 0; i < fictionList.length; i++) {
                var fictionBookCard = $("<div>").addClass("card card-body");

                // displays the title as an h2 element with the class card-title 
                var fictionBookTitle = $("<h2>").addClass("card-title");
                fictionBookTitle.text(fictionList[i].books[i].title);

                // displays the author as an h3 element with the class card-author
                var fictionBookAuthor = $("<h3>").addClass("card-author");
                fictionBookAuthor.text("Author: "+ fictionList[i].books[i].author);

                // displays the description as an h4 element with class of card-text
                var fictionBookDescription = $("<h4>").addClass("card-text");
                fictionBookDescription.text(fictionList[i].books[i].description);

                // append the book fiction book title to the fiction book card 
                fictionBookCard.append(fictionBookTitle).append(fictionBookAuthor).append(fictionBookDescription);

                // push the data we want to display on each book card into the finished fiction cards array
                finishedFictionCards.push(fictionBookCard);


            }
            console.log(finishedFictionCards);

            // code that appends everything in the finished fiction cards array to an html element on the page when the user clicks on the fiction button 
            $(".list-group").append(finishedFictionCards)
        };
        
        // event listener registered to the dropdown to display the cards array assocated with the genre of interest 
        $('.fiction-btn').on('click', displayFiction())
    });

