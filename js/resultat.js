const params = new URLSearchParams(window.location.search);
const namn = params.get("namn");
const poang = params.get("poang");
const omgang = params.get("omgang");

document.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("resultText");
    result.textContent = `Grattis, ${namn}! Du vann med ${poang} poäng på ${omgang} rundor!`;
});

function playAgain() {
    window.location.href = `index.html`;
}
