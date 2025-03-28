const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const TOTAL_PLAYLIST_DURATION = 7200; // Total duration of all songs in seconds (UPDATE THIS)
const START_DATE = new Date("2025-03-25T00:00:00Z").getTime(); // Set start time

const videoFrame = document.getElementById("videoFrame");

function getOngoingTime() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - START_DATE) / 1000); // Convert ms to seconds
    return elapsedTime % TOTAL_PLAYLIST_DURATION; // Get the current position in loop
}

function loadLivePlaylist() {
    const startTime = getOngoingTime(); // Get ongoing position in playlist
    videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&mute=1&start=${startTime}&modestbranding=1&playsinline=1&rel=0`;
}

// Load the ongoing video position
loadLivePlaylist();

// Unmute when user interacts
document.body.addEventListener("click", () => {
    videoFrame.src = videoFrame.src.replace("&mute=1", ""); // Remove mute from URL
}, { once: true }); // Ensures it runs only once
