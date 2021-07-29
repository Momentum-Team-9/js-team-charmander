const url = "https://proxy-itunes-api.glitch.me/search?";
const search = document.querySelector("#search");
const songSection = document.querySelector("#song-div");
console.log(search, "search");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(search.value, "search");
  getSongs(search.value);
  form.reset();
});

// Function that gets song requests
function getSongs() {
  fetch(url + "entity=song&" + "term=" + search.value + "&limit=12")
    .then((response) => {
      if (response.status !== 200) {
        const songDiv = document.querySelector("#song-div");
        songDiv.innerText = "Please search again";
        songDiv.classList.add("no-results");
        return false;
      } else {
        return response.json();
      }
    })
    .then((songsInfo) => {
      if (!songsInfo) {
        return false;
      }
      if (songsInfo.resultCount === 0) {
        const songDiv = document.querySelector("#song-div");
        songDiv.innerHTML = "No Results";
        songDiv.classList.add("no-results");
      } else {
        console.log(songsInfo, "songsInfo");
        console.log(songsInfo.results, "songsInfo.results");
        const songsInfoResults = songsInfo.results;
        renderSongCard(songsInfoResults);
      }
    });
}

// Function to create each song card, adding it to the songs section
function renderSongCard(data) {
  for (let i of data) {
    // console.log(i);
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");
    songSection.appendChild(songCard);

    const albumArt = document.createElement("img");
    albumArt.src = i.artworkUrl100;
    songCard.appendChild(albumArt);

    // add song title
    const song = document.createElement("p");
    song.innerText = i.trackName;
    song.classList.add("song-title");
    songCard.appendChild(song);

    // add artist
    const artist = document.createElement("p");
    artist.innerText = i.artistName;
    artist.classList.add("artist-name");
    songCard.appendChild(artist);

    // add audio to container
    const songAudio = document.createElement("audio");
    songAudio.classList.add("audio");
    songAudio.src = i.previewUrl;
    songAudio.controls = true;
    songCard.appendChild(songAudio);
  }
}
