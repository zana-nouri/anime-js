const sectionMain = document.querySelector(".section-main");
const sectionDescription = document.querySelector(".section-description");
const divFooter = document.querySelector(".divFooter");
const params = new URLSearchParams(window.location.search);
const serchQuery = params.get("id");
const loadingEl = document.querySelector("#loading");

const apiGetAnimeInfo = `https://api.consumet.org/anime/gogoanime/info/${serchQuery}`;

async function GetAnimeInfo() {
  const fechApi = await fetch(apiGetAnimeInfo);
  const data = await fechApi.json();
  console.log(data);
  loadingEl.remove();
  //
  const divSection = document.createElement("div");
  const imgDivSection = document.createElement("img");
  const divSectionDescription = document.createElement("div");
  const sdescription = document.createElement("span");
  const title = document.createElement("h2");
  const genres = document.createElement("p");
  sectionMain.append(divSection);
  divSection.append(imgDivSection);
  divSection.append(genres);
  genres.textContent = "genres";
  //
  genres.addEventListener("click", () => {
    genres.textContent = data.genres.join(" ");
  });
  //
  sectionDescription.append(divSectionDescription);
  divSectionDescription.append(sdescription);
  divSection.append(title);
  data.episodes.map((episodes) => {
    const aEpisodes = document.createElement("a");
    divFooter.append(aEpisodes);
    aEpisodes.innerHTML = `${episodes.number}`;
    //style
    aEpisodes.classList.add("aEpisodes");
    console.log(episodes);
    aEpisodes.href = `/episode.html?id=${episodes.id}`;
  });

  //

  imgDivSection.src = data.image;
  sdescription.innerHTML = `<p class="h6">description</p><br>${data.description}`;
  sdescription;
  title.innerHTML = data.title;
  // style
  divSection.classList.add(
    "divSection",
    "container",
    "d-flex",
    "justify-content-center",
    "flex-column",
    "align-content-center",
    "w-100"
  );
  imgDivSection.classList.add("imgDivSection");
  divSectionDescription.classList.add(
    "divSectionDescription",
    "container",
    "w-75"
  );
  genres.classList.add("genres");
  title.classList.add("title");
}
GetAnimeInfo();

// function Day and night mode
function darklight() {
  document.body.classList.toggle("dark-light");
}
