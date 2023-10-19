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

