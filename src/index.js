import './styles.css';
import { numberOnclick, oppositeOnclick, operationOnclick, getResult, clear, backspace } from './onclick.js';
const backspaceBtn = document.getElementById('backspace-btn');
const numberBtns  = document.querySelectorAll('.number-btn');
const operationBtns = document.querySelectorAll('.operation');
const equalBtn = document.getElementById('equal-btn');
const clearBtn = document.getElementById('clear-btn');
const oppositeBtn = document.getElementById('opposite-btn');
const themeBtn = document.getElementById('theme-btn');
const root = document.documentElement;
let isDarkMode = true;
numberBtns.forEach(btn=>btn.onclick=numberOnclick);
operationBtns.forEach(btn=>btn.onclick=operationOnclick);
equalBtn.onclick = getResult;
clearBtn.onclick = clear;
backspaceBtn.onclick = backspace;
oppositeBtn.onclick = oppositeOnclick;
themeBtn.onclick = () => {
    root.style.setProperty('--calc-bg',isDarkMode?'#dcdcdcff':'black');
    root.style.setProperty('--text-color',isDarkMode?'black':'white');
    root.style.setProperty('--top-btns-bg',isDarkMode?'rgb(200,200,200)':'rgb(23, 23, 23)')
    themeBtn.textContent = isDarkMode? 'Dark Mode':'Light Mode';
    isDarkMode = !isDarkMode;
}