const make_great = (names:string[])=>{
   for(let i=0; i<names.length; i++){
        names[i] = `Great ${names[i]}`
    };
}

const show_magician = (names: string[])=>{
    names.forEach(name => {
        console.log(name)
    });
}


const names: string[] = ['Ali','Ahmed','Abdullah','Saqib','Hamza']

make_great(names)
show_magician(names)