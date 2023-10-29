const calcArea=()=>{
    const inputArea = document.getElementById('area').value;
    const areaSelected = document.getElementById('area_diff');
    const valueArea = area_diff.options[areaSelected.selectedIndex].value;

    //Marla to Squarefeet
    const marTosq = (marla)=>{
        let squareFeet = (marla * 272.25).toFixed(1);
        return squareFeet;    
    }
    //Squarefeet to marla
    const sqToMar = (sqFeet) =>{
        let marla = (sqFeet / 272.25).toFixed(1);
        return marla;
    }
    if (valueArea== 'marla'){
        document.getElementById("result").innerHTML = marTosq (inputArea) + "&#176; Sqaure feet";

    }
    else {
                document.getElementById("result").innerHTML = sqToMar (inputArea) + "&#176; Marla";

    }
}