function validUserNames(usernames) {
    return usernames.filter(n => {
        return n.length < 10
    })
}