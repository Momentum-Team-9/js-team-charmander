const url = "https://proxy-itunes-api.glitch.me/search?";
const songSection = document.querySelector("#songs");

// Function to create each song card, adding it to the songs section
// // Make sure to allow space for album image and song details.

function createSongCard() {
  const songBox = document.createElement("div");
}

// Event Listener to pull search results

// Function to format the search input correctly for the iTunes API

// CRUD function to GET songs by artist or band

getSongs();

function getSongs() {
  fetch(
    "https://proxy-itunes-api.glitch.me/search?term=jack+johnson&kind=song&limit=25."
  )
    .then((response) => response.json())
    .then((songsInfo) => {
      console.log(songsInfo);
      // Add function that displays songs
    });
}

// Event Listener to play song preview

// Event Listener to stop song preview
