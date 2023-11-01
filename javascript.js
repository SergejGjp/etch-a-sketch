// let squareNo; 
// let btn = document.querySelector("#new-grid");
// let div = document.querySelector(".main");
// let body = document.querySelector("body");
// const createBtn = document.createElement("button");
// const para = document.createElement("p");
// const brk = document.createElement("br");
// body.insertBefore(para, div);
// body.insertBefore(createBtn, div);
// body.insertBefore(brk, div);
// createBtn.style.display = "none"

// function getSquares() {
//    let tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
//    if (tempNo > 100) {
//         while (tempNo > 100) {
//             tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
//         }; 
//         squareNo = tempNo;
//     } else {
//         squareNo = tempNo;
//     }; 
//    console.log(squareNo);
//    para.textContent = `The grid will have a size of ${squareNo} squares.`;
//    createBtn.textContent = `Create a ${squareNo}x${squareNo} grid`;
//    if (createBtn.style.display === "none") {
//         createBtn.style.display = "block"
//    };
// };

// btn.addEventListener("click", getSquares);

// let pixel = document.createElement("div");
// function createVert(num) {
//     ;
//     let pixelCont = document.createElement("div");
//     div.appendChild(pixelCont);
//     for (let i = 0; i< num; i++) {
//         pixel = document.createElement("div");
//         pixel.setAttribute("class", "pixel");
//         pixelCont.appendChild(pixel);
        
//     };
//     return pixelCont;
// };

// function createHori(num) {
//     div.removeChild(div.lastElementChild);
//     let horiPixel;
//     let horiPixelCont = document.createElement("div");
//     horiPixelCont.setAttribute("class","container");
//     for (let i = 0; i < num; i++) {
//         horiPixel = document.createElement("div");
//         horiPixelCont.appendChild(horiPixel);
//         horiPixel.appendChild(createVert(num));
//         div.appendChild(horiPixelCont);
//     };
//     let elements = document.getElementsByClassName("pixel");
//     for (i = 0; i < elements.length; i++) {
//         elements[i].addEventListener("mouseover", makeBlack);
//     };
// };

// createBtn.addEventListener("click", () => createHori(squareNo));

// function makeBlack() { this.classList.add("class", "mouse-over")};

let gridSize = 16;
const divContainer = document.querySelector("#container");

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let grid = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.classList.add("pixel");
            grid.appendChild(box);
        };
        divContainer.appendChild(grid);
    };
};

createGrid();

let pixels = document.getElementsByClassName("pixel");

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mouseover", () => pixels[i].classList.add("clicked"));
};
