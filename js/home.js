const sectionMain = document.querySelector("#sectionMain");
const parentDivBox = document.createElement("div");
const loadingEl = document.querySelector("#loading");

let apiGetTopAiringAnime =
  "https://api.consumet.org/anime/gogoanime/top-airing";

async function GetTopAiringAnime() {
  const fechApi = await fetch(apiGetTopAiringAnime);
  const data = await fechApi.json();
  loadingEl.remove();
  renderGetTopAiringAnime(data.results);
}

GetTopAiringAnime();

function renderGetTopAiringAnime(data) {
  data.map((data) => {
    console.log(data);
    const divBox = document.createElement("div");
    const imgEl = document.createElement("img");
    const aUrl = document.createElement("a");
    const spanTitle = document.createElement("span");
    sectionMain.append(parentDivBox);
    parentDivBox.append(divBox);
    divBox.append(imgEl);
    divBox.append(aUrl);
    divBox.append(spanTitle);
    imgEl.src = data.image;
    divBox.title = data.genres.join("-");
    imgEl.title = data.title;
    spanTitle.textContent = data.title;
    aUrl.innerHTML = "Anime information";
    aUrl.href = `/anime.html?id=${data.id}`;
    aUrl.classList.add("download");

    //style bootstrap"
    imgEl.classList.add("imgEl", "card-img-top");
    divBox.classList.add("divBox", "card");
    parentDivBox.classList.add(
      "d-flex",
      "justify-content-evenly",
      "flex-wrap",
      "container",
      "parentDivBox"
    );
    spanTitle.classList.add("spanTitle");
    //
  });
}

// function Day and night mode
function darklight() {
  document.body.classList.toggle("dark-light");
}
