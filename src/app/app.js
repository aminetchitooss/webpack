import { inputsAreValid } from "./utils/input-validator";
import { parseInputs } from "./utils/input-parser";


export const run = (alertService, componentService) => {
    alertService.hideErrors();

    componentService.calculate(() => {
        alertService.hideErrors();
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        if (inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            const result = componentService.crushNumbers(numA, numB)
            if (result !== "")
                componentService.setResult(result)
            else
                alertService.handleAdditionError(null, null, true)
        } else {
            componentService.setResult("")
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    });
}

