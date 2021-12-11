                            // object zarlah
// var object1 = {
//     name:'Нямка',
//     job:'Программист',
//     hobby:'ном унших'
// }
// var object2 = {
//     name:'Азаа',
//     job:'Вэб хөгжүүлэгч',
//     hobby:'Сагс'
// }
// // var aaaa = 'author',
// // console.log(c2[author][bbb])
// console.log(object1.name + 'мэргэжилтэй ' + object1.name + '-ийн хобби нь ' + object1.hobby + 'юм');

//                             // Объектод арга тодорхойлох
let book = {
    name: 'Ногоон нүдэн лам',
    author:'Оюунгэрэл',
    page:'500',
    coverType:['зөөлөн ','хатуу'],
    price:21000,
    getSize (){
        return 'hi';
    },    
};
console.log(book.getSize(10));                              
//                               // this түлхүүр үг
// let book = {
//     name: 'Ногоон нүдэн лам',
//     author:'Оюунгэрэл',
//     page:'500',
//     coverType:['зөөлөн ','хатуу'],
//     price:21000,
//     getSize (){
//         return 'hi';
//     },
//     calculatePrice(count){
//         return price * count;
//     }
// };
// console.log(book.calculatePrice(10));
                            //  setter өөрчлөх арга
// let books = {
//     _name: 'Ногоон нүдэн лам2',
//     _author:'Оюунгэрэл2',
//     _page:800,
//     _coverType:['зөөлөн ','хатуу'],
//     _price:21000,
//     set price(newPrice) {
//         if(typeof newPrice === 'number'){
//         this._price = newPrice;
//         console.log('Утгыг солилоо.');
//         }
//         else {
//             console.log('тохиромжгүй утга.');
//         }
//     },
// };
// books.price = 25000;
// console.log(books._price);
                            // getter арга
// let books = {
//     _name: 'Ногоон нүдэн лам2',
//     _author:'Оюунгэрэл2',
//     _page:800,
//     _coverType:['зөөлөн ','хатуу'],
//     _price:21000,
//     set price(newPrice) {
//         if(typeof newPrice === 'number'){
//         this._price = newPrice;
//         console.log('Утгыг солилоо.');
//         }
//         else {
//             console.log('тохиромжгүй утга.');
//         }
//     },
    
//     get price(){
//         return this._price;
//     }
// };
// let pr = books.price;
// console.log('get ' + pr);
