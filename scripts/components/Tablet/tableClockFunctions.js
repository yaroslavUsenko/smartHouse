'use strict'

var clockTime = document.querySelector('.clock-time')
var clockDate = document.querySelector('.clock-date')

var clockTimerId = null
var date = new Date()
var time = date.getMinutes()

clockTime.innerHTML = setCorrectTime()
clockDate.innerHTML = date.toDateString()

clockTimerId = setInterval(function () {
  var dateNow = new Date()
  var timeNow = dateNow.getMinutes()

  if (time !== timeNow) {
    clockTime.innerHTML = setCorrectTime()

    time = timeNow
  }
}, 1000)

function setCorrectTime() {
  var date = new Date()
  var hours = date.getHours()
  var minutes = date.getMinutes()
  var time = ''

  if (hours < 10) {
    time += '0' + hours
  } else {
    time += hours
  }

  if (minutes < 10) {
    time += ':0' + minutes
  } else {
    time += ':' + minutes
  }

  return time
}
