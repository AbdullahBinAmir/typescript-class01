const make_great1 = (names:string[])=>{
    for(let i=0; i<names.length; i++){
         names[i] = `Great ${names[i]}`
     };
 }
 
 const show_magician1 = (names: string[])=>{
     names.forEach(name => {
         console.log(name)
     });
 }
 
 
 const names1: string[] = ['Ali','Ahmed','Abdullah','Saqib','Hamza']

 const newNames = [...names1]
 
 make_great1(newNames)
 show_magician1(names1)
 show_magician1(newNames)