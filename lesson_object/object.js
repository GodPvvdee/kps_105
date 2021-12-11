// let person = {
//     nas:20,
//     hvis:'em',
//     name:'zulaa',
// }
// document.write(person);
// console.log(person.name);
// objectod arga todorhoiloh
// var object1 = {
//     name:'Азаа',
//     job:'Программист',
//     hobby:'Ном унших',
//     // getHeight(){
//     //     return '120';
//     // }
// }
// var object2 = {
//     name:'Пүүдээ',
//     job:'Программист',
//     hobby:'Ном унших',
//     price:2000,
//     getHeight (){
//         return '181';
//     },
//     calculatePrice(count){
//         return this.price*count;
//     }
// };

// console.log(object2.calculatePrice(10));

                // setter өөрчлөх арга
let books = {
    _name:'Ногоон нүдэн лам',
    _author:'Оюунгэрэл',
    _page:'800',
    _price:21000,
    set price(newPrice) {
        if(typeof newPrice === 'number'){
            this._price = newPrice;
            console.log('Утгыг солилоо.');
        }
        else{
            console.log('тохиромжгүй утга.');
        }
    },
};
books.price = 25000;
console.log(books._price);


                    // getter арга
let books = {
    _name:'Ногоон нүдэн лам',
    _author:'Оюунгэрэл',
    _page:800,
    _price:21000, 
    set price(newPrice) {
        if(typeof newPrice === 'number'){
            this._price = newPrice;
            console.log('Утгыг солилоо.');
        }
        else{
            console.log('тохиромжгүй утга.');
        }
    },
    get price(){
        return books._price;
    }
};
let pr = books.price;
console.log('get ' + pr);