import { add, opposite, subtract, multiply, divide } from './operations.js';
let operation;
let oldOperation;
let number1 = '';
let number2 = '';
let displayArr = [];
const display = document.getElementById('display');
const operationFunctions = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
    opposite:opposite,
}
export const numberOnclick = e=>{
    if(!operation){
        const index = displayArr.indexOf(number1);
        number1+=(e.target.value);
        if(!displayArr[index])displayArr.push(number1);
        else{displayArr[index]=number1}
    }
    else{
        const index = displayArr.indexOf(number2);
        number2+=(e.target.value);
        if(!displayArr[index])displayArr.push(number2);
        else{displayArr[index]=number2}
    }
    console.log(`Num1: ${number1}, Num2: ${number2}`);
    display.value = displayArr.join('');
}
export const operationOnclick = e=>{
    console.log(`Num1: ${number1}, Num2: ${number2}`);
    if(oldOperation && number1 && number2){
        const result = oldOperation(Number(number1),Number(number2))
        displayArr = [];
        number2 = '';
        number1 = result;
        displayArr[0] = number1;
        display.value = displayArr.join('');
    }
    if(e.target.id === 'opposite'){
        operation = operationFunctions[e.target.id];
        const oppositeNumber = operation(Number(number1));
        return
    }
    displayArr.push(e.target.value);
    number2 = '';
    operation = operationFunctions[e.target.id];
    oldOperation = operation;
    display.value = displayArr.join('');
}
export const getResult = ()=>{
    if(!operation && oldOperation){
    const result = oldOperation(Number(number1),Number(number2))
    displayArr = [];
    number1 = result;
    number2 = '';
    displayArr[0] = number1;
    display.value = displayArr.join('');
    return
    }
    if(!operation || operation === divide && Number(number2) === 0){
        console.log('error!');
        return
    };
    const result = operation(Number(number1),Number(number2))
    displayArr = [];
    number1 = result;
    number2 = '';
    displayArr[0] = number1;
    display.value = displayArr.join('');
    oldOperation = operation;
    operation = null;
}
export const clear = () => {
    display.value = '';
    number1 = '';
    number2 = '';
    displayArr = [];
    oldOperation = null;
    operation = null;
}