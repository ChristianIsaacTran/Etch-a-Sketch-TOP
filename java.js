const defaultSize = 16;
let inputSize = 16;
const body = document.querySelector("body");
const container = document.querySelector("#container");
const btnNewGrid = document.createElement("button");
let newGridSize = container.clientWidth / inputSize;
btnNewGrid.textContent = "Generate New Grid";
btnNewGrid.style.margin = "10px";
btnNewGrid.style.padding = "20px";

btnNewGrid.addEventListener("click", createNewGrid);

body.insertBefore(btnNewGrid, container);

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";
            newDiv.addEventListener("mouseover", function () {
                //newDiv.style.backgroundColor = "grey";
                //Extra credit:
                newDiv.style.backgroundColor = randomColor();
            }, {once: true});

            newDiv.style.width = `${newGridSize}px`;
            newDiv.style.height = `${newGridSize}px`;

            container.appendChild(newDiv);

        }
    }
    console.log("GRID CREATED");
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    
    return `rgb(${r},${g},${b})`;
}

function removeGrid() {
    const divList = document.querySelectorAll(".grid");
    divList.forEach(div => {
        container.removeChild(div);
    });
}

function createNewGrid() {
    inputSize = prompt("Please enter in the square grid size: ", "16");

    if (inputSize > 100 || inputSize < 1) {
        alert("Invalid size given.");
        return;
    }

    //Uses the width of the flex container divided by the size given by the user to calculate grid cell size.
    newGridSize = container.clientWidth / inputSize;

    removeGrid();
    createGrid(inputSize);
}



createGrid(defaultSize);

