const fullday =1;
const Halfday =2;
const maxWorkingDay=20;
const maxWorkingHour=160;
const fullTimeHour=8;
const partTimeHour=4;
const wagePerHour=20;
let empHour=0;
let totalDay=0;

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
while(totalDay <maxWorkingDay&& empHour <=maxWorkingHour)
{
    atendance =Math.floor(Math.random()*10)%3;
    empHour+=getWorkingHour();
    totalDay++;
}
var employeeMonthlyWage=empHour*wagePerHour;


console.log("emp Monthly Wage :$"+employeeMonthlyWage+" Total hour :"+empHour+" total day :"+totalDay);

