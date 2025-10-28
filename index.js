const display = document.getElementById('display');

function appendToDisplay(value) {
    // Display the correct math symbols
    if (value === '*') {
        display.value += '×';
    } else if (value === '/') {
        display.value += '÷';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Replace symbols before evaluating
        let expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        display.value = eval(expression);
    } catch (e) {
        display.value = 'Error';
    }
}

function adjustFontSize() {
    const baseLength = 10;
    const length = display.value.length;
    const scale = Math.max(0.7, Math.min(1, baseLength / length));
    display.style.transform = `scale(${scale})`;
    display.style.transformOrigin = 'right center';
}
display.addEventListener('input', adjustFontSize);
adjustFontSize();   