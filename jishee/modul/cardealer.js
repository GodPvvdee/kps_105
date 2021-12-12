import Car from '.car.js';
function displayInto(){
    Car.typesOfCars.forEach(function(element){
        console.log('Форд ' + element.name);
        console.log('Одоогийн загвар ' + element.generation);
        console.log('Үйлдвэрлэгдсэн огноо '  + element.year);
    })
}
displayInto();