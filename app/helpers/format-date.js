import Ember from 'ember';

export function formatDate(params) {
  var date = params[0];
  var year = parseInt(date.slice(0, 4));
  var month = parseInt(date.slice(5, 7));
  var day = parseInt(date.slice(8, 10));
  var time = date.slice(11, 16);
  var hour = time.slice(0,2);
  var minute = parseInt(time.slice(3, 5));
  var period;
  var monthString;
  var minuteString;

  if (month===1){monthString="January";}
  if (month===2){monthString="February";}
  if (month===3){monthString="March";}
  if (month===4){monthString="April";}
  if (month===5){monthString="May";}
  if (month===6){monthString="June";}
  if (month===7){monthString="July";}
  if (month===8){monthString="August";}
  if (month===9){monthString="September";}
  if (month===10){monthString="October";}
  if (month===11){monthString="November";}
  if (month===12){monthString="December";}

  hour = parseInt(hour);

  if (hour>11){
    period = "pm";
  }
  else {
    period = "am";
  }
  hour = hour%12;

  if(minute<10){
    minuteString = "0"+minute;
  }
  else {
    minuteString=""+minute;
  }


  return monthString + " "+ day+", "+year+ " "+ hour+ ":"+ minuteString+period;
  }

export default Ember.Helper.helper(formatDate);
