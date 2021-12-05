
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
