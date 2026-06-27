/*
Challenge:
1. Add a body property to the object we are parsing
   with the fetch request. I want you to create a new
   post with the title "Holiday Nightmares" and the
   body "When I was kidnapped in Scotland"

   In the console, you should see and object with
   an ID, for example: {id: 101}
*/

async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: 'Holiday Nightmares',
                body: 'When I was kidnapped in Scotland',
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error('There is a problem with the API')
        }

        const data = await response.json();
        console.log(data);
    }
    catch (err) {
        throw err;
    } finally {
        console.log('Execution complete')
    }
}
createPost()

/*
Headers: Extra information that we send with our data.
Example: 
extra(meta) info about the request
authentication
the type of data being sent
this is not an exhaustive list
*/
