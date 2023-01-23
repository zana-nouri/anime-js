const sectionMain = document.querySelector("#sectionMain");
const params = new URLSearchParams(window.location.search);
const query = params.get("id");

//

const apiGetAnimeEpisodeStreaminglinks = `https://api.consumet.org/anime/gogoanime/watch/${query}`;

async function GetAnimeEpisodeStreaminglinks() {
  const apiFech = await fetch(apiGetAnimeEpisodeStreaminglinks);
  const data = await apiFech.json();
  let dataSources = data.sources.find((data) => data.quality === "backup");
  renderGetAnimeEpisodeStreaminglinks(dataSources);
  console.log(dataSources);
}
GetAnimeEpisodeStreaminglinks();

//

function renderGetAnimeEpisodeStreaminglinks(data) {
  const div = document.createElement("div");
  // const paragraph = document.createElement("p");
  const video = document.createElement("video");
  const source = document.createElement("source");
  //

  //append
  sectionMain.append(div);
  div.append(video);
  video.append(source);
  // video.append(paragraph);

  //
  source.src = data.url;
  source.setAttribute("type", "application/x-mpegURL");
  //setAttribute

  video.setAttribute("id", "my-video");
  video.setAttribute("class", "video-js");
  video.setAttribute("preload", "auto");
  video.setAttribute("width", "640");
  video.setAttribute("height", "264");
  video.setAttribute("controls", true);
  // video.setAttribute("poster", "MY_VIDEO_POSTER.jpg");
  video.setAttribute("data-setup", "{}");
  //style bootstrap
  div.classList.add("d-flex", "justify-content-center", "mt-3");
  const myPlayer = videojs("my-video");
}

// function Day and night mode
function darklight() {
  document.body.classList.toggle("dark-light");
}
