const display = document.getElementById("display");

// Add numbers and decimal point
function addNumber(number) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += number;
}

// Add mathematical operators
function chooseOperator(operator) {
    display.value += operator;
}

// Clear the calculator display
function clearDisplay() {
    display.value = "";
}

// Remove the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the expression value
function calculate() {
    try {
        if (display.value === "" || display.value === "Error") {
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    // Numbers and decimal point
    if (
        (event.key >= "0" && event.key <= "9") ||
        event.key === "."
    ) {
        addNumber(event.key);
    }

    // Operators
    if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "%"
    ) {
        chooseOperator(event.key);
    }

    // Calculate
    if (event.key === "Enter") {
        calculate();
    }

    // Clear
    if (event.key === "Escape") {
        clearDisplay();
    }

    // Delete
    if (event.key === "Backspace") {
        deleteLast();
    }
});
