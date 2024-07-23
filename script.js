function insert(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function deleteLast() {
    document.calculator.display.value = document.calculator.display.value.slice(0, -1);
}

function calculate() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (e) {
        document.calculator.display.value = 'Error';
    }
}