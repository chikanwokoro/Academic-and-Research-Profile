const idCard = document.getElementById("idCard");
const intro = document.getElementById("intro");
const enterSite = document.getElementById("enterSite");
const typedText = document.getElementById("typedText");
const focusText = document.getElementById("focusText");

idCard.addEventListener("click", () => idCard.classList.toggle("flipped"));
enterSite.addEventListener("click", () => {
  intro.classList.add("hide");
  setTimeout(() => { intro.style.display = "none"; }, 700);
});

const phrases = [
  "Exploring biological questions through biochemistry.",
  "Studying molecular structure, function and recognition.",
  "Building research depth in computational glycobiology."
];
let phraseIndex = 0, charIndex = 0, deleting = false;
function typeLoop() {
  const phrase = phrases[phraseIndex];
  typedText.textContent = phrase.slice(0, charIndex);
  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeLoop, 45);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1500);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 22);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, 350);
  }
}
typeLoop();

const focusPhrases = ["computational glycobiology", "glycan structural analysis", "molecular interactions"];
let focusIndex = 0;
setInterval(() => {
  focusIndex = (focusIndex + 1) % focusPhrases.length;
  focusText.textContent = focusPhrases[focusIndex];
}, 2800);
