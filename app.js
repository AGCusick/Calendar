var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'December']
var getMonths = document.querySelector('.twelvemonths');
var showMonth = document.querySelector('.show-month');
var showWeekDays = document.querySelector('.weekday');
var dateContainer = document.querySelector('.date-container');
var scrollRight = document.querySelector('.go-right');
var scrollLeft = document.querySelector('.go-left');

let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

var lastDayCurrent = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
var lastDayPrevious = new Date(d.getFullYear(), d.getMonth(), 0).getDate();

let days = getDaysInMonth(year, month);
let calendarDay = '';



function drawDays(days) {
    let firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    let prevLastDay = new Date(d.getFullYear(), d.getMonth(), 0).getDate();
    let firstDayNext = new Date(d.getFullYear(), d.getMonth() + 1, 1).getDay();
    let lastDayDay = new Date(d.getFullYear(), d.getMonth(), 0).getDay();
    console.log((firstDayNext -7) *-1)

    for (x = firstDay; x > 0; x--) {
        let prevDays = document.createElement('div');
        prevDays.className = 'calendar-day previous-day';
        prevDays.innerHTML = prevLastDay - x +1;
        dateContainer.appendChild(prevDays);
    }
    for (i = 1; i <= days; i++) {
        let calendarDay = document.createElement('div')
        calendarDay.className = 'calendar-day';
        calendarDay.innerHTML = i;
        dateContainer.appendChild(calendarDay);
    }

    for(j = 1; j <= (firstDayNext -7) *-1; j++){
        let nextDays = document.createElement('div');
        nextDays.className = 'calendar-day previous-day';
        nextDays.innerHTML = j;
        dateContainer.appendChild(nextDays)
    }
}

scrollRight.addEventListener('click', () => {

    if (month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }
    d.setMonth(month);
    d.setFullYear(year);
    let days = getDaysInMonth(year, month + 1);
    showMonth.innerHTML = months[month];
    dateContainer.innerHTML = '';
    drawDays(days);



})

scrollLeft.addEventListener('click', () => {

    if (month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    d.setMonth(month);
    d.setFullYear(year);
    let days = getDaysInMonth(year, month + 1);
    showMonth.innerHTML = months[month]
    dateContainer.innerHTML = '';
    drawDays(days)
})

showMonth.innerHTML = months[month];
drawDays(days)



