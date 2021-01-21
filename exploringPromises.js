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


// for (let i=1; i<10; i++) {
//     const random = Math.random();
//     wait(2000 + random*1000)
//         .then(() => tryRandomPromise(random))
//         .then(result => console.log('random try #', random ,i, result))
//         .catch(error => console.error('random try #', random, i, error));
// }

//Phase 7


const tryTryAgain = async (i) => {
    const random = Math.random();
    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random*1000); //always run regardless of random number.
    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random); //check if random number is greater than 0.5
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};

// for (let i=1; i<10; i++) {
//     tryTryAgain(i)
// }

(async function () {
    for (let i=1; i<10; i++) {
        await tryTryAgain(i)
    }
    console.log('END OF PROGRAM')
})()


// function finalFunc () {
//     return new Promise ((resolve, reject) => {
//         resolve(function () {
//         })
//     })
// }
// finalFunc().then(() => {
// })

// setTimeout(() => {
//     console.log('END OF PROGRAM');
// }, 4000)

//Phase 8
// random again # 5 random error
// random again # 6 random error
// random again # 8 random error
// random again # 2 random error
// random again # 4 random error
// random again # 9 random error
// random again # 1 success!!!
// random again # 7 success!!!
// random again # 3 success!!!
