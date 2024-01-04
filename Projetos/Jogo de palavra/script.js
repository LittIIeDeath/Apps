var cubeCurrent = 1
var columnCurrent

function letter(value) {
    var cubeText = document.querySelector('#cubeText' + cubeCurrent)
    if (value == '') {
        cubeCurrent--;
        cubeText = document.querySelector('#cubeText' + cubeCurrent)
        cubeText.textContent = '';
    }
    else {
        cubeText.textContent = value.innerHTML;
        cubeCurrent++;
    }
    if (cubeCurrent <= 0) { cubeCurrent = 1 }
}
