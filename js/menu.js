fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const cashmere = document.querySelector("#cashmere-nav-menu");
    const cart = document.querySelector("#cart-nav-menu");
    const home = document.querySelector("#home-nav-menu");

    if (home) {
      home.addEventListener("click", () => {
        window.location.href = "/index.html";
      });
    }
    if (cashmere) {
      cashmere.addEventListener("click", () => {
        window.location.href = "/cashmere.html";
      });
    }

    if (cart) {
      cart.addEventListener("click", () => {
        window.location.href = "/addCart.html";
      });
    }

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("nav-menu-list");
    const btn = document.getElementById("nav-btn-list");

    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
      btn.classList.toggle("active");
    });
  });
