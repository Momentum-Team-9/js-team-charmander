const url = "https://proxy-itunes-api.glitch.me/search?";
const search = document.querySelector("#search");
const songSection = document.querySelector("#songs");
console.log(search, "search");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(search.value, "search");
  getSongs();
  form.reset();
});

// Function that gets song requests
function getSongs() {
  fetch(url + "entity=song&" + "term=" + search.value + "&limit=12")
    .then((response) => response.json())
    .then((songsInfo) => {
      console.log(songsInfo, "songsInfo");
      console.log(songsInfo.results, "songsInfo.results");
      const songsInfoResults = songsInfo.results;
      
      for (let i of data.results) {
        console.log(data, "data");
        renderSongCard(songsInfoResults);
    }
})
}
// Function to create each song card, adding it to the songs section

// // Make sure to allow space for album image and song details.

function renderSongCard(data) {
  for (let i of data) {
    // console.log(i);

    const songCard = document.createElement("div");
    songCard.classList.add("song-card");
    songSection.appendChild(songCard);

    const albumArt = document.createElement("img");
    albumArt.src = i.artworkUrl60;
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

    // add button on top of the image
    const songAudio = document.createElement("div");
    // song.id.add();
    songAudio.innerHTML = `<audio control class="audio" src="${i.previewUrl}"></audio>`;
    songAudio.src = i.previewUrl;
    songCard.appendChild(songAudio);
  }
}


// Event Listener to play song preview

// Event Listener to stop song preview
