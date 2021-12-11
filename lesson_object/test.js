                        // object
// let harry_potter = {
//     _name:'Харри поттер ба Философийн чулуу',
//     _author:'Роулинг',
//     get name(){
//         return this._name;
//     },
//     get author(){
//         return this._author;
//     }
// };
// console.log(harry_potter.name);
// console.log(harry_potter.author);
                            // *********************
                            // class
//   class Book {
//       constructor(name,author){
//           this._name = name;
//           this._author = author;
//       }
//       get name(){
//           return this._name;
//       }
//       get author(){
//           return this._author;
//       }
//   }
//   const harry_potter = new Book ('Харри Поттер ба Философийн чулуу','Ж.К Роулинг');
//   console.log(harry_potter.name);
//   console.log(harry_potter.author);
                           // tohioldol
// class Book {
//     constructor(name,author){
//         this._name = name;
//         this._author = author;
//     }
// }
// const harry_potter = new Book ('Харри Поттер ба Философийн чулуу','Ж.К Роулинг');
// const sapiens =  new Book ('Sapiens: A Brief History of Humankind','Yu- val Noah Harari');

// console.log(harry_potter._name);
// console.log(sapiens._author);
                // class аргууд
// class Book {
//     constructor(name,author){
//         this._author = author;
//         this._name = name;
       
//     }
//      get author(){
//           return this._author;
//       }
//       get name(){
//           return this._name;
//       }
     
//       getInformation(){
//           return this.author + ' зохиогчийн ' + this._name + '  ном'; 
//       }
// }
// const sapiens =  new Book ('Sapiens: A Brief History of Humankind','Yu- val Noah Harari');

// console.log(sapiens.getInformation());
                        // удамшил 
// class Book {
//     constructor(name,author){
//         this._author = author;
//         this._name = name;
//     }
//      get author(){
//           return this._author;
//       }
//       get name(){
//           return this._name;
//       }
//       getInformation(){
//           return this.author + ' зохиогчийн ' + this._name + '  ном'; 
//       }
// }
// class AudioBook extends Book{
//     constructor(name,author,len,size){
//         super(name,author);
//         this._lenght = len;  // bichlegiin urt
//         this._size = size;   // file hemjee
//     }
// }
// const mongolians = new AudioBook('Монголчууд: Цахим түүх','Золбоо',600);
// console.log('Сонсдог номын нэр ' + mongolians.name);
// console.log('Зохиолч ' + mongolians.author);
// console.log(mongolians.len);

                                // test
                                
                        // удамшил 
                        class Book {
                            constructor(name,author){
                                this._author = author;
                                this._name = name;
                            }
                                get author(){
                                    return this._author;
                                }
                                get name(){
                                    return this._name;
                                }
                                getInformation(){
                                    return this.author + ' зохиогчийн ' + this._name + '  ном'; 
                                }
                        }
                        class AudioBook extends Book{
                            constructor(name,author,len,size){
                                super(name,author);
                                this._lenght = len;  // bichlegiin urt
                                this._size = size;   // file hemjee
                            }
                            get lenght(){
                                return this._lenght;
                            }
                            get size(){
                                return this._size;
                            }
                            //bichlegiin urtiig tsagruu horwuul
                            lenghtToHour(){
                                let h,m;
                                if(this._lenght !==null){
                                    h = Math.floor(this.lenght / 60);
                                    m = this._lenght %60;
                                }
                                return h+ 'цаг ' + m + ' минут';
                            }
                            
                        }
                        console.log(mongolians)
                                