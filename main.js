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
      console.log(songsInfo.results, "songsInfo");
      const songsInfoResults = songsInfo.results;
      
      for (let i of data.results) {
        console.log(data, "data");
        renderSongCard(songsInfoResults);
    }
})
}
// Function to create each song card, adding it to the songs section

// // Make sure to allow space for album image and song details.

    function renderSongCard (Argument) {
      const songCard = document.createElement("div");
      songCard.classList.add("song-card");

      const albumArt = document.createElement("img");
      albumArt.src = songsInfo.artworkUrl60;
      songCard.appendChild(albumArt);

      // add song title
      const songTitle = document.createElement("p");
      songTitle.classList.add("song-title");
      songCard.appendChild(songTitle);

      // add artist
      const artistName = document.createElement("p");
      artistName.classList.add("artist-name");
      songCard.appendChild(artistName);
      }
      // add button on top of the image
  


// Event Listener to pull search results

// Function to format the search input correctly for the iTunes API

// CRUD function to GET songs by artist or band

// Event Listener to play song preview

// Event Listener to stop song preview
