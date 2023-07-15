const make_album = (name:string,title:string,tracks?:number)=>{
    return {
        name:name,
        title: title,
        tracks: tracks?tracks:0
    }
}

console.log(make_album('album','cover'))
console.log(make_album('album1','song1',1))
console.log(make_album('album2','cover-topic'))