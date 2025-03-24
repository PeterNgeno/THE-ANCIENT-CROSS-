const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Your playlist ID
const videoFrame = document.getElementById("videoFrame");

// Embed YouTube playlist
videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1&rel=0&modestbranding=1&playsinline=1`;
