export class Details {
  constructor() {}

  // Fetching Details Through Id

  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b40b3d7ef6msha4a407ead024f9bp14dba2jsn4f43a3fe9ddd",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.displayData(response);
  }

  // Displaying Fetched Data

  displayData(data) {
    let container = `
            <div class="col-md-4">
                <div class="img">
                    <img src="${data.thumbnail}" class="w-100" alt="thumbnail-game">
                </div>
            </div>
            <div class="col-md-8">
                <h4>Title: ${data.title}</h4>
                <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
                <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
                <p class="small">${data.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
        `;
    document.getElementById("detailsContent").innerHTML = container;
  }
}
