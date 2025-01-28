const container = document.querySelector("#container");


function createGrid(){
    for (let i = 1; i <= 16; i++) {
        for (let j = 1; j <= 16; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid";

            newDiv.addEventListener("mouseover", function(){
                newDiv.style.backgroundColor = "grey";
            });

            container.appendChild(newDiv);
        
        }
    }

    console.log("GRID CREATED");
}

createGrid();

