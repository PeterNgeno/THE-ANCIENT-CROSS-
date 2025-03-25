const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK";
const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your API key
const videoFrame = document.getElementById("videoFrame");

async function loadFirstVideo() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=1&key=${YOUTUBE_API_KEY}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const firstVideoId = data.items[0].snippet.resourceId.videoId;
        
        // Initially muted to allow autoplay
        videoFrame.src = `https://www.youtube.com/embed/${firstVideoId}?autoplay=1&mute=1&loop=1&playlist=${PLAYLIST_ID}`;
        
        // Unmute when user interacts
        document.body.addEventListener("click", () => {
            videoFrame.src = `https://www.youtube.com/embed/${firstVideoId}?autoplay=1&loop=1&playlist=${PLAYLIST_ID}`;
        }, { once: true }); // Ensures the event runs only once
    } catch (error) {
        console.error("Error loading video:", error);
    }
}

loadFirstVideo();
