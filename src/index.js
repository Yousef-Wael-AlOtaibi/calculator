import './styles.css';
import { numberOnclick } from './onclick.js';
import { operationOnclick } from './onclick.js';
import { getResult } from './onclick.js';
import { clear } from './onclick.js';
import { backspace } from './onclick.js';
const backspaceBtn = document.getElementById('backspace-btn');
const numberBtns  = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
numberBtns.forEach(btn=>btn.onclick=numberOnclick);
operationBtns.forEach(btn=>btn.onclick=operationOnclick);
equalBtn.onclick = e=>{
    getResult(e);
}
clearBtn.onclick = clear;
backspaceBtn.onclick = backspace;