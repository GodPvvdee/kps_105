import { saleableCars,CarName } from "./module3.js";
import getYear  from "./module3.js";
function getInto(){
    for(let i=0; i < saleableCars.length; i++){
        console.log('==========');
        console.log('Загвар: ' + CarName(i));
        console.log('Он: ' + getYear(i));
    }
}
getInto();