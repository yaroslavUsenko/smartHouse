'use strict'

var lampLights = document.querySelectorAll('.lamp-light')
var lampButton = document.querySelector('.lamp_button')

function addUILampFunctional() {
  var lamp = this

  lampButton.addEventListener('click', function () {
    if (!lamp.getStatus()) {
      lamp.turnOn()
    } else {
      lamp.turnOff()
    }
  })
}

function turnOnLampUI(lamp) {
  if (!lamp.getStatus()) {
    lampLights.forEach(function (light) {
      light.classList.remove('disabled')
    })
  }
}

function turnOffLampUI(lamp) {
  if (lamp.getStatus()) {
    lampLights.forEach(function (light) {
      light.classList.add('disabled')
    })
  }
}
