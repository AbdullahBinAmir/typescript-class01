const current_users: string[] = ['user0','user1','user2','user3','user4']

const new_users: string[] = ['user','user1','user6','user3','user7']

for (let user of new_users){
    let isAllowed = true
    for(let i in current_users){
        if(user.trim().toLocaleLowerCase() === current_users[i].trim().toLocaleLowerCase())
        {
            isAllowed=false
            break
        }
    }
    if(isAllowed)
    console.log(user,'username is available')
    else 
        console.log(`${user} is not valid`,'create new username')
}