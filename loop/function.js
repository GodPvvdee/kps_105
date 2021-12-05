// 2 toog nemeh vildel 
 //  function ilerhiilel
// const add = (value1,value2) =>{
//     const result = value1 + value2;
//     document.write(result + "<br>");
// }
// add(5,10);
// add(100,300);
//             // function zarlalt
// function max (value1,value2){
//     if(value1>value2){
//         // utga butsaanaa
//         return value1;
//     }
//     else{
//     return value2
//     }
// }
// console.log(max(100,800)); // garalt n  deer 800
// //   suman function
// let calculateisOn = true;
// const pressPowerButton = () => {
//     if(calculateisOn){
//         console.log('toonii mashin assan baina');
//         calculateisOn = false;
//     }
//     else{
//         console.log('toonii mashin untarsan baina');
//     }
// }
// pressPowerButton();
// pressPowerButton();

// const square = function(number) {

//     return Math.sqrt(number);
//     }
// var x = square(16) // x gets the value 16
// console.log(x);


// ternary operation

// let balance = 10000;
// balance > 5000?console.log('Гүйлгээ хийх эрхтэй'):console.log('Үлдэгдэл хүрэлцэхгүй байна');

// if(balance>5000){
//     console.log('Гүйлгээ хийх эрхтэй');
// }
// else{
//     console.log('үлдэгдэл хүрэлцэхгүй байна');
// }




// banknii hadgalamj
// income  anhnii orlogo
// rate hadgalamjiin hvv
// hadgalah hugatsaa=parametr
let income = 1000000;
let rate = 0.13;
// month = hugatsaa(saraar)
const getSavings = (month) => {
    let result = income*rate*month + income;
    return result;
}
// hadgalamjiin dvngees 10% tatwar tootsdog tul vvniig shuudah function heregtei
// Ene function dotor hadgalamjiin niit dvng tootsooloh getSavings() functions ashiglana
const getTax = (month) =>{
    // hadgalamjiin tatwar 10%
    let tax = getSavings(month) *0.1;
    return tax;
}
// etsest n hadgalamjii etsesiiin vr dvng tootsoh function bichiy tatwaraas omnoh hadgalamjiin 
// dvngees tatwariig hassanaar ene function vr dvn bodogdono
const totalSavings = (month) =>{
    return getSavings(month) - getTax(month);
};

// shalgay
// hugatsaa 6 sar
document.write( 'Татвараас өмнөх хадгаламжийн дүнг:' + getSavings(6) + "<br>");
// garalt?
document.write('Татвар ' + getTax(6) + "<br>");
document.write('Татварын дараах хадгаламжын дүн' + totalSavings(6) + "<br>");
