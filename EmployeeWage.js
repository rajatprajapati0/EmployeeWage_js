const fullday =1;
const Halfday =2;

const fullTimeHour=8;
const partTimeHour=4;
const wagePerHour=20;
let empHour=0;
atendance =Math.floor(Math.random()*10)%3;

switch(atendance)
    {
      case fullday: 
                  empHour=fullTimeHour;
            break;
      case Halfday: 
                   empHour=partTimeHour;
            break; 
     default: empHour;
            break;

    }
let employeeDailyWage=empHour*wagePerHour;

console.log("emp Daily Wage $"+employeeDailyWage);
