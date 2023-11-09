let gridSize = 16;
const divContainer = document.querySelector("#container");
let pixels = document.getElementsByClassName("pixel");

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.classList.add("pixel");
            box.addEventListener("mouseover", makeBlack);
            grid.appendChild(box);
        };
        divContainer.appendChild(grid);
    };
};

createGrid();

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
}

function addListener(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("mouseover", func);
    };
};

function removeListener(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i].removeEventListener("mouseover", func);
    };
};

const btn = document.querySelector("#new-grid");

function getSquares() {
    let tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
    if (tempNo > 100) {
         while (tempNo > 100) {
             tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
         }; 
         gridSize = tempNo;
    } else {
        gridSize = tempNo;
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

let rgbBtn = document.querySelector("#rgb");

function toRgbPointer() {
    color1 = 0;
    color2 = 0;
    color3 = 0;
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeGrad);
    addListener(pixels, makeRGB);
};

rgbBtn.addEventListener("click", toRgbPointer);

let gradBtn = document.querySelector("#gradient");

function toGradPointer() {
    color1 = 0;
    removeListener(pixels, makeBlack);
    removeListener(pixels, makeRGB);
    addListener(pixels, makeGrad);
}

gradBtn.addEventListener("click", toGradPointer);