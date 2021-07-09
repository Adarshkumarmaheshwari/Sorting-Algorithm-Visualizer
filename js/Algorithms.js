
//----------------------------------------Bubble Sort-------------------------------------------------------------
async function bubbleSort(dataBars) {
    var start =  Date.now();
    for (var i = 0; i < 100000000;i++);
    for (let i = 0; i < dataBars.length; i++) {
        for (let j = 0; j < (dataBars.length-i-1); j++) {

            dataBars[j].style.background = "#0072ff";
            dataBars[j+1].style.background = "#0072ff";
            await waitFun(300);

            if (parseInt(dataBars[j].style.height) > parseInt(dataBars[j+1].style.height)) {
                await swapBar(dataBars[j], dataBars[j+1]);
            }
            dataBars[j].style.background = "#00d2ff";
            dataBars[j+1].style.background = "#00d2ff";
            await waitFun(300);
        }
        dataBars[dataBars.length-i-1].style.background = "#15fa00";
            await waitFun(300);
    }
    var end =  Date.now();
    document.getElementById("executionTime").innerHTML =((end - start)*0.001).toFixed(2)+ "s";
}

//--------------------------------------Selection Sort---------------------------------------------------------------

async function selectionSort(dataBars)
    {
        var start =  Date.now();
    for (var i = 0; i < 100000000;i++);
        for(let i=0; i<dataBars.length; i++){
            let minIdx = i; //stores index 0
            dataBars[minIdx].style.background = "#0072ff";
            await waitFun(400);

            for(let j=i +1; j<dataBars.length; j++ ){
            dataBars[j].style.background = "#d000ff";
             await waitFun(300);

                if(parseInt(dataBars[j].style.height) < parseInt(dataBars[minIdx].style.height))
                minIdx=j; //smallest value found and assigned to minIndx
                dataBars[j].style.background = "#00ffff";

            }
            if(minIdx!== i){
                await swapBar(dataBars[minIdx], dataBars[i]);
            }
            dataBars[i].style.background = "#15fa00";
            await waitFun(300);
        }
         var end =  Date.now();
    document.getElementById("executionTime").innerHTML =((end - start)*0.001).toFixed(2)+ "s";
    }

//--------------------------------------Insertion Sort---------------------------------------------------------------
async function insertionSort (dataBars) {
    var start =  Date.now();
    for (var i = 0; i < 100000000;i++);
    for(var i = 0; i < dataBars.length; i++){
    //set min to the current iteration of i
    var min = i;
    dataBars[i].style.background = "#15fa00";
    await waitFun(300);
    for(var j = i+1; j < dataBars.length; j++){
        
        dataBars[j].style.background = "#0072ff";
            await waitFun(500);
            dataBars[j-1].style.background = "";

      if(parseInt(dataBars[j].style.height) < parseInt(dataBars[min].style.height)){
       min = j;
      }
    }
    await swapBar(dataBars[min], dataBars[i]);
    dataBars[i].style.background = "#15fa00";

     await waitFun(300);
    
  }
    var end =  Date.now();
    document.getElementById("executionTime").innerHTML =((end - start)*0.001).toFixed(2)+ "s";
};
//--------------------------------------Quick Sort---------------------------------------------------------------
//--------------------------------------Merge Sort---------------------------------------------------------------
