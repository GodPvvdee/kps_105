                        // static arga
// class library{
//     static generateBook(){
//         const books = ['Оюунтүлхүүр','Алхимич','Дайн ба энх','Оройгүй сүм'];
//         const randomNumber = Math.floor(Math.random()*books.length);
//         return books[randomNumber];
//     }
// }
// console.log(library.generateBook());
                        // example
class Rectangle {
constructor(height, width) {
    this.height = height;
    this.width = width;
}
// Getter
get area() {
    return this.calcArea();
}
// Method
calcArea() {
    return this.height * this.width;
}
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

                // example2
    