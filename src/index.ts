//objects in typescript
let employees:{
    id:number,
    name:string,
    retire:(date:Date)=>void
} = {
    id:1,
    name:"Lucky",
    retire:(date:Date)=>{
        console.log(date);
    }
}

//this codes written above are not clean so we need to use type alliases to make our codes more cleaner
