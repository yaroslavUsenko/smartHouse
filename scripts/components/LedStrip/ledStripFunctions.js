'use strict'

var diodes = document.querySelectorAll('.diode')
var turnOnStripButton = document.querySelector('.turn-on-strip-button')

function addUIStripFunctional() {
  var ledStrip = this

  ledStrip.setDiodes(diodes)

  addRangesUIFunctional()
  addModesUIFunctional()

  turnOnStripButton.addEventListener('click', function () {
    if (!ledStrip.getStatus()) {
      ledStrip.turnOn()
    } else {
      ledStrip.turnOff()
    }
  })
}

function turnOnLedStripUI(ledStrip) {
  if (!ledStrip.getStatus()) {
    ledStrip.setCurrentMode(1)
    resetStrip(diodes)

    diodes.forEach(function (diode) {
      changeColor(diode)
    })

    colorRange.forEach(function (colorProperty) {
      colorProperty.disabled = false
    })

    ledStripModes.forEach(function (mode) {
      mode.disabled = false
    })
  }
}

function turnOffLedStripUI(ledStrip) {
  if (ledStrip.getStatus()) {
    resetStrip(diodes)

    colorRange.forEach(function (colorProperty) {
      colorProperty.disabled = true
    })

    ledStripModes.forEach(function (mode) {
      mode.disabled = true
    })
  }
}
