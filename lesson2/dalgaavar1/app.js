const k=295;
console.log("k= "+k+"°K");
let ceils=0;
ceils=k-273;

ceils>0 ? console.log("celsTernary "+ceils+"°C") : console.log("ternary_else "+ceils+"°C");
 let Farangit=0;
 Farangit=ceils*(9/5)+32;
 Farangit=Math.floor(Farangit);
 console.log("F= "+Farangit+"°F");