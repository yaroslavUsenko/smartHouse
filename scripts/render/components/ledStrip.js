var $ledStrip1 = document.querySelector('.led_strip-1')
var $ledStrip2 = document.querySelector('.led_strip-2')
var numberOfDiodesOnStrip1 = 36
var numberOfDiodesOnStrip2 = 35

for (var i = 0; i < numberOfDiodesOnStrip1; i++) {
  var $diode = document.createElement('div')

  $diode.classList.add('diode')
  $ledStrip1.append($diode)
}

for (var i = 0; i < numberOfDiodesOnStrip2; i++) {
  var $diode = document.createElement('div')

  $diode.classList.add('diode')
  $ledStrip2.append($diode)
}
