
const btnE1=document.querySelector(".add-to-watchlist-btn")
const closeE1=document.querySelector(".close")
const trailerE1=document.querySelector(".trailer")
const videoE1=document.querySelector("video")

btnE1.addEventListener("click",()=>{
    trailerE1.classList.remove("active")
})
closeE1.addEventListener("click",()=>{
    trailerE1.classList.add("active")
    videoE1.pause();
    videoE1.currentTime=0; 

})

function addToWatchlist(movieId) {
    const movieTitle = document.getElementById(movieId).querySelector('.movie-title').innerText;
    const watchlistContainer = document.getElementById('watchlist');

    // Check if the movie is not already in the watchlist
    if (!document.getElementById(`watchlist-${movieId}`)) {
      // Create a new list item for the watchlist
      const watchlistItem = document.createElement('li');
      watchlistItem.id = `watchlist-${movieId}`;
      watchlistItem.className = 'watchlist-item';
      watchlistItem.textContent = movieTitle;

      // Append the watchlist item to the watchlist container
      watchlistContainer.appendChild(watchlistItem);
    }
  }