export const add = (a,b)=>{return (a+b) % 1 === 0? a+b : (a+b).toFixed(2)};
export const subtract = (a,b)=>{return (a-b) % 1 === 0? a-b : (a-b).toFixed(2)};
export const multiply = (a,b)=>{return (a*b) % 1 === 0? a*b : (a*b).toFixed(2)};
export const divide = (a,b)=>{return (a/b) % 1 === 0? a/b : (a/b).toFixed(2)};
export const opposite = (number) => -number;