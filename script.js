
// Click events
let input = document.querySelector("input")
function addValue(elementValue) {
    input.value += elementValue;

}

// for clear the Values
function clearValue() {
    input.value = "";

}

// for delete values
function deleteValue() {
    input.value= input.value.slice(0,input.value.length-1)
}


// for evaluate values
function evaluateValue() {
    input.value = eval(input.value);
}








































