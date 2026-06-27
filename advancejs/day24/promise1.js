/*
Promise: We'll let you know when the asynchronous operation is complete. It can be in one of three states:
1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.


Handling asynchronous operations with promises allows us to write cleaner and more manageable code, 
especially when dealing with multiple asynchronous tasks. 
Promises provide a way to attach callbacks for success and failure,
making it easier to handle the results of asynchronous operations.
*/

/* fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random') // Fetch a random dog image from the API
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        console.log(data);
        // You can access the data returned from the API here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle any errors that occurred during the fetch operation
    })
    .finally(() => {
        console.log('Fetch operation completed.');
        // This block will execute regardless of whether the promise was fulfilled or rejected
    });
 */

try {
    const response = await fetch('https://api.scrimba.com/dog.ceo/api/breeds/images/random')
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)

}catch(err) {
    console.log(err)
    throw err
} finally {
    console.log('The operation completed')
}

/*
200-299 : successful response: True
404: not found: False
500: server error: False
*/