const make_shirts = (size:string = 'large',message:string):string=>{
    if(size == 'large' || size == 'medium')
        return `Size of shirt is ${size} and message is I love TypeScript`
    else 
        return `Size of shirt is ${size} and message is ${message}`
}

console.log(make_shirts('large','hello'))