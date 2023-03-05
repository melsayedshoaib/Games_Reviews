import { Details } from "./details.js";

export class Games {
  constructor() {
    this.links = Array.from(document.querySelectorAll(".games ul li a"));
    this.displayData("MMORPG");
    this.handleActive();
  }

  // Looping Through Anchors And Display The Selected Genre Of Games

  handleActive() {
    for (let link of this.links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        this.displayData(e.target.dataset.category);
      });
    }
  }

  // Fetching Data Of The Games

  async displayData(genre) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b40b3d7ef6msha4a407ead024f9bp14dba2jsn4f43a3fe9ddd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${genre}`,
      options
    );
    const response = await api.json();
    this.displayGames(response);
  }

  // Displaying Data In A Container Of Cards

  displayGames(data) {
    let container = ``;
    for (let i = 0; i < data.length; i++) {
      container += `
            <div class="col">
                <div class="card h-100" role="button" data-id="${data[i].id}">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100 w-100">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">${data[i].title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">${data[i].short_description}</p>
                        </figcaption>
                    </div>
                    <div class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${data[i].genre}</span>
                        <span class="badge badge-color">${data[i].platform}</span>
                    </div>
                </div>
            </div>
          `;
    }
    document.getElementById("gameData").innerHTML = container;
    this.getCurrentId();
  }

  // Get Clicked Card And Display Its Details

  getCurrentId(id) {
    let cards = Array.from(document.querySelectorAll(".card"));
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", (e) => {
        id = cards[i].getAttribute("data-id");
        let details = new Details();
        details.getDetails(id);
        $(".details").removeClass("d-none");
        $(".games").addClass("d-none");
        $("#btnClose").click(() => {
          $(".details").addClass("d-none");
          $(".games").removeClass("d-none");
        });
      });
    }
  }
}
