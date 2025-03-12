let books = JSON.parse(localStorage.bookInCart || "[]");
let babels = JSON.parse(localStorage.babels || "[]");
let atlas = JSON.parse(localStorage.atlas || "[]");

// the following function "changeText" was taken from: https://www.w3schools.com/howto/howto_js_media_queries.asp

if (document.getElementById("mirror")) {
  let w = window.matchMedia("(max-width: 1260px)");

  function changeTextMirror(w) {
    if (w.matches) {
      document.getElementById("mirror").innerText = "The Dark Mir.";
    } else {
      document.getElementById("mirror").innerText = "The Dark Mirror";
    }
  }

  function changeTextHurr(w) {
    if (w.matches) {
      document.getElementById("hurricane").innerText = "The Hurricane..";
    } else {
      document.getElementById("hurricane").innerText = "The Hurricane Wars";
    }
  }

  function changeTextPiory(w) {
    if (w.matches) {
      document.getElementById("priory").innerText = "The Priory of..";
    } else {
      document.getElementById("priory").innerText =
        "The Priory of the Orange..";
    }
  }

  function changeTextWhisp(w) {
    if (w.matches) {
      document.getElementById("whisp").innerText = "Under the Wh..";
    } else {
      document.getElementById("whisp").innerText = "Under the Whispering..";
    }
  }

  function changeTextPrince(w) {
    if (w.matches) {
      document.getElementById("prince").innerText = "The Cruel Prin..";
    } else {
      document.getElementById("prince").innerText = "The Cruel Prince";
    }
  }

  changeTextMirror(w);
  changeTextHurr(w);
  changeTextPiory(w);
  changeTextWhisp(w);
  changeTextPrince(w);

  w.addEventListener("change", function () {
    changeTextMirror(w);
    changeTextHurr(w);
    changeTextPiory(w);
    changeTextWhisp(w);
    changeTextPrince(w);
  });
}

// DUNE
if (
  document.getElementById("add-cart") ||
  document.getElementById("dune-counter") ||
  document.getElementById("buy-dune")
) {
  if (document.getElementById("buy-dune")) {
    const duneQuickBuy = document.getElementById("buy-dune");

    duneQuickBuy.addEventListener("click", function () {
      books.push("Dune");

      localStorage.bookInCart = JSON.stringify(books);
    });
  }

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

// THE ATLAS SIX
if (
  document.getElementById("buy-atlas") ||
  document.getElementById("atlas-counter")
) {
  if (document.getElementById("buy-atlas")) {
    const atlasAdd = document.getElementById("buy-atlas");

    atlasAdd.addEventListener("click", function () {
      atlas.push("Atlas");

      localStorage.atlas = JSON.stringify(atlas);
    });
  }

  if (document.getElementById("atlas-counter")) {
    const atlasCounter = document.getElementById("atlas-counter");
    const atlasAdd = document.getElementById("atlas-add-cart");
    const atlasDelete = document.getElementById("atlas-delete-cart");
    const atlasSection = document.getElementById("atlas-display");
    const atlasPrice = document.getElementById("atlas-price");

    let atlasAmount = JSON.parse(localStorage.atlas);
    atlasCounter.innerText = atlasAmount.length;

    atlasPrice.innerText = 130 * atlasAmount.length + " kr";

    if (atlasAmount.length > 0) {
      atlasSection.style.display = "flex";
    }

    atlasAdd.addEventListener("click", function () {
      atlasAmount.push("Atlas");
      localStorage.atlas = JSON.stringify(atlasAmount);

      let atlasNumber = JSON.parse(localStorage.atlas);
      atlasCounter.innerText = atlasNumber.length;
      atlasPrice.innerText = 130 * atlasAmount.length + " kr";
    });

    atlasDelete.addEventListener("click", function () {
      if (atlasCounter.innerText > 0) {
        atlasAmount.pop();
        localStorage.atlas = JSON.stringify(atlasAmount);

        let atlasNumber = JSON.parse(localStorage.atlas);
        atlasCounter.innerText = atlasNumber.length;
        atlasPrice.innerText = 130 * atlasAmount.length + " kr";
      }

      let atlasNumber = JSON.parse(localStorage.atlas);

      if (atlasNumber.length === 0) {
        atlasSection.style.display = "none";
      }
    });
  }
}

//localStorage.clear();
