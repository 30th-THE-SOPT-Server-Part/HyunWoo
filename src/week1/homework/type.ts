let name1: string = '이현우';
console.log(name1);

let grade: number = 4;

let isDeleted: boolean = false;

const sum = (x: number, y: number): number => {
    return x * y;
}

// const ages: number[] = [1, 2, ,3 ,4, 5];
// const ages2: Array<number> = [1, 2, 3, 4];

const strArray: string[] = ["hi", "hello"];
const strArray2: Array<string> = ["hi", "hello"];

const f1 = (obj: object): void => {
    console.log(obj);
}

const f2 = (obj: Object): void => {
    console.log(obj);
}

f2([1, 2, 3, 4]);
f2("hihi");

const div = (x: number, y: number): number => {
    return x /y;
}

let p: null = null;

// let x: null = 2;

let b: undefined = undefined;

// let y: undefined = null;

// angle-bracket 타입 선언
let name3: any = '이현우' // any 아무 타입이나 가능
let name3Length: number = (<string>name3).length;

// as
let name4: any = '서버';
let name4Length: number = (name4 as string).length;

console.log(name4Length);
