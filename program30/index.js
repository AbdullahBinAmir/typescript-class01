var usernames = ['admin', 'user1', 'user2', 'user3', 'user4'];
usernames.forEach(function (user) {
    if (user === 'admin')
        console.log('Hello admin, would you like to see a status report?');
    else
        console.log("Hello ".concat(user, ", thank you for logging in again"));
});
