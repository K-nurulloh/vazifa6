const polya = document.getElementById("polya");
const ball = document.getElementById("ball");
const kick = document.getElementById("soccer");

polya.addEventListener("click", function(e) {
    let joy = polya.getBoundingClientRect();

    
    let x = e.clientX - joy.left - ball.clientWidth / 2;
    let y = e.clientY - joy.top - ball.clientHeight / 2;


    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > joy.width - ball.clientWidth) 
        x = joy.width - ball.clientWidth;

    if (y > joy.height - ball.clientHeight) 
        y = joy.height - ball.clientHeight;

    
    ball.style.left = x + "px";
    ball.style.top  = y + "px";

    kick.currentTime = 0;
    kick.play();
});