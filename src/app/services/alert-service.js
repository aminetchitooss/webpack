import { inputsAreValid } from '../utils/input-validator';

export class AlertService {

    constructor() {
        this.errorBox = document.getElementById("error");
    }

    handleAdditionError = (inputs, numbers, divErr = false) => {
        if (divErr) {
            this.errorBox.classList.remove("invisible");
            this.errorBox.innerText = "Value 2 is cannot be equal to 0 in a division";
            return
        }
        const fullMessage = inputs.reduce((message, str, index) => {
            if (inputsAreValid(numbers[index])) {
                return message + "";
            } else {
                return message + `${str} is not a number. `;
            }
        }, "Please enter two valid numbers! ");

        this.errorBox.classList.remove("invisible");
        this.errorBox.innerText = fullMessage;
    };

    hideErrors = () => {
        this.errorBox.classList.add("invisible");
    };
}