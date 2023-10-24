setInterval(showTime, 1000)

function showTime() {

  let time = new Date()
  let hour = time.getHours()
  let min = time.getMinutes()
  // let sec = time.getSeconds()
  let am_pm = 'AM'

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
      am_pm = "PM"
  } else if (hour == 0) {
    hour = 12
    am_pm = "AM"
  }

  hour = hour < 10 ? "0" + hour : hour
  min = min < 10 ? "0" + min : min
  // min = min < 10 ? "0" + min : min

  let currentTime = `${hour}:${min}${am_pm}`

  document.querySelector("#clock").innerHTML = currentTime
}

showTime();
