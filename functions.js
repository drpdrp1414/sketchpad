function genDivs(size)
{
    var box = document.querySelector(".container")
    box.innerHTML="";
    for(var i = 0; i < size; i++)
    {
        var row = document.createElement("div")
        row.className = "row";
        for(var x = 1; x <= size; x++)
        {
            let cell = document.createElement("div")
            cell.className= "gridsquare"
            //cell.innerText= (i * size) + x
            row.appendChild(cell)
        }
        box.appendChild(row)
    }
    sizeControl()
    changeColor()   
}

function newGrid()
{
    var size = prompt("Please enter the size of grid you want: ", "16")
    if(isNaN(size))
    {
        alert("Please enter a real number!");
    }
    else
    {
        genDivs(size)
    }
}

function sizeControl(){
    var cells = document.querySelectorAll(".gridsquare")
    var cell = document.querySelector(".gridsquare")
    var dimension = Math.sqrt(cells.length)
    var heightNew = 660/dimension + "px"
    
    /* cells.style.height = heightNew
    cells.style.width = heightNew */
}

function changeColor()
{ 
    var cells = document.querySelectorAll(".gridsquare")
    for(let i = 0; i < cells.length; i++)
    {
        cells.item(i).addEventListener("mouseenter", function()
        {
            cells.item(i).classList.add("permaHover")
        })
    }
    //console.log(cells.length)
}

function resetDivs()
{
    var cells = document.querySelectorAll(".gridsquare")
    let dimension = Math.sqrt(cells.length)
    genDivs(dimension)
}
