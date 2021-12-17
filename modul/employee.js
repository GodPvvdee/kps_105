let Employee = {
    salary : 2000000
};

let payLevel = {
    entryLevel: {
        taxMultiplier: .18, benefits:['эрүүл мэнд'],minSalary:500000,maxSalary:999999},
    midLevel: {taxMultiplier:.19, benefits:['эрүүл мэнд','амьдрах байр'],
        minSalary:1000000,maxSalary:1999999},
    seniorLevel: {taxMultiplier:.2, benefits:['эрүүл мэнд','амьдрах байр','фитнес эрх'],minSalary:2000000,maxSalary:3500000}
};

function getLevel() {
    if(Employee.salary >= payLevel.entryLevel.minSalary && payLevel.entryLevel.maxSalary >= Employee.salary){
        return 'entryLevel';
    }
    else if(Employee.salary >= payLevel.midLevel.minSalary && payLevel.midLevel.maxSalary >= Employee.salary){
        return 'middLevel';
    }
    else return 'seniorLevel';
}
function calculateTax() {
    payLevel[getLevel()].taxMultiplier * Employee.salary;
}
 function getBenefits() {
    payLevel[getLevel()].benefits.join(' , ');
}
function calculateBonus()  {
    return .2 * Employee.salary;
}
export {Employee , getLevel as glevel ,calculateTax as tax,getBenefits as benefits, calculateBonus as bonus}
