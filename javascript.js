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
    let pixels = document.getElementsByClassName("pixel");
    console.log(pixels.length);
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", () => pixels[i].classList.add("clicked"));
    };
};

createGrid();





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