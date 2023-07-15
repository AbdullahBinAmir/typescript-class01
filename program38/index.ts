function describe_city(city:string , country:string = 'Pakistan') : string {
    return  `${city} is in ${country}`
}

console.log(describe_city('Karachi'))
console.log(describe_city('Isalmabad'))
console.log(describe_city('Kabul','Afghanistan'))