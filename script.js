
/* =========================
   APOLOGY WEBSITE FOR ANISHA
========================= */

const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const flowersSection = document.getElementById("flowersSection");
const forgiveSection = document.getElementById("forgiveSection");
const surpriseSection = document.getElementById("surpriseSection");

// MUSIC
const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");

let musicPlaying = false;

// SHOW SECTION
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

// OPEN LETTER
document.getElementById("openLetter").addEventListener("click", () => {
  showSection(letterSection);
  createHearts(12);
});

// FLOWERS SECTION
document.getElementById("continueBtn").addEventListener("click", () => {
  showSection(flowersSection);
  createHearts(15);
});

// FLOWER BUTTON
document.getElementById("flowerBtn").addEventListener("click", () => {
  const message = document.getElementById("flowerMessage");

  message.classList.remove("hidden");
  message.classList.add("reveal");

  createHearts(25);
});

// FORGIVENESS SECTION
document.getElementById("forgiveBtn").addEventListener("click", () => {
  showSection(forgiveSection);
  createHearts(10);
});

// YES BUTTON
document.getElementById("yesBtn").addEventListener("click", () => {
  const message = document.getElementById("choiceMessage");

  message.textContent =
    "Thank you for sharing your heart with me. " +
    "I'll keep trying to be better. ❤️";

  message.classList.remove("hidden");
  message.classList.add("reveal");

  createHearts(35);

  setTimeout(() => {
    showSection(surpriseSection);
    createHearts(40);
  }, 1800);
});

// NO BUTTON - RESPECT HER SPACE
document.getElementById("NoBtn").addEventListener("click", () => {
  const message = document.getElementById("choiceMessage");

  message.textContent =
    "Feel sad to here that 
     ❤️";

  message.classList.remove("hidden");
  message.classList.add("reveal");
});

// REPLAY
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

// FLOATING HEARTS
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

// BACKGROUND HEARTS
setInterval(() => {
  createHearts(1);
}, 2500);

// MUSIC PLAYER
musicBtn.addEventListener("click", async () => {

  try {

    if (!musicPlaying) {

      await music.play();

      musicPlaying = true;
      musicLabel.textContent = "Pause our song";

    } else {

      music.pause();

      musicPlaying = false;
      musicLabel.textContent = "Play our song";

    }

  } catch (error) {

    console.error("Music error:", error);

    musicLabel.textContent = "Music unavailable";

  }

});

// INITIAL ANIMATION
createHearts(5);
