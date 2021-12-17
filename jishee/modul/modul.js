let saleableCars = [
    {
        name:"Fiesta",
        year:2017,
        generation:['3th','4th']
    },
    {
        name:"Edge",
        year:2020,
        generation:['1th','2th']
    }
];
function getName(value){
    if(saleableCars.length >=value){
        return saleableCars[value].name;
    }
    else{
        return null
    }
}
function getYear(){
    if(saleableCars.length >= value){
        return saleableCars[value].year;
    }
    else{
        return null;
    }
}
export {saleableCars as sCars,getName as carName,getYear};
