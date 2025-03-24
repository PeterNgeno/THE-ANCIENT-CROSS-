const CHANNEL_ID = "UCYa7DlPOHk2yD9SQslhdW4g"; // Your YouTube Channel ID
const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const videoFrame = document.getElementById("videoFrame");

// Function to get API Key from Vercel backend
async function getApiKey() {
    try {
        const response = await fetch("/api/getYoutubeKey"); // Fetch from Vercel serverless function
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error("Error fetching API key:", error);
        return null;
    }
}

// Function to check if the channel is live
async function checkLiveStream() {
    const API_KEY = await getApiKey();
    if (!API_KEY) {
        console.error("API Key not available");
        return;
    }

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
