
const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const accessScreen = document.getElementById("accessScreen");
const messageScreen = document.getElementById("messageScreen");
const feedback = document.getElementById("feedback");
const hintBox = document.getElementById("hintBox");
const attemptDots = document.querySelectorAll(".attempt-dot");

let attempts = 0;

function unlock() {
  const password = passwordInput.value.trim().toLowerCase();

  if (password === "morat me mata") {
    accessScreen.hidden = true;
    messageScreen.hidden = false;
    return;
  }

  attempts++;

  if (attemptDots[attempts - 1]) {
    attemptDots[attempts - 1].classList.add("used");
  }

  passwordInput.value = "";

  if (attempts >= 3) {
    hintBox.hidden = false;
    feedback.textContent = "ACCESS DENIED. Try again.";
  } else {
    feedback.textContent = "Incorrect password. Try again.";
  }

  passwordInput.focus();
}

unlockButton.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    unlock();
  }
});
