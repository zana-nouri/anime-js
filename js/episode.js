const loadingEl = document.querySelector("#loading");

// function Day and night mode
function darklight() {
  document.body.classList.toggle("dark-light");
}

const params = new URLSearchParams(window.location.search);
const query = params.get("id");

const recentAnimeEpisodeServers = `https://api.consumet.org/anime/gogoanime/servers/${query}}`;

console.log(recentAnimeEpisodeServers);
