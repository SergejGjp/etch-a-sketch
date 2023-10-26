let squareNo; 
let btn = document.querySelector("#new-grid");
let div = document.querySelector(".main");
let body = document.querySelector("body");
const createBtn = document.createElement("button");
const para = document.createElement("p");
const brk = document.createElement("br");
body.insertBefore(para, div);
body.insertBefore(createBtn, div);
body.insertBefore(brk, div);
createBtn.style.display = "none"

function getSquares() {
   let tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
   if (tempNo > 100) {
        while (tempNo > 100) {
            tempNo = prompt("Enter the number of squares for the grid (max. 100)", 0);
        }; 
        squareNo = tempNo;
    } else {
        squareNo = tempNo;
    }; 
   console.log(squareNo);
   para.textContent = `The grid will have a size of ${squareNo} squares.`;
   createBtn.textContent = `Create a ${squareNo}x${squareNo} grid`;
   if (createBtn.style.display === "none") {
        createBtn.style.display = "block"
   };
};

btn.addEventListener("click", getSquares);

function createVert(num) {
    let pixel;
    let pixelCont = document.createElement("div");
    div.appendChild(pixelCont);
    for (let i = 0; i< num; i++) {
        pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        pixelCont.appendChild(pixel);
    };
    return pixelCont;
};

let horiPixelCont;
function createHori(num) {
    div.removeChild(div.lastElementChild);
    let horiPixel;
    horiPixelCont = document.createElement("div");
    horiPixelCont.setAttribute("class","container");
    for (let i = 0; i < num; i++) {
        horiPixel = document.createElement("div");
        horiPixelCont.appendChild(horiPixel);
        horiPixel.appendChild(createVert(num));
        div.appendChild(horiPixelCont);
    }
};

