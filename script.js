const API_KEY = YOUTUBE_API_KEY; // Directly use the Vercel environment variable
const CHANNEL_ID = "UCYa7DlPOHk2yD9SQslhdW4g"; // Your YouTube channel ID
const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const videoFrame = document.getElementById("videoFrame");

async function checkLiveStream() {
    const liveUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

    try {
        const liveResponse = await fetch(liveUrl);
        const liveData = await liveResponse.json();

        if (liveData.items && liveData.items.length > 0) {
            const liveVideoId = liveData.items[0].id.videoId;
            videoFrame.src = `https://www.youtube.com/embed/${liveVideoId}?autoplay=1`;
        } else {
            videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1`;
        }
    } catch (error) {
        console.error("Error fetching YouTube data:", error);
        videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1`;
    }
}

// Check for live stream every minute
setInterval(checkLiveStream, 60000);
checkLiveStream();
