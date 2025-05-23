var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

init();
function init(){
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "correct";
                resetButton.textContent = "Play Again";
                changeColors(pickedColor);
            }
            else{
                this.style.backgroundColor = "grey";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

resetButton.addEventListener("click", function() {
    reset();
});

function setupMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            for (var j = 0; j < modeButtons.length; j++) {
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
        });
    }
}

function reset() {
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "black";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function chooseColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function genRandomColors(num){
    var arr = [];
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
