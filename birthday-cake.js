document.addEventListener("DOMContentLoaded", function () {
  // ============ Typing Effect for Text ============
  const textElement = document.querySelector(".text");
  const textContent = textElement.textContent;

  // Clear the text element
  textElement.textContent = "";

  // Wrap each character in a span
  const charDelay = 100; // 100ms between each character
  const startDelay = 6600; // 6.6 seconds before text starts

  for (let i = 0; i < textContent.length; i++) {
    const span = document.createElement("span");
    span.textContent = textContent[i];

    // Calculate animation delay for this character (in seconds)
    textElement.style.opacity = '1'
    const delay = (startDelay + i * charDelay) / 1000 + "s";
    span.style.animationDelay = delay;

    textElement.appendChild(span);
  }

  // ============ Heart Animation ============
  const hearts = document.querySelectorAll(".heart");

  hearts.forEach((heart, index) => {
    const firstHearts = 180;
    // Random left position from 0% to 100%
    const left = Math.random() * 100 + "%";

    // First 50 hearts start immediately, others have random delay
    let delay = index < firstHearts ? "0s" : Math.random() * 20 + "s";

    // Random animation duration from 8s to 12s
    let duration = Math.random() * 60 + 25 + "s";

    // First 50 hearts start from top: 0px
    if (index < firstHearts) {
      duration = Math.random() * 60 + 25 + "s";
      heart.style.top = "140px";
    }

    // Apply the styles
    heart.style.left = left;
    heart.style.animationDelay = delay;
    heart.style.animationDuration = duration;
  });
});
