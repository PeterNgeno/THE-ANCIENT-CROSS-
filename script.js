const PLAYLIST_ID = "PL358U6AJ8gNGj0v-M7n9W8PUJ-4fKv3SS"; // Your playlist ID
const videoFrame = document.getElementById("videoFrame");

// Set the YouTube playlist URL
videoFrame.src = `https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&loop=1&rel=0&modestbranding=1&playsinline=1`;
