document.addEventListener('DOMContentLoaded', () => {
    const featuredGamesContainer = document.getElementById('featured-games');
    const featuredGames = featuredGamesContainer.innerHTML;

    // Duplicate the content to create a seamless scroll effect
    featuredGamesContainer.innerHTML += featuredGames;

    // Adjust the scrolling animation duration based on the number of items
    const gameItems = featuredGamesContainer.querySelectorAll('.game-item').length;
    const scrollDuration = gameItems * 7; // Adjust the multiplier as needed
HI
    featuredGamesContainer.style.animationDuration = `${scrollDuration}s`;
});
// im a bloudy geunuis harry
