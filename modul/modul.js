let Car = {}; // Car moduliig tolooloh object
Car.name = "Форд";//Car.name n Car moduliin shinj chanariig todorhoilno 
// ingeseneer objectiin shinj chanart utgiig olgono
// Ford bol Car.name shinj chanart hadgalagdah utga 
modula.exports = Car;// n Car objectiig modul bolgon exportolno
// modul n moduliig tolooloh huwisagch ym. exports geeg n moduliig object bolgon zadlna
let Car = {};
module.exports = {
    name:'Форд',
    getName:function(){
        return this.name;
    }
}
// olon shinj chanart negtgeh exportloh
                    // require() function
// Экспортолсон модулийг ашиглахын тулд модулийг импортолж оруулах ёстой ба
// үүнийг хийх нийтлэг арга бол require() функц юм.cardealer.js файлыг үүсгэж
// require() функцийн тусламжтайгаар Car модулийг импортолъё
// moduliig inportloh
const cars = require('./car.js');
function getInto(){
    return cars.name;
}
getInto();
// cardealer.js файлд Car модулийг импортлох
// export default ba import
let Car = {};
Car.typesOfCars = [
    {
        name:'Fiesta',
        year:2017,
        generation:'7th'
    },
    {
        name:'Edge',
        year:2015,
        generation:'2th' 
    }
];
export default Car;

                    // named exports
let saleableCars = [
    {
        name:'Fiesta',
        year:2017,
        generation:'7th'
    },
    {
        name:'Edge',
        year:2015,
        generation:['1th','2th'] 
    }
];
function getName(value){
    if(saleableCars.length >= value){
        return saleableCars[value]
    }
}