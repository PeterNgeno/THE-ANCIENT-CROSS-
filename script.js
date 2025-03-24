const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const TOTAL_PLAYLIST_DURATION = 7200; // Total duration of all songs in seconds (e.g., 2 hours)

const videoFrame = document.getElementById("videoFrame");

// Function to calculate ongoing time in the playlist
function getOngoingTime() {
    const startTime = new Date("2024-03-01T00:00:00Z").getTime(); // Set a fixed start time (e.g., when you launched the playlist)
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Convert milliseconds to seconds

    return elapsedTime % TOTAL_PLAYLIST_DURATION; // Loop within playlist duration
}

// Load video at the correct position
function loadPlaylist() {
    const startTime = getOngoingTime(); // Get the current position in the playlist
    videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1&rel=0&modestbranding=1&playsinline=1&start=${startTime}`;
}

// Load the playlist at the current position
loadPlaylist();
