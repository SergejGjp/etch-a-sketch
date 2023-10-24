let squareNo; 
let btn = document.querySelector("#new-grid");

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
};

btn.addEventListener("click", getSquares);

// for (let i = 0; i <= squareNo; i++) {

// }