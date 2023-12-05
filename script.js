const text = document.getElementById("demo");
const gif = document.getElementById("gif");

function myFunction() {
    text.innerHTML = "Aaaaaa, I like you too";
    gif.src =
        "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
}

function over() {
    const noBtnReact = document.getElementById("noBtn").getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
}

function no() {
    const noBtnReact = document.getElementById("noBtn").getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
}