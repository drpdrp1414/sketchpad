function genDivs(size)
{
    var box = document.querySelector(".container")
    for(var i = 0; i < size; i++)
    {
        var row = document.createElement("div")
        row.className = "row";
        for(var x = 1; x <= size; x++)
        {
            let cell = document.createElement("div")
            cell.className= "gridsquare"
            cell.innerText = (i * size) + x
            row.appendChild(cell)
        }
        box.appendChild(row)
    }
   changeColor()
       
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

    console.log(cells.length)
}

function removeDivs()
{
    const containerNode = document.getElementById(".container")
    const childNodes = containerNode.firstChild
    if(childNodes){
        containerNode.removeChild(childNodes);
        childNodes = containerNode.firstChild
    }
}


