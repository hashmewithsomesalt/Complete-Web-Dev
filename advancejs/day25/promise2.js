const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.05
    if (success) {
        resolve('Operation successful')
    } else {
        reject('operation failed')
    }
})

console.log(promise)