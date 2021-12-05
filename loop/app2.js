// console.log('1');
// console.log('2');
                                    //  that's for loop

// var counter;
// for (counter = 1; counter <= 10; counter++)
// {
// document.write(counter*counter + ":");
// }

// let states = ['dallas','boston','denver'];
// for (let i = 0; i<states.length; i++){
//     console.log(states[i]);
//     document.write("  " +  states[i]); 
// }
                                    //   dawhar dawtalt
// let bookcase1 = ["Харри Поттер","Самар Хатан"];
// let bookcase2 = ["bad blood","fuck money"];
// for( let i=0; i<bookcase1.length;i++){
//     console.log('номын шүүгээ 1: ' + bookcase1[i]);
//     for(let j = 0 ; j < bookcase2.length; j++){
//         console.log('==> Номын шүүгээ 2: ' + bookcase2[j]);
       
//     }
// }
                                    // dawhar dawtaltan dotor nohtsol shalgah
    // let bookcase1 = ["Харри Поттер","Самар Хатан"];
    // let bookcase2 = ["bad blood","Харри Поттер"];
    // for( let i=0; i<bookcase1.length;i++){
    //     for(let j = 0 ; j < bookcase2.length; j++){
    //         if(bookcase1[i] === bookcase2[j]){
    //             console.log('Давхцсан ном ' + bookcase1[i]);
    //         }
    //     }
    // }

                                    //  that's for in loop
// for (counter_variable in object)
// 	{  statements;  }

// var book="mongol";  
// var booklist = new Array("Chinese", "English", "Jap");
// for (var counter in booklist) {
// 	book += booklist[counter] + "   ";
// }
// alert(   book);


                                          // while
// let words = 'Улаанбаатар хот, монгол улс';
// let i = 0;
// while(' ' !== words[i]){
//     i++;
// }
// console.log('Эхний үгийн урт: ' + i);
                                // togsgolgui dawtalt
                               
// var counter = 100;
// var numberlist = "";
// while (counter > 0) {
// numberlist += "Number " + counter + "<br>";
// counter -= 10;
// }
// document.write(numberlist); 
                                        //    do while
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
// expected result: "12345"


                                        // iterator forEach()

// let states = ['dallas','boston','denver'];
// states.forEach(function(statesItem ){
//     console.log(' -> ' + statesItem);
// });
                                          // map arga
                                          let states = ['Dallas','boston','denver'];
                                          let uStates = states.map(function(state){
                                              return state.toUpperCase();
                                          }
                                          );
                                          console.log(uStates);
                                          
                                          
                                          