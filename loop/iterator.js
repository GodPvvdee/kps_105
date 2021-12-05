//                                     // foreach

// let states = ['Dallas','Boston','Denver'];
// states.forEach(function(statesItem){
// document.write('->' + statesItem + "<br>")
// })
//                 //    суман функц
// let states = ['dallas','boston','denver'];
// states.forEach(statesItem => console.log('=>' + statesItem + "<br>"));





                                        // map
// let states = ['darhan','huwsgul','uvs']
// let uStates = states.map(function(state){
//     return state.toUpperCase();
// });
// document.write( uStates );


// let states = ['darhan','huwsgul','uvs']
// let uStates2 = states.map(state => state.toUpperCase());
// console.log(uStates2)

                                          // filter
let states = ['Даллас','ДБостон','Денвер'];
let filteredStates = states.every(function(param){
    return param[0] ==='Д';
})
document.write(filteredStates);
// garalt : 
