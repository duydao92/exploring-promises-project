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
    console.log('waiting', value);
}
waiting();


//Phase 3
