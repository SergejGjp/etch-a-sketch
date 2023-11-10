let gridSize = 16;
const divContainer = document.querySelector("#container");
let pixels = document.getElementsByClassName("pixel");

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.classList.add("pixel");
            box.addEventListener("click", makeBlack);
            grid.appendChild(box);
        };
        divContainer.appendChild(grid);
    };
};

createGrid();

//function to create a new grid
const btn = document.querySelector("#new-grid");

function getSquares() {
    let tempNo = parseInt(prompt("Enter the number of squares for the grid (max. 100)"));
    if (tempNo == 0 || tempNo > 100 ) {
        while (tempNo == 0 || tempNo > 100) {
            tempNo = parseInt(prompt("Enter the number smaller or equal to 100"));
            if (tempNo == null || Number.isNaN(tempNo)) {
                tempNo = 16;
            };
            }; 
        gridSize = tempNo;
    } else if(Number.isNaN(tempNo) || tempNo == null) {
        gridSize = 16;
    } else {
        gridSize = tempNo
    }; 
    console.log(gridSize);
    removeOldGrid(divContainer);
    createGrid();
};

function removeOldGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

btn.addEventListener("click", getSquares);

//functions to create and remove the event listeners
function addListener(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", func);
    };
};

function removeListener(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i].removeEventListener("click", func);
    };
};

function makeBlack() {
    this.classList.add("clicked");
};

let color1 = 0;
let color2;
let color3;
function makeRGB() {
    color1 = Math.floor(Math.random()*255);
    color2 = Math.floor(Math.random()*255);
    color3 = Math.floor(Math.random()*255);
    //console.log(color1, color2, color3);
    this.style.cssText = `background-color : rgb(${color1}, ${color2}, ${color3})`
};

function makeGrad() {
    this.style.cssText = `background-color : hsl(0, 0%, ${color1}%)`;
    while (color1 < 100) {
        color1 += 10;
        break;
    };
    //console.log(color1);
};

function makeWhite() {
    this.style.cssText = "background-color : white";
}

function makeColored() {
    this.style.cssText = `background-color: ${colorPick.value}`;
}

//Here the codes makes the mouseover to the selected color or option
let rgbBtn = document.querySelector("#rgb");

function toRgbPointer() {
    color1 = 0;
    color2 = 0;
    color3 = 0;
    removeListener(pixels, makeColored);
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeGrad);
    removeListener(pixels, makeWhite);
    addListener(pixels, makeRGB);
};

rgbBtn.addEventListener("click", toRgbPointer);

let gradBtn = document.querySelector("#gradient");

function toGradPointer() {
    color1 = 0;
    removeListener(pixels, makeColored);
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeRGB);
    removeListener(pixels, makeWhite);
    addListener(pixels, makeGrad);
}

gradBtn.addEventListener("click", toGradPointer);

let eraserBtn = document.querySelector("#eraser");

function toEraser() {
    removeListener(pixels, makeColored);
    removeListener(pixels, toGradPointer);
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeRGB);
    addListener(pixels, makeWhite);
}

eraserBtn.addEventListener("click", toEraser);

let colorPick = document.querySelector("#color");

function toColor() {
    removeListener(pixels, toGradPointer);
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeRGB);
    removeListener(pixels, makeWhite);
    addListener(pixels, makeColored);
}

colorPick.addEventListener("click", toColor);