const sectionMain = document.querySelector("#sectionMain");
const loadingEl = document.querySelector("#loading");

//querySelector
//
const params = new URLSearchParams(window.location.search);
const serchQuery = params.get("query");
let ApiGetAnimeSearch = `https://api.consumet.org/anime/gogoanime/${serchQuery}`;

async function GetAnimeSearch() {
  const fechApi = await fetch(ApiGetAnimeSearch);
  const data = await fechApi.json();
  loadingEl.remove();
  renderGetAnimeSearch(data.results);
}
GetAnimeSearch();

// function render search
function renderGetAnimeSearch(data) {
  console.log(data);
  data.map((data) => {
    const divBox = document.createElement("div");
    const imgEl = document.createElement("img");
    const figure = document.createElement("figure");
    const figcaption = document.createElement("figcaption");
    const pReleaseDate = document.createElement("p");
    const aId = document.createElement("a");
    sectionMain.append(divBox);
    divBox.append(figure);
    figure.append(imgEl);
    figure.append(figcaption);
    divBox.append(pReleaseDate);
    divBox.append(aId);
    imgEl.src = data.image;
    figcaption.innerHTML = data.title;
    pReleaseDate.innerHTML = data.releaseDate;
    aId.textContent = `Anime information`;
    aId.href = `./anime.html?id=${data.id}`;
    //style bootstrap
    pReleaseDate.classList.add("text-light", "text-center", "pReleaseDate");
    imgEl.classList.add("imgEl-Box");
    figcaption.classList.add("text-light", "text-center", "figcaption");
    divBox.classList.add(
      "border",
      "border-success",
      "d-flex",
      "justify-content-center",
      "flex-column",
      "p-1",
      "m-2",
      "flex-wrap",
      "div-box"
    );
    aId.classList.add("aId");
  });
}
renderGetAnimeSearch();

// function Day and night mode
function darklight() {
  document.body.classList.toggle("dark-light");
}
