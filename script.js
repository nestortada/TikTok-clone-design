const videoPlayers = document.querySelectorAll(".videoPlayer");
const buttonLikes = document.querySelectorAll(".like");

// PLAY AND PAUSE HANDLER
videoPlayers.forEach((videoPlayer) => {
  videoPlayer.addEventListener("click", () => {
    // Pause all other videos
    videoPlayers.forEach((vp) => {
      if (vp !== videoPlayer) {
        vp.pause();
        vp.parentElement.querySelector(".video-play-icon").classList.add("show");
      }
    });

    // Toggle play/pause for the clicked video
    if (!videoPlayer.paused) {
      videoPlayer.pause();
      videoPlayer.parentElement
        .querySelector(".video-play-icon")
        .classList.add("show");
    } else {
      videoPlayer.play();
      videoPlayer.parentElement
        .querySelector(".video-play-icon")
        .classList.remove("show");
    }
  });
});

// SCROLL EVENT HANDLER
window.addEventListener("scroll", () => {
  let currentVideo = null;

  videoPlayers.forEach((videoPlayer) => {
    const rect = videoPlayer.getBoundingClientRect();
    const videoCenter = rect.top + rect.height / 2;

    // Check if the center of the video is within the viewport
    if (videoCenter >= 0 && videoCenter <= window.innerHeight) {
      currentVideo = videoPlayer;
    } else {
      // Pause videos not in the viewport
      videoPlayer.pause();
      videoPlayer.parentElement
        .querySelector(".video-play-icon")
        .classList.add("show");
    }
  });

  // Play the video in the viewport if it's paused
  if (currentVideo) {
    if (currentVideo.paused) {
      currentVideo.play();
      currentVideo.parentElement
        .querySelector(".video-play-icon")
        .classList.remove("show");
    }
  }
});

// LIKE BUTTON TOGGLE
buttonLikes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("love");
  });
});
