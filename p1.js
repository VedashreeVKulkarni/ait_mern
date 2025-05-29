const a = 5;
const b = 10;
function bigOfTwo(a, b) {
if(a > b) {
    return a;
} else {
    return b;
}}
console.log(bigOfTwo(a, b));

const smallOfTwo = (a, b) => {
if(a < b) {
    return a;
} else {
    return b;
}
}
console.log(smallOfTwo(a, b));
