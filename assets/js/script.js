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

    .then(function (data) {
        console.log(data);
        // fiction list
        const fictionList = data.results.lists.filter(list => list.list_name.includes("Fiction"));
        console.log(fictionList);

        // nonfiction list
        const nonFiction = data.results.lists.filter(list => list.list_name.includes("Nonfiction"));
        console.log(nonFiction);

        // array to push completed fiction cards into
        var finishedFictionCards = [''];
        
        function displayFiction() {
            var megaFictionArray = [];
            
            // for loop that gathers all of the fiction book information renders it to a fiction card 
            for (let i = 0; i < fictionList.length; i++) {
                var megaFictionArray = megaFictionArray.concat(fictionList[i].books)
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
                var fictionBookDescription = $("<h4>").addClass("card-text p-2");
                fictionBookDescription.text(megaFictionArray[j].description);
                
                // append the book fiction book title to the fiction book card 
                fictionBookCard.append(fictionBookTitle).append(fictionBookAuthor).append(fictionBookDescription);
                
                // push the data we want to display on each book card into the finished fiction cards array
                finishedFictionCards.push(fictionBookCard);
                
                
            }
            console.log(finishedFictionCards);
            
            // code that appends everything in the finished fiction cards array to an html element on the page when the user clicks on the fiction button 
            $(".list-group").append(finishedFictionCards)
        };
        
        // this is just here so i can see formatting
        // displayFiction();

        // array to push completed non fiction cards into
        var finishedNFCards = [''];

        function displayNonFict () {
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
                var nonFictionBookDescription = $("<h4>").addClass("card-text");
                nonFictionBookDescription.text(megaNonFictionArray[j].description);

                // append the book non fiction book title to the non fiction book card 
                nonFictionBookCard.append(nonFictionBookTitle).append(nonFictionBookAuthor).append(nonFictionBookDescription);

                // push the data we want to display on each book card into the finished fiction cards array
                finishedNFCards.push(nonFictionBookCard);


            }
            console.log(finishedNFCards);

            // code that appends everything in the finished fiction cards array to an html element on the page when the user clicks on the fiction button 
            $(".list-group").append(finishedNFCards)
        }

        // just here to see formatting
        // displayNonFict()
    });
    
    
    // event listener registered to the dropdown to display the cards array assocated with the genre of interest 
    $('.fiction-btn').on('click', displayFiction())

    
    