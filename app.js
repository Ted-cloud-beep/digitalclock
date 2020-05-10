const display = document.querySelector(".time");
const showtime = () => {
  let t = new Date();
  let hours = t.getHours();
  let minutes = t.getMinutes();
  let seconds = t.getSeconds();
  let format = convertFormat(hours);
  let day = t.getDay();
  day = days(day);
  hours = hour(hours);

  display.innerHTML = `${hours}:${minutes}:${seconds} ${format} ${day}`;
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);
};

function hour(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time == 0) {
    time = 12;
  }
  return time;
}

function convertFormat(ho) {
  let morning = "AM";
  let evening = "PM";
  if (ho >= 12) {
    return evening;
  } else {
    return morning;
  }
}

function days(day) {
  console.log(day);
  switch (day) {
    case 0:
      day = "Sunday";
      return day;
      break;
    case 1:
      day = "Monday";
      return day;
      break;
    case 2:
      day = "Tuesday";
      return day;
      break;
    case 3:
      day = "Wednesday";
      return day;
      break;
    case 4:
      day = "Thursday";
      return day;
      break;
    case 5:
      day = "Friday";
      return day;
      break;
    case 6:
      day = "Saturday";
      return day;
      break;

    default:
  }
}
showtime();
setInterval(showtime, 1000);
