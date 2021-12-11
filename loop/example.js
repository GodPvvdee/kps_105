let workRule = 'Зарим хүмүүс Ажлын дүрмийг зөвхөн GOOGLE-ийн талаарх ном гэж бодож байж магад.Энэ үнэн,гэхдээ үүгээр зогсохгүй энэ бол ямар ч байгууллага ажилчдаасаа хамгийн ухаалаг шийдвэрүүдийг гаргуулж байх тогтолцоог хэрхэн бий болгох талаарх ном юм.Ажлын дүрэм! ном нь бодит туршлага дээр суурилсан гарын авлага төдийгүй маргашгүй зарчмууд нь албан ажлын ертөнцийг захирах нь дамжиггүй биз ээ. - Жеффи Пеффер';
let overUsedWords = ['ном','энэ'];
let weakWords = ['нь','юм','гэж'];
// alham1: workRule хувьсагчид агуулагдаж буй текстийн үг бүртэй ажиллах тул workRuleWords нэртэй массивд үгнүүдийг салгаж хадгал
document.write(workRule);
let workRuleWords = workRule.split(' ');
// alham2:Массивд хэдэн үг байгааг консол дээр харуулна
console.log('нийт үгийн тоо ' +  workRuleWords.length);
// alham3:Одоо текстэд агуулагдаж байгаа үгсээс weakWords массивд байгаа үгсийг хасъя.Хасахдаа FileSystemEntry() болон includes() аргуудыг ашиглаарай
// Үлдсэн үгсийг betterWords массивд хадгалж харуулна
let betterWords = workRuleWords.filter(function(word){
    return !weakWords.includes(word);
})
console.log(betterWords.join(' '));
// alham4 overUsedWords массивд хадгалагдаж буй үгс текст дотор хэдэн удаа давтагдаж байгааг тоолно Тоолохдоо foreach() арга ба давтагдсан тоог хадгалах countNom countEne хувьсагчийг ашигла .Тоологдсон утгыг консол дээр ES6 Тэмдэгт мөр залгах бичиглэлээр бичнэ
let countNom = 0;
let countEne = 0;
workRuleWords.forEach(word => {
    if(word.toLowerCase() === 'ном')
    countNom++;
    else if(word.toLowerCase() === 'энэ')
    countEne++;
})
console.log('ном үгийн тоо : ' + countNom);
console.log('Энэ үгийн тоо : ' + countEne);
// 'Ном' үгийн тоо:?
// "Энэ " үгийн тоо:?
