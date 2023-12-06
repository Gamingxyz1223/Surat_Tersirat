const text = document.getElementById("demo");
const gif = document.getElementById("gif");

function myFunction() {
    text.innerHTML = "ああああああ、私もあなたが好きです";
    gif.src = "https://media.tenor.com/OP7iKHpQyVAAAAAC/menhera-chan-love.gif";
}

// function tidak() {
//     text.innerHTML = "";
//     gif.src = "gambate.mp4";
// }

function jangan() {
    const noBtnReact = document.getElementById("noBtn").getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;
    // //
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    // //
    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
}
// //
function tidak() {
    const noBtnReact = document.getElementById("noBtn").getBoundingClientRect();
    const maxX = window.innerWidth - noBtnReact.width;
    const maxY = window.innerHeight - noBtnReact.height;
    // //
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    // //
    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
}
// //
// 


    
