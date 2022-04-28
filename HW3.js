origArray = [2,3,4];

document.addEventListener("DOMContentLoaded", function (event){
    document.getElementById("textboxone").value = origArray[0];
    document.getElementById("textboxtwo").value = origArray[1];
    document.getElementById("textboxthree").value = origArray[2];

    document.getElementById("button2").addEventListener("click",function(){
        newArray = origArray.map(cubeIt);
        document.getElementById("textboxone").value =newArray[0];
        document.getElementById("textboxtwo").value =newArray[1];
        document.getElementById("textboxthree").value =newArray[2];
    }
    );
    document.getElementById("button3").addEventListener("click",RaiseToForth);
}
);

function square()
{
    newArray = origArray.map(squareIt);
        document.getElementById("textboxone").value =newArray[0];
        document.getElementById("textboxtwo").value =newArray[1];
        document.getElementById("textboxthree").value =newArray[2];
}

function squareIt(oneElement){
    return oneElement * oneElement;
}

function cubeIt(oneElement){
    return oneElement * oneElement * oneElement;
}

function RaiseToForth()
{
    newArray = origArray.map(ToForthIt);
        document.getElementById("textboxone").value =newArray[0];
        document.getElementById("textboxtwo").value =newArray[1];
        document.getElementById("textboxthree").value =newArray[2];
}
function ToForthIt(oneElement){
    return oneElement * oneElement *oneElement * oneElement;
}