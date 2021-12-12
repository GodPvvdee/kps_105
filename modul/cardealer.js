import Car from './car.js';
function displayInto(){
    Car.typesOfCars.forEach(function(element){
        console.log('форд ' + element.name);
        console.log('одоогийн загвар ' + element.generation);
        console.log('одоогийн загварын үйлдвэрлэгдсэн он ' + element.year);
    })
}
displayInto();