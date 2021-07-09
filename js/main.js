let arrSize = document.querySelector(".arrSize");

function buildBars(size) {
    let dataArr = [];
        document.getElementById("executionTime").innerHTML = " ";
    let barsBlock = document.querySelector(".barsBlock");
    for(let i = 1; i <= size; i++) {
        dataArr[i] = Math.floor(Math.random()*550);
        let bar = document.createElement("div");
        bar.classList.add("bars")
        bar.style.height = dataArr[i] + "px";
        barsBlock.appendChild(bar);
    }
}

const waitFun=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

let newDataCalled = document.querySelector("#newData");
newDataCalled.addEventListener("click", () => {
    document.querySelectorAll(".bars").forEach((eachBar) => {
        eachBar.remove();
    });
    document.getElementById("executionTime").innerHTML =" ";
    buildBars(arrSize.value);
}); 

arrSize.addEventListener("input", () => {
    document.querySelectorAll(".bars").forEach((eachBar) => {
        eachBar.remove();
    });
    buildBars(arrSize.value);    
    document.getElementById("executionTime").innerHTML =" ";
});

async function swapBar(firstIndex, secondIndex) {
    firstIndex.style.background = "#f00000";
    secondIndex.style.background = "#f00000";
    await waitFun(300);
    let temp1 = firstIndex.style.height;
    let temp2 = secondIndex.style.height;

    firstIndex.style.height = temp2;
    secondIndex.style.height = temp1;
    await waitFun(300);
}

let bubbleSortGen = document.querySelector("#Bubblesort");
bubbleSortGen.addEventListener("click", () => {
    //console.log("bubbleSort called!")
    let dataBars = document.querySelectorAll(".bars");
    bubbleSort(dataBars);
});

let selectionSortGen = document.querySelector("#Selectionsort");
selectionSortGen.addEventListener("click", () => {
    // console.log("SelectionSort called!")
    let dataBars = document.querySelectorAll(".bars");
    selectionSort(dataBars);
});
let insertionSortGen = document.querySelector("#Insertionsort");
insertionSortGen.addEventListener("click", () => {
    console.log("InsertionSort called!")
    let dataBars = document.querySelectorAll(".bars");
    insertionSort(dataBars);
});
function darkMode() {
   document.body.classList.toggle("dark-mode");
}
