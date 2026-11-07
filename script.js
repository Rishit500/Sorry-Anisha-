
/* ==========================================
   A LITTLE APOLOGY FOR ANISHA
   JavaScript
   Made with love by Rishit
========================================== */


/* ==========================================
   1. GET HTML ELEMENTS
========================================== */

const hero = document.getElementById("hero");

const letterSection =
  document.getElementById("letterSection");

const flowersSection =
  document.getElementById("flowersSection");

const forgiveSection =
  document.getElementById("forgiveSection");

const surpriseSection =
  document.getElementById("surpriseSection");


/* ==========================================
   2. MUSIC PLAYER
========================================== */

const music =
  document.getElementById("backgroundMusic");

const musicBtn =
  document.getElementById("musicBtn");

const musicLabel =
  document.getElementById("musicLabel");

let musicPlaying = false;


// Play and pause music
musicBtn.addEventListener("click", async () => {

  if (!musicPlaying) {

    try {

      await music.play();

      musicPlaying = true;

      musicLabel.textContent = "Pause our song";

      musicBtn.setAttribute(
        "aria-label",
        "Pause music"
      );

    } catch (error) {

      console.error("Music playback error:", error);

      musicLabel.textContent = "Try again";

    }

  } else {

    music.pause();

    musicPlaying = false;

    musicLabel.textContent = "Play our song";

    musicBtn.setAttribute(
      "aria-label",
      "Play music"
    );

  }

});


// Keep button state synchronized if playback ends
music.addEventListener("pause", () => {

  musicPlaying = false;

  musicLabel.textContent = "Play our song";

});

music.addEventListener("play", () => {

  musicPlaying = true;

  musicLabel.textContent = "Pause our song";

});


/* ==========================================
   3. SHOW SECTIONS
========================================== */

function showSection(section) {

  section.classList.remove("hidden");

  section.classList.remove("reveal");

  // Restart animation
  void section.offsetWidth;

  section.classList.add("reveal");

  setTimeout(() => {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

}


/* ==========================================
   4. INTRO TO APOLOGY LETTER
========================================== */

document
  .getElementById("openLetter")
  .addEventListener("click", () => {

    showSection(letterSection);

    createHearts(12);

  });


/* ==========================================
   5. LETTER TO FLOWERS
========================================== */

document
  .getElementById("continueBtn")
  .addEventListener("click", () => {

    showSection(flowersSection);

    createHearts(15);

  });


/* ==========================================
   6. VIRTUAL FLOWERS
========================================== */

const flowerBtn =
  document.getElementById("flowerBtn");

const flowerMessage =
  document.getElementById("flowerMessage");


flowerBtn.addEventListener("click", () => {

  flowerMessage.classList.remove("hidden");

  flowerMessage.classList.remove("reveal");

  void flowerMessage.offsetWidth;

  flowerMessage.classList.add("reveal");

  flowerBtn.textContent =
    "A little bouquet for you 🌸";

  createHearts(25);

});


/* ==========================================
   7. FLOWERS TO FORGIVENESS
========================================== */

document
  .getElementById("forgiveBtn")
  .addEventListener("click", () => {

    showSection(forgiveSection);

    createHearts(15);

  });


/* ==========================================
   8. FORGIVENESS BUTTON
========================================== */

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("NoBtn");

const choiceMessage =
  document.getElementById("choiceMessage");


yesBtn.addEventListener("click", () => {

  choiceMessage.textContent =
    "Thank you for sharing your heart with me, Ani. " +
    "I'll keep trying to be better, listen more, " +
    "and make more beautiful memories together. ❤️";

  choiceMessage.classList.remove("hidden");

  choiceMessage.classList.remove("reveal");

  void choiceMessage.offsetWidth;

  choiceMessage.classList.add("reveal");

  createHearts(35);

  yesBtn.disabled = true;

  // Reveal the surprise after a short pause
  setTimeout(() => {

    showSection(surpriseSection);

    createHearts(40);

  }, 2200);

});


/* ==========================================
   9. NEED MORE TIME BUTTON
========================================== */

noBtn.addEventListener("click", () => {

  choiceMessage.textContent =
    "felt sad to hear this" +
    
    "give me last chance please ❤️";

  choiceMessage.classList.remove("hidden");

  choiceMessage.classList.remove("reveal");

  void choiceMessage.offsetWidth;

  choiceMessage.classList.add("reveal");

  createHearts(8);

});


/* ==========================================
   10. FLOATING HEART ANIMATION
========================================== */

function createHearts(amount) {

  const container =
    document.getElementById("particles");

  const symbols = [
    "♡",
    "♥",
    "✧",
    "✦"
  ];

  for (let i = 0; i < amount; i++) {

    const heart =
      document.createElement("span");

    heart.className = "particle";

    heart.textContent =
      symbols[
        Math.floor(Math.random() * symbols.length)
      ];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      Math.random() * 20 + 12 + "px";

    heart.style.color =
      Math.random() > 0.5
        ? "#d98798"
        : "#bd9b68";

    heart.style.animationDuration =
      Math.random() * 4 + 5 + "s";

    container.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 10000);

  }

}


/* ==========================================
   11. BACKGROUND HEARTS
========================================== */

// Create occasional floating hearts
setInterval(() => {

  createHearts(1);

}, 2500);


/* ==========================================
   12. REPLAY WEBSITE
========================================== */

document
  .getElementById("replayBtn")
  .addEventListener("click", () => {

    // Hide all sections
    document
      .querySelectorAll("main section")
      .forEach(section => {

        section.classList.add("hidden");

        section.classList.remove("reveal");

      });


    // Show intro again
    hero.classList.remove("hidden");

    // Reset buttons
    yesBtn.disabled = false;

    flowerBtn.innerHTML =
      'Send me a little love <span>♡</span>';

    flowerMessage.classList.add("hidden");

    choiceMessage.classList.add("hidden");


    // Scroll to top
    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

    createHearts(15);

  });


/* ==========================================
   13. INITIAL ANIMATION
========================================== */

createHearts(5);

console.log(
  "Apology website loaded successfully ❤️"
);

