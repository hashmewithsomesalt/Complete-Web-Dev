function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        throw new Error("No username provided")
    }
}
checkUsername("suii")