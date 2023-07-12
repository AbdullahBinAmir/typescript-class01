const guestList: string[] = ["Ali", "Ahmed", "Abdullah"]

//Guest List
guestList.forEach((guest)=>{
    console.log(`${guest}, Please come at dinner tommorrow.`)
})

//changing guests list

//priting a guest who is not coming
console.log(`${guestList[guestList.length-1]} is not coming`)

// adding new guest
guestList[guestList.length-1] = "Saqib"

// second set of invitations
guestList.forEach((guest)=>{
    console.log(`${guest}, Please come at dinner tommorrow.`)
})

//...More Guest
console.log('I have more space')

// adding new guest at start
guestList.unshift('Usama')

// adding guest at middle of array
guestList.splice(Math.round(guestList.length/2),0,"Mairaj")

// adding guest at end of array
guestList.push("Mateen")

//printing new list
guestList.forEach((guest)=>{
    console.log(`${guest}, Please come at dinner tommorrow.`)
})

//space not available

console.log('Table is not avaialbe..We have space for only 2 guests')