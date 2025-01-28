const defaultSize = 16;
const body = document.querySelector("body");
const container = document.querySelector("#container");
const btnNewGrid = document.createElement("button");
btnNewGrid.textContent = "Generate New Grid";
btnNewGrid.style.margin = "10px";

btnNewGrid.addEventListener("click", createNewGrid);

body.insertBefore(btnNewGrid, container);

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";

            newDiv.addEventListener("mouseover", function () {
                newDiv.style.backgroundColor = "grey";
            });

            container.appendChild(newDiv);

        }
    }
    console.log("GRID CREATED");
}

function removeGrid(inputSize) {
    const divList = document.querySelectorAll(".grid");
    divList.forEach(div => {
        container.removeChild(div);
    });
}

function createNewGrid() {
    let inputSize = prompt("Please enter in the square grid size: ", "16");
    console.log(inputSize);
    
    removeGrid(inputSize);
    createGrid(inputSize);
}



createGrid(defaultSize);

