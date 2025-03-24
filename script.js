const API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your API key
const CHANNEL_ID = "UCdUml69Y-wWj07Tr5R6uWmA"; // Replace with your channel ID
const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID

const videoFrame = document.getElementById("videoFrame");

// Function to check if the channel is live
async function checkLiveStream() {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.items.length > 0) {
            const liveVideoId = data.items[0].id.videoId;
            videoFrame.src = `https://www.youtube.com/embed/${liveVideoId}?autoplay=1`;
        } else {
            videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1`;
        }
    } catch (error) {
        console.error("Error fetching live stream data:", error);
    }
}

// Check for live stream every minute
setInterval(checkLiveStream, 60000);
checkLiveStream();
