export let saleableCars = [
    {
        name:"Fiesta",
        year:2020,
        generation:['5th','7th']
    },
    {
        name:'Edge',
        year:2015,
        generation:['1th','2nd']
    }
];
function getName(value){
    if(saleableCars.length >=value){
    return saleableCars[value].name;
    }
    else{
        return null;
    }
}
function getYear(value){
    if(saleableCars.length >=value){
        return saleableCars[value].year;
        }
        else{
            return null;
        }
}
export {getName as CarName};
export default getYear;