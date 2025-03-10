//let books = [];
//let booksJson = "none";
let books = 0;
let count = 0;

if (document.getElementById("add-cart")) {
  const duneButton = document.getElementById("add-cart");

  duneButton.addEventListener("click", function () {
    books += 1;
    localStorage.dune = books;

    /*
    books.push("Dune");
    booksJson = JSON.stringify(books);

    localStorage.bookInCart = booksJson;
    */
  });
}

if (document.getElementById("dune-counter")) {
  const duneCounter = document.getElementById("dune-counter");
  const duneAdd = document.getElementById("dune-add-cart");
  const duneDelete = document.getElementById("dune-delete-cart");

  localStorage.dune = books;

  duneCounter.innerText = localStorage.dune;

  duneAdd.addEventListener("click", function () {
    books += 1;

    /*
    console.log(count);
    duneCounter.innerText = bookTest.length + count;
    */
  });

  duneDelete.addEventListener("click", function () {
    if (duneCounter.innerText > 0) {
      count -= 1;
      console.log(count);
      duneCounter.innerText = bookTest.length + count;
    }
  });
}

//localStorage.clear();

//console.log(books);

/*
console.log(bookTest);

console.log(bookTest.length);
*/

//let book = localStorage.bookInCart;

//let bookTest = JSON.parse(localStorage.bookInCart);
