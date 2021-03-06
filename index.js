const STANDARD_GRID = 16;
let actualColor = "blue";

function insertDivs(gridSize){
    let totalDivs = gridSize * gridSize;
    let parentDiv = document.querySelector("#parent-div");
    for (let i = 0; i < totalDivs; i++){
        let div = document.createElement("div");
        parentDiv.appendChild(div);
    }
    parentDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    parentDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}

function drawColor(){
    let parentDiv = document.querySelector("#parent-div");
    let divs = parentDiv.querySelectorAll("div");
    divs.forEach(function(div){
        div.addEventListener("mouseover", function(){
            if (actualColor === "rgb-values"){
                div.style.backgroundColor = randomColor();
            }
            else{
                div.style.backgroundColor = actualColor;
            }
        })
    })
}

function resetButton(){
    let btn = document.querySelector("#reset");
    btn.addEventListener("click", function(){
        let gridSize = Number(prompt("Enter the grid Size: "));
        console.log(gridSize);
        removeDivs();
        if (gridSize == 0){
            insertDivs(STANDARD_GRID);
        }
        else if(gridSize > 100){
            insertDivs(100);
        }
        else{
            insertDivs(gridSize);
        }
    })
}

function removeDivs(){
    let parentDiv = document.querySelector("#parent-div");
    let divs = parentDiv.querySelectorAll("div");
    divs.forEach(function(div){
        div.remove();
    })
}

function colorPicker(){
    let parentDiv = document.querySelector(".color-picker-container");
    let buttons = parentDiv.querySelectorAll("button");
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            let styles = getComputedStyle(button);
            if (button.getAttribute("id") === "rgb-values"){
                actualColor = button.getAttribute("id");
            }
            else{
                actualColor = styles.getPropertyValue("background-color");
            }
        })
    })
}

function randomColor(){
    let value1 = Math.floor(Math.random() * 256);
    let value2 = Math.floor(Math.random() * 256);
    let value3 = Math.floor(Math.random() * 256);
    return `rgb(${value1},${value2},${value3})`;
}

function eraseButton(){
    let btn = document.querySelector("#erase");
    btn.addEventListener("click", function(){
        let parentDiv = document.querySelector("#parent-div");
        let divs = parentDiv.querySelectorAll("div");
        divs.forEach(function(div){
            div.style.backgroundColor = "rosybrown";
    })
    })
}

insertDivs(16);
colorPicker();
drawColor();
resetButton();
eraseButton();
