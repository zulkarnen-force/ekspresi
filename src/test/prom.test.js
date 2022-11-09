let a = new Promise((res, rej) => {
    if (false) {
        return setTimeout(() => {
            return res(100)
        }, 5000)
    }
    rej(new Error("can'r resolve"))
})


async function foo() {
    return await a
}


// console.log(foo().then(e => console.log(e)))


(async () => {
    console.log("Message in 5s");
    try {
        let a = await foo();
        console.log(a)
    } catch (e) {
        console.error("Error", e)
    }
    console.log("If you like it, show it");
})();

