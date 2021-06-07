import * as $ from 'jquery/dist/jquery.slim';
export class ComponentService {

    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.calculateBtn = document.getElementById("calculate")
        this.result = document.getElementById("result");
    }

    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    setResult(pValue) {
        this.result.value = pValue
    }

    calculate(cb) {
        this.calculateBtn.addEventListener("click", cb);
    }

    crushNumbers = (numA, numB) => {
        switch ($('#Operators input:radio:checked').val()) {

            case "add":
                return numA + numB;
            case "substract":
                return numA - numB;
            case "multiply":
                return numA * numB;
            case "divise":
                return numB == 0 ? "" : numA / numB;

        }
    };
}
