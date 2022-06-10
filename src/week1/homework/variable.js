var name = "채정아";
var name = "이승헌";

console.log(name);

let name2 = "박진수";
// let name2 = "김희빈"; 에러발생

console.log(name2);

let name3 = "이동현";
name3 = "주효식";

console.log(name3);

const name4 = "김루희";
// name4 = "박진형"; 에러발생

console.log(name4);

if (true) {
    var x = "var variable";
}

console.log(x);

if (true) {
    const y = "const variable";
}

// console.log(y); 에러발생

function foo() {
    if (true) {
        var name5 = "채정아";
        console.log("if - block -", name5);
    }

    console.log("function - block -", name5);
}

foo();
console.log("global - ", name5);
