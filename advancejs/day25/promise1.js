const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if (success) {
        resolve('Operation successful')
    } else {
        reject('Operation failed')
    }
})

console.log(promise)