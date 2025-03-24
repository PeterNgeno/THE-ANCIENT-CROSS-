const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const TOTAL_PLAYLIST_DURATION = 7200; // Total duration of all songs in seconds (UPDATE THIS)
const START_DATE = new Date("2025-03-25T00:00:00Z").getTime(); // Set today's date as start time

const videoFrame = document.getElementById("videoFrame");

function getOngoingTime() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - START_DATE) / 1000); // Convert ms to seconds
    return elapsedTime % TOTAL_PLAYLIST_DURATION; // Get current position in loop
}

function loadLivePlaylist() {
    const startTime = getOngoingTime(); // Get ongoing position in playlist
    videoFrame.src = `https://youtube.com/playlist?list=PL358U6AJ8gNGj0v-M7n9W8PUJ-4fKv3SS&si=xHtuJsoJUO7gv9fe`;
}

// Load the ongoing video position
loadLivePlaylist();
