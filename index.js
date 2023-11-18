const colorBox = document.querySelector(".color-box");
const colorCode = document.querySelector("#color-code");
const flipButton = document.getElementById("btn");

const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
let currentColorIndex = 0;

function updateColor() {
    const rainbowColor = rainbowColors[currentColorIndex];
    colorBox.style.backgroundColor = rainbowColor;
    colorCode.textContent = rainbowColor;
    
    currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
}

flipButton.addEventListener("click", () => {
    colorBox.style.transition = "background-color 0.5s ease";
    updateColor();
});

colorBox.addEventListener("transitionend", () => {
    colorBox.style.transition = "none";
});

updateColor();
