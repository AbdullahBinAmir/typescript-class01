const make_great = async (names:string[])=>{
   for(let i=0; i<names.length; i++){
        let copy = names.pop()
        names.push(`Great ${copy}`)
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