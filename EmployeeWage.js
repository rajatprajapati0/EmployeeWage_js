const fullday =1;
const Halfday =2;

const fullTimeHour=8;
const partTimeHour=4;
const wagePerHour=20;
let empHour=0;
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
let count=0;
for(let day =0;day<20;day++)
{
    atendance =Math.floor(Math.random()*10)%3;
    empHour+=getWorkingHour();
count++;
}
var employeeMonthlyWage=empHour*wagePerHour;


console.log("emp Monthly Wage :$"+employeeMonthlyWage+" Total hour :"+empHour+" total day :"+count);

