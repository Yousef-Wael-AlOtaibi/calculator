import './styles.css';
import { numberOnclick, oppositeOnclick, operationOnclick, getResult, clear, backspace } from './onclick.js';
const backspaceBtn = document.getElementById('backspace-btn');
const numberBtns  = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const oppositeBtn = document.getElementById('opposite-btn');
numberBtns.forEach(btn=>btn.onclick=numberOnclick);
operationBtns.forEach(btn=>btn.onclick=operationOnclick);
equalBtn.onclick = () => {
    getResult();
}
clearBtn.onclick = clear;
backspaceBtn.onclick = backspace;
oppositeBtn.onclick = oppositeOnclick;