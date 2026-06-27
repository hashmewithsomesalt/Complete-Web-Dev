function createPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5
        if (success) {
            resolve('Operation Successful!')
        } else {
            reject('Operation failed')
        }
    })
}

/* async function  callPromise() {
    try {
        const result = await createPromise()
        console.log(result)
    } catch(error) {
        console.log(error)
    }
}

callPromise() */

try {
    const promise1 = createPromise()
    const promise2 = createPromise()
    const promise3 = createPromise()

    const result = await Promise.all([promise1, promise2, promise3])
    console.log(result)
} catch(error) {
    console.log(error)
}