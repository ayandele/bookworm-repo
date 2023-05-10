fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms&key=AIzaSyDPsiNcDrNWoAHFp1fGOwZtBuGMJRUchhs')
    .then(res => res.json())
    .then(data => console.log(data));