
// Implements order of operation
let pemdas = (inputArray) => {
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j] === '*') {
            let operator = inputArray[j];
            let int1 = inputArray[j - 1];
            let int2 = inputArray[j + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((j-1), 3, newVal);
            console.log(inputArray);
        
        } else {
            continue;
        }
    }

    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j] === '/') {
            let operator = inputArray[j];
            let int1 = inputArray[j - 1];
            let int2 = inputArray[j + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((j-1), 3, newVal);
            console.log(inputArray);
        
        } else {
            continue;
        }
    }

    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j] === '+') {
            let operator = inputArray[j];
            let int1 = inputArray[j - 1];
            let int2 = inputArray[j + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((j-1), 3, newVal);
            console.log(inputArray);
        
        } else {
            continue;
        }
    }

    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j] === '-') {
            let operator = inputArray[j];
            let int1 = inputArray[j - 1];
            let int2 = inputArray[j + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((j-1), 3, newVal);
            console.log(inputArray);
        
        } else {
            continue;
        }
    }
    return inputArray[0];
}

// Calls appropriate function given operator
let operate = (operator, int1, int2) => {
    switch (operator) {
        case '*':
            console.log("MULTIPLY");
            return multiply(int1, int2);
            break;

        case '/':
            console.log("DIVIDE");
            return divide(int1, int2);
            break;

        case '+':
            console.log("ADD");
            return add(int1, int2);
            break;

        case '-':
            console.log("SUBTRACT");
            return subtract(int1, int2);
            break;
    }
}

let add = (int1, int2) => {
    return +int1 + +int2;
}

let subtract = (int1, int2) => {
    return int1 - int2;
}

let multiply = (int1, int2) => {
    return int1 * int2;
}

let divide = (int1, int2) => {
    return int1 / int2;
}