const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");
const errorBox = document.getElementById("error");

const parseInputs = (...input) => {
    return input.map(str => Number(str));
};

const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
};

const handleAdditionError = (inputs, numbers, divErr = false) => {
    if (divErr) {
        errorBox.classList.remove("invisible");
        errorBox.innerText = "Value 2 is cannot be equal to 0 in a division";
        return
    }
    const fullMessage = inputs.reduce((message, str, index) => {
        if (inputsAreValid(numbers[index])) {
            return message + "";
        } else {
            return message + `${str} is not a number. `;
        }
    }, "Please enter two valid numbers! ");

    errorBox.classList.remove("invisible");
    errorBox.innerText = fullMessage;
};


const hideErrors = () => {
    errorBox.classList.add("invisible");
};


const getValue = (numA, numB) => {
    switch ($('#Operators input:radio:checked').val()) {
        case "add":
            return numA + numB;
        case "substract":
            return numA - numB;
        case "multiply":
            return numA * numB;
        case "divise":
            if (numB !== 0)
                return numA / numB;
            else
                handleAdditionError(null, null, true)
            return "";
    }
};

hideErrors();
addValuesButton.addEventListener("click", () => {
    hideErrors();
    const inputs = [numberOneInput.value, numberTwoInput.value];
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
        const [numA, numB] = parsedInputs;
        resultDiv.value = getValue(numA, numB);
    } else {
        resultDiv.value = "";
        handleAdditionError(inputs, parsedInputs);
    }
});