let books = JSON.parse(localStorage.bookInCart || "[]");
let babels = JSON.parse(localStorage.babels || "[]");

// DUNE
if (
  document.getElementById("add-cart") ||
  document.getElementById("dune-counter")
) {
  if (document.getElementById("add-cart")) {
    const duneButton = document.getElementById("add-cart");

    duneButton.addEventListener("click", function () {
      books.push("Dune");

      localStorage.bookInCart = JSON.stringify(books);
    });
  }

  if (document.getElementById("dune-counter")) {
    const duneCounter = document.getElementById("dune-counter");
    const duneAdd = document.getElementById("dune-add-cart");
    const duneDelete = document.getElementById("dune-delete-cart");
    const duneSection = document.getElementById("dune-display");
    const dunePrice = document.getElementById("dune-price");

    let currentAmount = JSON.parse(localStorage.bookInCart);
    duneCounter.innerText = currentAmount.length;

    dunePrice.innerText = 130 * currentAmount.length + " kr";

    if (currentAmount.length > 0) {
      duneSection.style.display = "flex";
    }

    duneAdd.addEventListener("click", function () {
      currentAmount.push("Dune");
      localStorage.bookInCart = JSON.stringify(currentAmount);

      let dunes = JSON.parse(localStorage.bookInCart);
      duneCounter.innerText = dunes.length;
      dunePrice.innerText = 130 * currentAmount.length + " kr";
    });

    duneDelete.addEventListener("click", function () {
      if (duneCounter.innerText > 0) {
        currentAmount.pop();
        localStorage.bookInCart = JSON.stringify(currentAmount);

        let dunes = JSON.parse(localStorage.bookInCart);
        duneCounter.innerText = dunes.length;
        dunePrice.innerText = 130 * currentAmount.length + " kr";
      }

      let dunes = JSON.parse(localStorage.bookInCart);

      if (dunes.length === 0) {
        duneSection.style.display = "none";
      }
    });
  }
}

// BABEL
if (
  document.getElementById("buy-babel") ||
  document.getElementById("babel-counter")
) {
  if (document.getElementById("buy-babel")) {
    const babelAdd = document.getElementById("buy-babel");

    babelAdd.addEventListener("click", function () {
      babels.push("Babel");

      localStorage.babels = JSON.stringify(babels);
    });
  }

  if (document.getElementById("babel-counter")) {
    const babelCounter = document.getElementById("babel-counter");
    const babelAdd = document.getElementById("babel-add-cart");
    const babelDelete = document.getElementById("babel-delete-cart");
    const babelSection = document.getElementById("babel-display");
    const babelPrice = document.getElementById("babel-price");

    let babelAmount = JSON.parse(localStorage.babels);
    babelCounter.innerText = babelAmount.length;

    babelPrice.innerText = 130 * babelAmount.length + " kr";

    if (babelAmount.length > 0) {
      babelSection.style.display = "flex";
    }

    babelAdd.addEventListener("click", function () {
      babelAmount.push("Babel");
      localStorage.babels = JSON.stringify(babelAmount);

      let babelNumber = JSON.parse(localStorage.babels);
      babelCounter.innerText = babelNumber.length;
      babelPrice.innerText = 130 * babelAmount.length + " kr";
    });

    babelDelete.addEventListener("click", function () {
      if (babelCounter.innerText > 0) {
        babelAmount.pop();
        localStorage.babels = JSON.stringify(babelAmount);

        let babelNumber = JSON.parse(localStorage.babels);
        babelCounter.innerText = babelNumber.length;
        babelPrice.innerText = 130 * babelAmount.length + " kr";
      }

      let babelNumber = JSON.parse(localStorage.babels);

      if (babelNumber.length === 0) {
        babelSection.style.display = "none";
      }
    });
  }
}

//localStorage.clear();
