let outputDisplay = document.querySelector("#output");
let buttons = document.querySelectorAll("button");
let pressed = "";

let output1 = "";
let output2 = "";
let output3 = "";
let operation;

buttons.forEach(button => button.addEventListener('click', buttonClick));

function buttonClick(e) {
    pressed = e.currentTarget.id;
    let input;

    switch (pressed) {
        case "zero":
            input = 0;
            break;
        case "one":   
            input = 1; 
            break;
        case "two":   
            input = 2; 
            break;
        case "three":
            input = 3;
            break;
        case "four":
            input = 4;
            break;
        case "five":  
            input = 5; 
            break; 
        case "six":   
            input = 6; 
            break;
        case "seven":
            input = 7;
            break;
        case "eight":
            input = 8;
            break;
        case "nine":    
            input = 9;
            break;
        case "clear":
            clearOutput();
            return;
        case "add":
            input = "add";
            break;
        case "subtract":
            input = "subtract";
            break;
        case "multiply":
            input = "multiply";
            break;
        case "divide":
            input = "divide";
            break;
        case "equals":
            input = "equals"
            break;
    }

    if (input >= 0 && input <= 9 ) {
        output1 += input;
        outputDisplay.textContent = output1;
    } else if (input === "add") {
        output2 = output1;
        output1 = "";
        operation = "add";
    } else if (input === "subtract") {
        output2 = output1;
        output1 = "";
        operation = "subtract";
    } else if (input === "equals") {
        if (operation === "add") {
            if (!output3) {
                output3 = Number(output1) + Number(output2);
            } else {
                output3 = Number(output1) + Number(output3);
            }
            outputDisplay.textContent = output3;
        } else if (operation === "subtract") {
            if (!output3) {
                output3 = Number(output2) - Number(output1);
            } else {
                output3 = Number(output3) - Number(output1);
            }
            outputDisplay.textContent = output3;
        }
    }

    

}

function clearOutput() {
    output1 = "";
    output2 = "";
    output3 = "";
    operation = "";
    outputDisplay.textContent = "0";
}