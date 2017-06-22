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
  startTime: '11:00am',
  endTime: '12:00pm'
}

const calEvents = [defaultEvent];


const Calendar = function (day, month, year, calEvents) {
  this.day = (isNaN(day) || day == null) ? calCurrentDate.getDay() : day;
  this.month = (isNaN(month) || month == null) ? calCurrentDate.getMonth() : month;
  this.year  = (isNaN(year) || year == null) ? calCurrentDate.getFullYear() : year;
  this.calEvents = calEvents;
}

const calendar = new Calendar(null, null, null, calEvents);

console.log(calendar)
