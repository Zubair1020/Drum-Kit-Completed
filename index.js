function makeSound(filePath) {
  const audio = new Audio(filePath);
  audio.play();
}

function playSound(key) {
  const soundMap = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3",
  };

  const filePath = soundMap[key];

  if (filePath) {
    makeSound(filePath);
  } else {
    console.log("Invalid key:", key);
  }
}

function animateButton(button) {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 150);
}

function handelButtonClick() {
  const drumButtonClass = this.classList[0];
  playSound(drumButtonClass);
  animateButton(this);
}

function handelKeyDown(e) {
  const key = e.key.toLowerCase();
  const button = document.querySelector(`.${key}`);

  if (!button) return;

  playSound(key);
  animateButton(button);
}

function initializeApp() {
  const h2Element = document.querySelector("h2");
  const drumButtons = document.querySelectorAll(".drum");

  setTimeout(() => {
    h2Element.style.scale = 1;
  }, 250);
  setTimeout(() => {
    h2Element.style.scale = 0;
  }, 3500);

  document.addEventListener("keydown", handelKeyDown);

  drumButtons.forEach((drumButton) => {
    drumButton.addEventListener("click", handelButtonClick);
  });
}
window.onload = initializeApp;
