const PLAYLIST_ID = "PL358U6AJ8gNHlktIp7Z2su-XrJT29LZtK"; // Replace with your actual ID
const videoFrame = document.getElementById("videoFrame");

videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1&rel=0&modestbranding=1&playsinline=1`;
