//Phase 1
function num1() {
    return 1;
}

async function num2() {
    return 2;
}

// console.log('num1', num1());
// console.log('num2', num2());
// num2().then(result => console.log(result));

//Phase 2
async function waiting() {
    const value = await num2();
    // console.log('waiting', value);
}
waiting();


//Phase 3

async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    // console.log('my promise is', result);
}
waitForMyPromise();

//Phase 4

// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('done!');
//     }, 1500)
// }).then(r => console.log('then my other promise is', r));


//Phase 5

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function executePromise(){
    await wait(2000);
    // console.log("promise executed");
}
executePromise()

//Phase 6

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});
// console.log(tryRandomPromise(0.3))


for (let i=1; i<10; i++) {
    const random = Math.random();
    wait(2000 + random*1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', random ,i, result))
        .catch(error => console.error('random try #', random, i, error));
}

//Phase 7
