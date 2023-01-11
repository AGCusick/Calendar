var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'December']
var getMonths = document.querySelector('.twelvemonths');
var showMonth = document.querySelector('.show-month')
var showWeekDays = document.querySelector('.weekday');
var dateContainer = document.querySelector('.date-container');
let weekDay = new Date();


let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}

console.log(month + 1)
const getDays = getDaysInMonth(year, month)
console.log(getDays)
function drawDays(){
    for(i = 1; i <= getDays; i ++){
        let calendarDay = document.createElement('div')
        calendarDay.className = 'calendar-day';
        calendarDay.innerHTML = i;
        dateContainer.appendChild(calendarDay);
    }
}
drawDays()
switch(day){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

showMonth.innerHTML = months[month];
