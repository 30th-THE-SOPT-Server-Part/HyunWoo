const sopt = {
    season: 30,
    group: ["YB", "OB"],
    part: ["서버", "기획", "디자인", "안드로이드", "웹", "iOS"],
    president: "김규민",
    introduce: function () {
        this.part.forEach((name) => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요`);
        });
    },
};

console.log(sopt.group);
sopt.introduce();

console.log(sopt.season);

let array = [1, true, "string"];
console.log(array);

let array2 = [
    {
        name: "김소령",
        age: 5,
    },
    {
        name: "박정무",
        age: 15,
    },
];

console.log(array2);
console.log(typeof array2);

// function menu(dinner) {
//   return `오늘 메뉴는 ${dinner} 입니다.`;
// }

// const srt2 = menu("삼겹살");
// console.log(srt2);

// 함수 표현식
const menu = (dinner) => {
    return `오늘 메뉴는 ${dinner}입니다.`;
};

const str2 = menu("곱창");
console.log(str2);

const func = (num) => {
    return num * num;
};

const multiple = (func, num) => {
    console.log(func(num));
};

multiple(func, 3);

let a = 2;
let x = 2;
// let b = a++; 2
// let b = ++a; 3
// console.log(b);

let c = 2 + 3;
let d = 2 * 3;
let e = 3 - 2;
let f = 4 / 2;

console.log(c, d, e, f);

// 비교 연산자 == (값) || === (값, 타입)
if (a === x) {
    console.log("a === x");
}

let y = "2";

if (a === y) {
    console.log("a === y");
}

if (a == y) {
    console.log("a == y");
}

if (d % f == 0) {
    console.log("나머지 0");
}

// AND, OR
if (a === 2 && d === 6) {
    console.log("hi");
}

if (a === 4 || d === 6) {
    console.log("a가 4 또는 d가 6");
}

console.log(typeof a);
if (typeof a == "number") {
    console.log(a);
}
