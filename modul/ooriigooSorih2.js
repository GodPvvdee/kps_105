let salary = 2000000;
let payLevel = {
    entryLevel: {
        taxMultiplier: .18, benefits:['эрүүл мэнд'],minSalary:500000,maxSalary:999999},
    midLevel: {taxMultiplier:.19, benefits:['эрүүл мэнд','амьдрах байр'],
        minSalary:1000000,maxSalary:1999999},
    seniorLevel: {taxMultiplier:.2, benefits:['эрүүл мэнд','амьдрах байр','фитнес эрх'],minSalary:200000,maxSalary:200000,maxSalary:3500000}
};
function getLevel(){
    if(salary >= payLevel.entryLevel.minSalary && payLevel.entryLevel.maxSalary >= salary){
        return 'entryLevel';
    }
    else if(salary >= payLevel.midLevel.minSalary && payLevel.midLevel.maxSalary >= salary){
        return 'middLevel';
    }
    else return 'seniorLevel';
}
function calculateTax(){
    payLevel[getLevel()].taxMultiplier*salary;
}
function getBenefits(){
    payLevel[getLevel()].benefits.join(' , ');
}
function calculateBonus(){
    return .2*salary;
}
function getEmployeeInformation(inputSalary){
    salary = inputSalary;
    let level;
    if(getLevel() == 'entryLevel')
        level = 'Дадлагажигч';
    else if(getLevel() == 'middLevel')
        level = 'Дунд';
    else level = 'Ахлах';
    console.log('Боловсон хүчний түвшин: ' + level);
    console.log('Татвар: ' + calculateTax());
    console.log('Нэмэлт: ' + getBenefits());
    console.log('Урамшуулал: ' + calculateBonus() + '\n\n');
}
// getEmployeeInformation(850000);
getEmployeeInformation(1500000);
// getEmployeeInformation(2500000);