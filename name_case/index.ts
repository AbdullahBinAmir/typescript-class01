const personName: string = "John"

console.log(personName.toLocaleUpperCase())
console.log(personName.toLocaleLowerCase())
console.log(`${personName[0].toLocaleUpperCase()}${personName.slice(1,personName.length).toLocaleLowerCase()}`)