
// let country = {
//     asia:'Монгол',
//     europe:'Герман',
//     africa:'Алжир',
// }
// country.america= 'england';
// console.log(typeof country);
// document.write(country.america);
// let selectedCountry;
// //
// let randomValue = Math.floor(Math.random()*3)+1;
// console.log(randomValue);
// switch(randomValue){
//     case 1: selectedCountry = 'asia';
//     break;
//     case 2: selectedCountry = 'europe';
//     break;
//     case 3: selectedCountry = 'africa';
//     break;
//     default:console.log('Тохиромжгүй утга');
//     break;
// }
// console.log(country[selectedCountry]);

                    // object method- арга тодорхойлох
let book = {
    name :'bad blood',
    author : 'Бат',
    page : '450',
    coverType:'хатуу',
    price:'100',
    getMessage:function(){
        return 'hi';
    },
    calculatePrice(count){
        // object gishuun ogogdolruu handahdaa this.
        return this.price * count;
    }
};
document.write(book.calculatePrice(1000));

let objectA = {
        name:'a',
        print(){
            return 'Энэ бол ' + this.name + 'объектын нэр';
        }
}
let objectB = {
    name : 'b'
}
objectB.print = objectA.print;
console.log(objectB.print());
// getter()                     setter()




