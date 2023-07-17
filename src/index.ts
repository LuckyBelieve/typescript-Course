//functions in typescript

function calculateTax (income: number,taxYear:number): number {
    if(taxYear < 2020)
    return income * 1.2;
    return income * 1.3;
}
let tax:number= calculateTax(20_000,2002);
console.log(tax);

//thera are some of the configurations that you have to make so as to work properly with functions
//they include 1."noUnusedLocals": true, "noUnusedParameters": true, and "noImplicitReturns": true,  

