// callback Hell에 온 것을 환영한다
console.log('hello');

setTimeout(() => {
    console.log('Set time out');
}, 2000);

console.log('end');

// promise Callback Hell 극복 위해 두두둥장
/*
1. Pending: 대기
2. Fullfiled: 이행
3. Rejected: 실패
*/
const condition: boolean = true;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success');
    } else {
        reject(new Error('Reject'));
    }
});

promise
    .then((resolveData): void => {
        console.log(resolveData);
    })
    .catch(error => console.log(error));

const restaurant = (callback: () => void, time: number) => {
    setTimeout(callback, time);
}

const order = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 주문]');
            resolve('음식 주문 시작');
        }, 1000);
    })
}

const cook = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 조리중]');
            resolve(`${progress} -> 음식 조리 중`);
        }, 2000);
    })
}

const serving = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 서빙중]');
            resolve(`${progress} -> 음식 서빙 중`);
        }, 2500);
    })
}

const eat = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 먹는 중]');
            resolve(`${progress} -> 음식 먹는 중`);
        }, 3000);
    });
}

order().then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));

Promise.resolve(123)
    .then(res => {
        throw new Error("Error");
        return 456; // 실행 x
    })
    .then(res => {
        console.log(res); // 실행 x
        return Promise.resolve(789);
    })
    .catch(error => {
        console.log(error.message);
    })

// async & await
let asyncFuncOne = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFuncOne - ${msg}`);
        }, 1000);
    });
}

let asyncFuncTwo = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFuncTwo - ${msg}`);
        }, 1500);
    });
}

let promiseMainOne = (): void => {
    asyncFuncOne('Server part').then((result: string) => {
        console.log(result);
        return asyncFuncTwo('이승헌');
    }).then((result: string) => {
        console.log(result);
    });
}

promiseMainOne();

const asyncMain = async () => {
    let result = await asyncFuncOne('Server part');
    console.log(result);
    result = await asyncFuncTwo('이승헌');
    console.log(result);
}

asyncMain();
