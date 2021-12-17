
import {Employee ,glevel ,tax,benefits,bonus} from './employee.js';
function getEmployeeInformation(inputSalary){
    Employee.salary = inputSalary;
    let level;
    if(glevel() == 'entryLevel')
        level = 'Дадлагажигч';
    else if(glevel() == 'middLevel')
        level = 'Дунд';
    else level = 'Ахлах';
    console.log('Боловсон хүчний түвшин: ' + level);
    console.log('Татвар: ' + tax());
    console.log('Нэмэлт: ' + benefits());
    console.log('Урамшуулал: ' + bonus() + '\n\n');
}
getEmployeeInformation(850000);
// getEmployeeInformation(1500000);
// getEmployeeInformation(2500000);