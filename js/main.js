// Updating the fav icon

let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}

link.href = "https://cdn-icons-png.flaticon.com/512/808/808439.png";

// Fixing The Navbar On The Top

window.addEventListener("scroll", function () {
  if (scrollY >= 100) {
    document.querySelector("nav").classList.add("fixed-top");
  } else {
    document.querySelector("nav").classList.remove("fixed-top");
  }
});

// Instantiation Of The Class Games

import { Games } from "./games.js";

let game = new Games();
