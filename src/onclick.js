import { add, opposite, subtract, multiply, divide } from './operations.js';
let operation;
let oldOperation;
let number1 = '';
let number2 = '';
let operationSign = '';
const display = document.getElementById('display');
const operationFunctions = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
}

export const numberOnclick = e=>{
    if(!operation){
        if(number1.includes('.') && e.target.value === '.')return;
        number1+=(e.target.value);
    }
    else{
        if(number2.includes('.') && e.target.value === '.')return;
        number2+=(e.target.value);
    }
    console.log(`Num1: ${number1}, Num2: ${number2}`);
    display.value = [number1,operationSign,number2].join('');
}
export const operationOnclick = e=>{
    let result;
    if(!number1)return;
    console.log(oldOperation);
    if(oldOperation && number1 && number2){
        console.log('atleast we are gettin there!')
    result = oldOperation(Number(number1),Number(number2));
    number1 = result;
    number2 = '';
    display.value = number1;
    oldOperation = null;`   `
    console.log(oldOperation)
    operationSign = '';
    }
    operation = operationFunctions[e.target.id];
    oldOperation = operation
    operationSign = e.target.value;
    display.value = [number1,operationSign,number2].join('');
}
export const getResult = ()=>{
    let result;
    if(!operation){
        console.log(number1);
        display.value = number1;
        return;
    };
    if(operation === divide && Number(number2) === 0){
        throw new Error('Cannot divide by zero!');
    };
    result = operation(Number(number1),Number(number2));
    number1 = result;
    number2 = '';
    display.value = number1;
    console.log(oldOperation)
    operation = null;
    operationSign = '';
}
export const clear = () => {
    display.value = '';
    number1 = '';
    number2 = '';
    oldOperation = null;
    operation = null;
    operationSign = '';
}
export const backspace = () => {
    console.log('Number1: ',number1,'Operation: ',operation,'Number2: ',number2)
    display.value = display.value.slice(0,display.value.length-1);
    if(number1 && !operation && !number2){
        number1=number1.toString().slice(0,number1.length-1)
    }
    else if(number1 && operation && !number2){operationSign=operationSign.toString().slice(0,operationSign.length-1); operation = null;}
    else if(number1 && operation && number2){number2=number2.toString().slice(0,number2.length-1)}
}