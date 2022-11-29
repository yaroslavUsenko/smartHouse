'use strict'

var redColorRange = document.querySelector('.led-strip-screen #red')
var greenColorRange = document.querySelector('.led-strip-screen #green')
var blueColorRange = document.querySelector('.led-strip-screen #blue')
var opacityRange = document.querySelector('.led-strip-screen #opacity')
var colorRange = [redColorRange, greenColorRange, blueColorRange, opacityRange]

function addRangesUIFunctional() {
  redColorRange.value = ledStrip.getAmountOfRed()
  greenColorRange.value = ledStrip.getAmountOfGreen()
  blueColorRange.value = ledStrip.getAmountOfBlue()
  opacityRange.value = ledStrip.getOpacity()

  redColorRange.addEventListener('change', function (event) {
    var red = event.target.value

    ledStrip.setAmountOfRed(red)

    if (ledStrip.getCurrentMode() === 1) {
      changeColorForMode1()
    }
  })

  greenColorRange.addEventListener('change', function (event) {
    var green = event.target.value

    ledStrip.setAmountOfGreen(green)

    if (ledStrip.getCurrentMode() === 1) {
      changeColorForMode1()
    }
  })

  blueColorRange.addEventListener('change', function (event) {
    var blue = event.target.value

    ledStrip.setAmountOfBlue(blue)

    if (ledStrip.getCurrentMode() === 1) {
      changeColorForMode1()
    }
  })

  opacityRange.addEventListener('change', function (event) {
    var opacity = event.target.value

    ledStrip.setOpacity(opacity)

    if (ledStrip.getCurrentMode() === 1) {
      changeColorForMode1()
    }
  })
}

function setStripAmountOfRed(red) {
  var ledStrip = this

  validColorProperty(red, function () {
    ledStrip.__amountOfRed = red
  })
}

function setStripAmountOfGreen(green) {
  var ledStrip = this

  validColorProperty(green, function () {
    ledStrip.__amountOfGreen = green
  })
}

function setStripAmountOfBlue(blue) {
  var ledStrip = this

  validColorProperty(blue, function () {
    ledStrip.__amountOfBlue = blue
  })
}

function setStripOpacity(opacity) {
  if (ledStrip.getStatus()) {
    if (opacity >= 0 && opacity <= 1) {
      ledStrip.__opacity = opacity
    }
  }
}

function validColorProperty(color, callback) {
  if (ledStrip.getStatus()) {
    if (color >= 0 && color <= 255) {
      callback()
    }
  }
}

function changeColor(node) {
  var color = ledStrip.getColor()

  node.style.backgroundColor =
    'rgba(255,255,255,' + ledStrip.getOpacity() * 2 + ')'
  node.style.boxShadow =
    '0vw 0vw 1vw 0.4vw ' +
    color +
    ', 0vw 0vw 0.5vw 0.4vw ' +
    color +
    ', 0.8vw 0vw 1vw 0.4vw ' +
    color +
    ', 1.5vw 0vw 2vw 0.4vw ' +
    color
}

function changeColorForMode1() {
  var stripDiodes = ledStrip.__diodes

  stripDiodes.forEach(function (diode) {
    changeColor(diode)
  })
}
