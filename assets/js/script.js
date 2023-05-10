nytKey = "m55v0Usn6xrUWXHZHI74FzW9fp0A0Ycw"
// need to create objects of books with their information based on the genre keywork in the "display_name"

// function to get book title, author, image and description from the api based on t
// need to fetch API
fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${nytKey}`,{
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
    const fictionList = data.results.lists.filter(list => list.list_name.includes("Fiction"))
    console.log(fictionList)

    // nonfiction list
    const nonFiction = data.results.lists.filter(list => list.list_name.includes("Nonfiction"))
    console.log(nonFiction)
});



// need to dynamically render pertinent information to the page when a user searches for specific key words

// need to create an event listener for each button the user can click that will get specific information from each API 