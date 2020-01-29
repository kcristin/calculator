
// Implements order of operation
let pemdas = (inputArray) => {

    //parentheses
    let parsIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === '(') {
            parsIndex.push(i);

        } else if (inputArray[i] === ')') {
            let start = parsIndex.pop();
            let range = i - start;
            let calcFirst = inputArray.splice(start, range + 1);
            console.log(calcFirst);
            
            // Loop through calcFirst and remove parentheses
            for (let j = 0; j < calcFirst.length; j++) {
                
                if (calcFirst[j] === '(') {
                    calcFirst.splice(j, 1);
                
                } else if (calcFirst[j] === ')') {
                    calcFirst.splice(j, 1);

                } else {
                    continue;
                }
            }
            
            // Run pemdas on content between parentheses
            newVal = pemdas(calcFirst); 
            inputArray.splice(start, 0, newVal);
            console.log(inputArray);

            // Reset parsIndex and for loop to search for more parentheses
            parsIndex = [];
            i = 0; 
        
        } else {
            continue;
        }
    }

    // multiplication
    let multIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === '*') {
            multIndex.push(i);
        
        } else {
            continue;
        }

        // Loop thorugh multIndex and operate on each case
        for (let j = 0; j < multIndex.length; j++) {

            let index = multIndex[j];
            let operator = inputArray[index];
            let int1 = inputArray[index - 1];
            let int2 = inputArray[index + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((index - 1), 3, newVal);
        }

        // Reset multIndex and for loop to search for more parentheses
        multIndex = [];
        i = 0;
    }

    // division
    let divIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === '/') {
            divIndex.push(i);
        
        } else {
            continue;
        }

        // Loop thorugh divIndex and operate on each case
        for (let j = 0; j < divIndex.length; j++) {

            let index = divIndex[j];
            let operator = inputArray[index];
            let int1 = inputArray[index - 1];
            let int2 = inputArray[index + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((index - 1), 3, newVal);
        }

        // Reset divIndex and for loop to search for more parentheses
        divIndex = [];
        i = 0;
    }

    // addition
    let addIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === '+') {
            addIndex.push(i);
        
        } else {
            continue;
        }

        // Loop thorugh addIndex and operate on each case
        for (let j = 0; j < addIndex.length; j++) {

            let index = addIndex[j];
            let operator = inputArray[index];
            let int1 = inputArray[index - 1];
            let int2 = inputArray[index + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((index - 1), 3, newVal);
        }

        // Reset addIndex and for loop to search for more parentheses
        addIndex = [];
        i = 0;
    }

    // subtraction
    subIndex = [];
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === '-') {
            subIndex.push(i);
        
        } else {
            continue;
        }

        // Loop thorugh subIndex and operate on each case
        for (let j = 0; j < subIndex.length; j++) {

            let index = subIndex[j];
            let operator = inputArray[index];
            let int1 = inputArray[index - 1];
            let int2 = inputArray[index + 1];
            let newVal = operate(operator, int1, int2);

            inputArray.splice((index - 1), 3, newVal);
        }

        // Reset subIndex and for loop to search for more parentheses
        subIndex = [];
        i = 0;
    }

    // Remove blank spaces in array 
    for (let i = 0; i < inputArray.length; i++) {
        
        if (inputArray[i] === "") {
            inputArray.splice(i, 1);
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