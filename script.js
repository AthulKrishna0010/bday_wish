const media = [
    { type: "video", src: "media/vid.mp4", caption: "Add your caption here" },
    { type: "video", src: "media/vid.mp4", caption: "Add your caption here" },
    { type: "video", src: "media/vid.mp4", caption: "Add your caption here" },
    { type: "video", src: "media/vid.mp4", caption: "Add your caption here" },
    { type: "video", src: "media/vid.mp4", caption: "Add your caption here" },
    { type: "image", src: "media/img.jpg", caption: "Add your caption here" },
    { type: "image", src: "media/img.jpg", caption: "Add your caption here" },
    { type: "image", src: "media/img.jpg", caption: "Add your caption here" },
    { type: "image", src: "media/img.jpg", caption: "Add your caption here" }
  ];
  const typewriterText =
  "HAPPY BIRTHDAY<br><br>" +
  "I could not be more thankful<br>" +
  "to have such a loving friend<br>" ;

let typeIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeWriter() {
    if (typeIndex < typewriterText.length) {
      const currentChar = typewriterText.charAt(typeIndex);
  
      if (
        typewriterText.substring(typeIndex, typeIndex + 4) === "<br>"
      ) {
        typewriterElement.innerHTML += "<br>";
        typeIndex += 4; // skip over "<br>"
      } else {
        typewriterElement.innerHTML += currentChar;
        typeIndex++;
      }
  
      setTimeout(typeWriter, 50); // you can adjust typing speed here
    }
  }
  

// Start typing when DOM is loaded
window.addEventListener("DOMContentLoaded", typeWriter);

  
  let current = 0;
  let isPlaying = true;
  let timer;
  const container = document.getElementById("media-container");
  const toggleBtn = document.getElementById("toggle-btn");
  const welcomePage = document.getElementById("welcome-page");
  const sliderPage = document.getElementById("slider-page");
  const startBtn = document.getElementById("start-btn");
  
  function showMedia(index) {
    container.innerHTML = "";
    const item = media[index];
    const caption = document.getElementById("caption");
  
    caption.textContent = item.caption;
  
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      container.appendChild(img);
      timer = setTimeout(nextMedia, 3000);
    } else if (item.type === "video") {
      const video = document.createElement("video");
      video.src = item.src;
      video.autoplay = true;
      video.controls = false;
      video.onended = nextMedia;
      container.appendChild(video);
    }
  }
  const closeBtn = document.getElementById("close-btn");

  closeBtn.addEventListener("click", () => {
    sliderPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
    clearTimeout(timer);
    container.innerHTML = "";
    document.getElementById("caption").textContent = "";
    bgMusic.pause();
    bgMusic.currentTime = 0;
    current = 0;
    isPlaying = true;
    toggleBtn.textContent = "Pause";
  });
    
  
  function nextMedia() {
    current = (current + 1) % media.length;
    if (isPlaying) showMedia(current);
  }
  
  toggleBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    toggleBtn.textContent = isPlaying ? "Pause" : "Play";
    if (isPlaying) showMedia(current);
    else clearTimeout(timer);
  });
  
  startBtn.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    sliderPage.classList.remove("hidden");
    showMedia(current);
  });
  const bgMusic = document.getElementById("bg-music");

  startBtn.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    sliderPage.classList.remove("hidden");
  
    // Try to play music
    bgMusic.play().catch((e) => {
      console.warn("Autoplay blocked. Music will play on user interaction.");
    });
  
    showMedia(current);
  });
    
