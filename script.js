

/* =========================
   APOLOGY WEBSITE
   Made with love for Anisha
========================= */

const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const flowersSection = document.getElementById("flowersSection");
const forgiveSection = document.getElementById("forgiveSection");
const surpriseSection = document.getElementById("surpriseSection");

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");

let musicPlaying = false;

// Smoothly show a section and scroll to it
function showSection(section) {
  section.classList.remove("hidden");
  section.classList.add("reveal");

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}

// Opening the letter
document.getElementById("openLetter").addEventListener("click", () => {
  showSection(letterSection);

  createHearts(12);
});

// Continue to flowers
document.getElementById("continueBtn").addEventListener("click", () => {
  showSection(flowersSection);

  createHearts(15);
});

// Flower gesture
document.getElementById("flowerBtn").addEventListener("click", () => {
  const message = document.getElementById("flowerMessage");

  message.classList.remove("hidden");
  message.classList.add("reveal");

  createHearts(25);

  document.getElementById("flowerBtn").textContent =
    "A little bouquet for you 🌸";
});

// Continue to forgiveness question
document.getElementById("forgiveBtn").addEventListener("click", () => {
  showSection(forgiveSection);

  createHearts(10);
});

// Forgiveness button
document.getElementById("yesBtn").addEventListener("click", () => {
  const message = document.getElementById("choiceMessage");

  message.textContent =
    "Thank you for sharing your heart with me. " +
    "I'll keep trying to be better, and I hope we can " +
    "make more beautiful memories together. ❤️";

  message.classList.remove("hidden");
  message.classList.add("reveal");

  createHearts(35);

  setTimeout(() => {
    showSection(surpriseSection);
    createHearts(40);
  }, 1800);
});

// If she needs time
document.getElementById("timeBtn").addEventListener("click", () => {
  const message = document.getElementById("choiceMessage");

  message.textContent =
    "That's completely okay, Ani. Take all the time " +
    "you need. I'll respect your feelings and your space. " +
    "I'm here whenever you're ready. ❤️";

  message.classList.remove("hidden");
  message.classList.add("reveal");
});

// Replay website
document.getElementById("replayBtn").addEventListener("click", () => {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.add("hidden");
    section.classList.remove("reveal");
  });

  hero.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Floating hearts
function createHearts(amount) {
  const container = document.getElementById("particles");

  const symbols = ["♡", "♥", "✧", "✦"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "particle";

    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
      Math.random() * 20 + 12 + "px";

    heart.style.color =
      Math.random() > 0.5 ? "#d98798" : "#bd9b68";

    heart.style.animationDuration =
      Math.random() * 4 + 5 + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }
}

// Occasional floating hearts
setInterval(() => {
  createHearts(1);
}, 2500);

// Music button

// MUSIC PLAYER
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");

let musicPlaying = false;

musicBtn.addEventListener("click", async () => {

  if (!musicPlaying) {
    try {
      await music.play();

      musicPlaying = true;
      musicLabel.textContent = "Pause our song";

    } catch (error) {
      console.error("Music playback error:", error);
      musicLabel.textContent = "Unable to play song";
    }

  } else {
    music.pause();

    musicPlaying = false;
    musicLabel.textContent = "Play our song";
  }

});


// Initial gentle hearts
createHearts(5);
