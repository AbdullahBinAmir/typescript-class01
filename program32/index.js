var current_users = ['user0', 'user1', 'user2', 'user3', 'user4'];
var new_users = ['user', 'user1', 'user6', 'user3', 'user7'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    var isAllowed = true;
    for (var i in current_users) {
        if (user.trim().toLocaleLowerCase() === current_users[i].trim().toLocaleLowerCase()) {
            isAllowed = false;
            break;
        }
    }
    if (isAllowed)
        console.log(user, 'username is available');
    else
        console.log("".concat(user, " is not valid"), 'create new username');
}
