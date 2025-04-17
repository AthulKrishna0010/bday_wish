const media = [
    { type: "video", src: "media/first vid.mp4", caption: "Oh No, Ahahahahahahahah" },
    { type: "video", src: "media/rolls.mp4", caption: "Remember US having rolls together??" },
    { type: "video", src: "media/football.mp4", caption: "You megging me ehehehehe" },
    { type: "video", src: "media/subway.mp4", caption: "How good are you at subway surfers huhhh" },
    { type: "video", src: "media/momos.mp4", caption: "Remeber your celebration ahahahah" },
    { type: "image", src: "media/1 year.jpg", caption: "1 year ceremony ehehehehe" },
    { type: "image", src: "media/1.jpg", caption: "Thanks for being by my side, always" },
    { type: "image", src: "media/2.jpg", caption: "There is never gonna be anyone like you for me" },
    { type: "image", src: "media/3.jpg", caption: "I will always love youu princesss :))))" }
  ];
  const typewriterText =
  "HAPPY BIRTHDAY to the Sweetest Girl in my Life.<br><br>" +
  "I could not be more thankful<br>" +
  "to have such a loving,<br>" +
  "caring, and of course,<br>" +
  "stubborn girlfriend <br>" +
  "who I can proudly call MINE.<br><br>" +

  "It's been almost 1.5 years<br>" +
  "of your beautiful soul<br>" +
  "making my life worth living<br>" +
  "every single day.<br><br>" +

  "And I keep falling for you<br>" +
  "more and more every day,<br>" +
  "more than I did yesterday.<br><br>" +

  "IS IT OKAY FOR ME<br>" +
  "TO KIDNAP YOU<br>" +
  "AND KEEP YOU ALL<br>" +
  "TO MYSELF FOREVER?<br>" +
  "EHEHEHE <br><br>" +

  "Listen, my cutiieee patootieee...<br>" +
  "TODAY IS YOUR DAYYYYYYY! <br>" +
  "YESSSS! TODAY IS<br>" +
  "MY GIRL'S SPECIAL DAYYYY <br><br>" +

  "Just know that<br>" +
  "I loveeeeeee youuuuuuuuuu<br>" +
  "sooooooooooo muchhhhhhhhhhhhh<br>" +
  "and willlllllll neverrrr<br>" +
  "stop lovinggg youuuuu,<br>" +
  "my one and only princessssss <br><br>" +

  "Wellll don't goo yetttttt...<br>" +
  "I've got something more for you to see :)) ";

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
    