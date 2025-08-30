import './styles.css';
import { numberOnclick, oppositeOnclick, operationOnclick, getResult, clear, backspace } from './onclick.js';
const backspaceBtn = document.getElementById('backspace-btn');
const numberBtns  = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const oppositeBtn = document.getElementById('opposite-btn');
const showInfoBtn = document.getElementById('show-info-btn');
const infoContainer = document.getElementById('info');
numberBtns.forEach(btn=>btn.onclick=numberOnclick);
operationBtns.forEach(btn=>btn.onclick=operationOnclick);
equalBtn.onclick = () => {
    getResult();
}
clearBtn.onclick = clear;
backspaceBtn.onclick = backspace;
oppositeBtn.onclick = oppositeOnclick;
showInfoBtn.onclick = () => {
    infoContainer.classList.toggle('hidden');
}