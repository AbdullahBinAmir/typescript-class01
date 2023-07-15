interface Car {
    manufacturer: string,
    model: string
}

function saveCarInfo (car:Car,...args:object[]) {
    return car 
}

console.log(saveCarInfo({manufacturer:'toyota',model:'corrola'},{color:'white'},{make:'2020'}))