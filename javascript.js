let squareNo; 
let btn = document.querySelector("#new-grid");
let div = document.querySelector(".container");
let body = document.querySelector("body");

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
   const createBtn = document.createElement("button");
   const para = document.createElement("p");
   const brk = document.createElement("br");
   para.textContent = `The grid will have a size of ${squareNo} squares.`;
   createBtn.textContent = `Create a ${squareNo}x${squareNo} grid`;
   body.insertBefore(para, div);
   body.insertBefore(createBtn, div);
   body.insertBefore(brk, div);
};

btn.addEventListener("click", getSquares);

function createVert(num) {
    let pixel;
    for (let i = 1; i<= num; i++) {
        pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel");
        div.appendChild(pixel);
    };
};


