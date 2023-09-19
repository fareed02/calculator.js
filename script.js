var input = document.getElementById("input");

function display(num) {

    var value = input.value;
    var operator = ["+", "-", "*", "/", "%"];
    var lastValue = value[value.length - 1];
    var newInput = num;

    if (operator.lastIndexOf(lastValue) !== -1 && operator.lastIndexOf(newInput) !== -1) {

        value = value.slice(0, -1) + newInput;
    } else {

        value += newInput;
    }

    input.value = value;
}

function screenClear() {
    document.getElementById("input").value = "";
}

function calculateNow() {
    var result = eval(document.getElementById("input").value);
    document.getElementById("input").value = result;
}