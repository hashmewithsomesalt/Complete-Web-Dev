function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file ...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step2: Processing file...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function notifyUser() {
    return new Promise ((resolve, reject) => {
        console.log('Step 3: Notifying User ...')
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

/*
Challenge:
1. Await these promise in order in a try/catch block
    and when they are done, log 'All steps completed!'.
*/

//expected output:

//Step 1: Uploading file ...
//step 2: Processing file ...
//step 3: Notifying user ...
//All steps completed:

/* uploadFile(() =>
    processFile(() =>
        notifyUser(
            () => console.log('All steps completed')
        )
    )
) */

async function callAll() {
    try {
        await uploadFile()
        await processFile()
        await notifyUser()
        console.log('All steps completed')
    } catch(error) {
        console.log(error)
    }
}

callAll()