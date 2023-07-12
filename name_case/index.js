var personName = "John";
console.log(personName.toLocaleUpperCase());
console.log(personName.toLocaleLowerCase());
console.log("".concat(personName[0].toLocaleUpperCase()).concat(personName.slice(1, personName.length).toLocaleLowerCase()));
