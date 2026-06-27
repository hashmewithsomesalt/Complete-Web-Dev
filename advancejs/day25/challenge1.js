async function getAllPost() {

    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        if (!response.ok) {
            throw new Error('There is a problem with the API')
            
        }
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    } finally {
        console.log('Execution completed!')
    }
}

getAllPost()

/*
GET - getting data
POST - posting data
PUT - updating data
DELETE - deleting data
PATCH and OPTIONS
*/