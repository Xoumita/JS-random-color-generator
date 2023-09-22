const button = document.querySelector("button");

const colorArea = document.getElementsByClassName("color-area")[0];

const rgbLebel = document.querySelector("p");

button.addEventListener("click", function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    
    colorArea.style.backgroundColor = `rgb(${r},${g},${b})`;
    rgbLebel.textContent =`rgb(${r},${g},${b})`;
});
