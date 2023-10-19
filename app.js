const getValueFormInput = (inputId) => {
    const inputfield = document.getElementById(inputId);
    const inputValue = inputfield.value;
    const input = parseFloat(inputValue);
    inputfield.value = '';
    return input;
}
const showArea = (id,area) =>{
    const areaShow = document.getElementById(id);
    areaShow.innerText = area;
}


// Triangle
const calculetTriangleArea = (baseId, heigtId, showAreaId) => {
    const base = getValueFormInput(baseId);
    const height = getValueFormInput(heigtId);
    const area = 0.5 * base * height;

    showArea(showAreaId,area)
}

// Rectangle
const calculetRectangleArea = (widthId, heightId, showAreaId) =>{
    const width = getValueFormInput(widthId);
    const height = getValueFormInput(heightId);
    const area = width * height;
    showArea(showAreaId,area)
}

// Parallelogram

const calculetParallelogramArea = (baseID,heigtId,showAreaId) =>{
    const base = getValueFormInput(baseID);
    const height = getValueFormInput(heigtId);

    const area = base * height;
    showArea(showAreaId,area)
}

// Rhombus

const calculetRhombusArea = (diagonalAId,diagonalBId,showAreaId) =>{
    const diagonalA = getValueFormInput(diagonalAId);
    const diagonalB = getValueFormInput(diagonalBId);
    
    const area = diagonalA * diagonalB;
    showArea(showAreaId,area)
}

// Pentagon

const calculetPentagonArea = (pentagonId,apothemId,showAreaId) => {
    const pentagon = getValueFormInput(pentagonId);
    const apothem = getValueFormInput(apothemId)
    const area = 0.5 * pentagon * apothem;
    showArea(showAreaId,area)
}

// Ellipse

const calculetEllipseArea = (AId,BId,showAreaId) =>{
    const A = getValueFormInput(AId);
    const B = getValueFormInput(BId);
    const piRow = Math.PI;
    const pi = piRow.toFixed(2)

    const area =  pi  * A * B;
    showArea(showAreaId,area)
}
