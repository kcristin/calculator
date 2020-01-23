let operate = (operator, int1, int2) => {
    switch (operator) {
        case '*':
            console.log("MULTIPLY");
            multiply(int1, int2);
            break;

        case '/':
            console.log("DIVIDE");
            divide(int1, int2);
            break;

        case '+':
            console.log("ADD");
            add(int1, int2);
            break;

        case '-':
            console.log("SUBTRACT");
            subtract(int1, int2);
            break;
    }
}

let add = (int1, int2) => {
    return console.log(+int1 + +int2);
}

let subtract = (int1, int2) => {
    return console.log(int1 - int2);
}

let multiply = (int1, int2) => {
    return console.log(int1 * int2);
}

let divide = (int1, int2) => {
    return console.log(int1 / 2);
}