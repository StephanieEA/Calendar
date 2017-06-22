const calHours = ['12:00am', '1:00am', '2:00am', '3:00am', '4:00am', '5:00am',
                  '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am',
                  '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm',
                  '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm'];

const calDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const calMonths = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November',
                  'December'];

const calDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calCurrentDate = new Date();

const defaultEvent = {
  day: '1',
  startTime: '11',
  endTime: '12',
  name: 'Code Challenge'
}

const defaultEvent2 = {
  day: '1',
  startTime: '11',
  endTime: '13',
  name: 'Vet Appointment'
}

const defaultEvent3 = {
  day: '1',
  startTime: '14',
  endTime: '15',
  name: 'Coffee'
}

const calEvents = [defaultEvent, defaultEvent2, defaultEvent3];

const Calendar = function (day, month, year, calEvents) {
  this.day = (isNaN(day) || day == null) ? calCurrentDate.getDay() : day;
  this.month = (isNaN(month) || month == null) ? calCurrentDate.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? calCurrentDate.getFullYear() : year;
  this.calEvents = calEvents;
  this.html = '';
}

Calendar.prototype.generateHTML = function(){
    var firstDay = new Date(this.year, this.month, 1);
    var startingDay = firstDay.getDay();

    var monthLength = calDaysInMonth[this.month];

    if (this.month == 1) { // February only!
      if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
        monthLength = 29;
      }
    }

    var monthName = calMonths[this.month]
    var html = '<table class="calendar-table">';
    html += '<tr><th colspan="7">';
    html +=  monthName + "&nbsp;" + this.year;
    html += '</th></tr>';
    html += '<tr class="calendar-header">';
    for(var i = 0; i <= 6; i++ ){
      html += '<td class="calendar-header-day">';
      html += calDays[i];
      html += '</td>';
    }
    html += '</tr><tr>';

    // fill in the days
    var day = 1;
    // this loop is for is weeks (rows)
    for (var i = 0; i < 9; i++) {
      // this loop is for weekdays (cells)
      for (var j = 0; j <= 6; j++) {
        html += '<td class="calendar-day">';
        if (day <= monthLength && (i > 0 || j >= startingDay)) {
          html += day;
          day++;
        }
        html += '</td>';
      }
      // stop making rows if we've run out of days
      if (day > monthLength) {
        break;
      } else {
        html += '</tr><tr>';
      }
    }
    html += '</tr></table>';

    this.html = html;
}

Calendar.prototype.getHTML = function() {
  return this.html;
}


const displayHours = function () {
  var html = '<table class="hours-table">';
  html += '<tr><th colspan="1"></th><th></th></tr>';
  for (var i=0; i < 25; i++) {
    html += `<section style="height:60px"><article class="hour">${i}:00</article></tr></section>`;
  }
  $('.day-view').prepend(html)
}

const displayEvents = function (day) {
  calEvents.forEach(event => {
    const totalEventTime = (event.endTime - event.startTime) * 60 - 10
    if (event.day == day) {
      Array.from($('.hour')).forEach(hour => {
        if (hour.innerText.includes(event.startTime)) {
          var addTime = $(`article.hour:contains(${event.startTime})`);
          addTime.after(`<article class="event" style="height:${totalEventTime}px" width="100%">${event.name}</article>`)
          ;}
        });
        ;}
      });
    }

const calendar = new Calendar(null, null, null, calEvents);
calendar.generateHTML();
document.write(calendar.getHTML());

$('.calendar-day').on('click', function () {
    var day = this.innerText;
    displayHours()
    displayEvents(day)
});
