//arrays in typescript
//example
let number:number[] = [1,2,3,4];

let people:string[] = [];
people[1] = 'John';
people[2] = 'Mary';
people.forEach(person => {
    console.log(person);
});

//when you don't annotate the type while declaring variables the default type is any

