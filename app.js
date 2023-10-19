const getValueFormInput = (inputId) => {
    const inputfield = document.getElementById(inputId);
    const inputValue = inputfield.value;
    const input = parseFloat(inputValue);
    return input;
}
const showArea = (id,area) =>{
    const areaShow = document.getElementById(id);
    areaShow.innerText = area;
}



const calculetTriangleArea = (input1, input2,showAreaId) => {
    const base = getValueFormInput(input1);
    const height = getValueFormInput(input2);
    const area = 0.5 * base * height;

    showArea(showAreaId,area)

}



