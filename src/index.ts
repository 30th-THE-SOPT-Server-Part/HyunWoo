// Type!
/*
- Boolean
    - state: true, false
    - action: ||, &&, !
- number
    - state: numbers(1, 2, 3, etc)
    - action: +, -, *, &&, .toFixed, .toPrecision, etc
- string
    - state: all arrays of characters or characters
    - action: +, ||, .concat, .toUpperCase, etc


*/
const a = 40;

function add(a: number, b: number) {
    const str = (a + b).toString()
    console.log(str);
}

add(10, 20);

