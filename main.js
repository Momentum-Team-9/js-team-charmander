const url = "https://proxy-itunes-api.glitch.me/search?"
const search = document.querySelector('#search')
console.log(search, "search")

function getSongs() {
  fetch (url + "entity=song&" + "term="+ `${search.value}`+ "&limit=12")
  
    .then((response) => response.json())
    .then((songsInfo) => {
      console.log(getSongs, "getSongs");
      // Add function that displays songs
    });
}
getSongs();

// Function to create each song card, adding it to the songs section
// // Make sure to allow space for album image and song details.

// Event Listener to pull search results

// Function to format the search input correctly for the iTunes API

// CRUD function to GET songs by artist or band





// Event Listener to play song preview

// Event Listener to stop song preview
