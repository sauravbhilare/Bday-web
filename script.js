document.addEventListener("DOMContentLoaded", function () {
  // COUNTDOWN TIMER (July 24, 2025)
  const birthday = new Date("July 24, 2025 00:00:00").getTime();
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML =
        "<h1>It's Your Birthday! 🎉</h1>";
    }
  }, 1000);

  // ENTER BIRTHDAY PAGE
  document.getElementById("enter-btn").addEventListener("click", function () {
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("birthday-page").classList.remove("hidden");
    createConfetti();
  });

  // TAB SYSTEM
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons/panels
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Show corresponding panel
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // PHOTO GALLERY ZOOM EFFECT
  const galleryImgs = document.querySelectorAll(".gallery-img");
  galleryImgs.forEach((img) => {
    img.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
    });
    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0)";
    });
  });

  // REASONS SHOW MORE
  document
    .getElementById("more-reasons")
    .addEventListener("click", function () {
      alert("I'll add more reasons soon! 💖");
    });

  // GIFT BOX ANIMATION
  document.getElementById("open-gift").addEventListener("click", function () {
    const lid = document.querySelector(".box-lid");
    const message = document.querySelector(".gift-message");

    lid.style.transform = "rotateX(180deg)";
    lid.style.opacity = "0.5";
    message.classList.remove("hidden");

    this.textContent = "Hope you like it! 😘";
    this.disabled = true;
  });

  // GAME BUTTON
  document.getElementById("start-game").addEventListener("click", function () {
    alert("Game coming soon! 🎮");
  });

  // CONFETTI EFFECT
  function createConfetti() {
    const confettiContainer = document.querySelector(".confetti");
    const colors = ["#ff6b6b", "#ffb700", "#d23369", "#6b5bff", "#5bff6b"];

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = "-10px";
      confetti.style.borderRadius = "50%";
      confetti.style.animation = `fall ${
        Math.random() * 3 + 2
      }s linear infinite`;

      confettiContainer.appendChild(confetti);

      // Add animation
      const keyframes = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(${
                          Math.random() * 360
                        }deg);
                    }
                }
            `;

      const styleEl = document.createElement("style");
      styleEl.innerHTML = keyframes;
      document.head.appendChild(styleEl);
    }
  }
});
