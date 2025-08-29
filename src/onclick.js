import { add, opposite, subtract, multiply, divide } from './operations.js';
let operation;
let oldOperation;
let number1 = '';
let number2 = '';
let operationSign = '';
let displayArr = [];
const display = document.getElementById('display');
const operationFunctions = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
}

export const numberOnclick = e=>{
    console.log(operation);
    if(!operation){
        number1+=(e.target.value);
    }
    else{
        number2+=(e.target.value);
    }
    console.log(`Num1: ${number1}, Num2: ${number2}`);
    display.value = [number1,operationSign,number2].join('');
}
export const operationOnclick = e=>{
    if(!number1 || operation)return;
    operationSign = e.target.value;
    if(oldOperation && number1 && number2){
        const result = oldOperation(Number(number1),Number(number2))
        displayArr = [];
        number2 = '';
        number1 = result;
        display.value = displayArr.join('');
    }
    operation = operationFunctions[e.target.id];
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
    oldOperation = operation;
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