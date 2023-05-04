const fullday =1;
const Halfday =2;

const fullTimeHour=8;
const partTimeHour=4;
const wagePerHour=20;
let empHour=0;
atendance =Math.floor(Math.random()*10)%3;
function getWorkingHour()
{
    switch(atendance)
    {
      case fullday: 
                  return fullTimeHour;
            break;
      case Halfday: 
                   return partTimeHour;
            break; 
     default: return 0;
            break;

    }

}
empHour=getWorkingHour();

let employeeDailyWage=empHour*wagePerHour;

console.log("emp Daily Wage $"+employeeDailyWage);

