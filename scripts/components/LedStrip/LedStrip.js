'use strict'

function LedStrip(name, type) {
  Device.call(this, name, type)
  this.__numberOfModes = 3
  this.__currentMode = 1
  this.__diodes = []
  this.__amountOfRed = 255
  this.__amountOfGreen = 150
  this.__amountOfBlue = 170
  this.__opacity = 1
}

LedStrip.prototype = Object.create(Device.prototype)
LedStrip.prototype.constructor = LedStrip

LedStrip.prototype.getNumberOfModes = function () {
  return this.__numberOfModes
}

LedStrip.prototype.setCurrentMode = setStripCurrentMode

LedStrip.prototype.getCurrentMode = function () {
  return this.__currentMode
}

LedStrip.prototype.addUIFunctional = addUIStripFunctional
LedStrip.prototype.turnOnUI = turnOnLedStripUI
LedStrip.prototype.turnOffUI = turnOffLedStripUI

LedStrip.prototype.setDiodes = function (diodes) {
  var stripDiodes = this.__diodes

  diodes.forEach(function (diode) {
    stripDiodes.push(diode)
  })
}
LedStrip.prototype.getDiodes = function () {
  return this.__diodes
}

LedStrip.prototype.getAmountOfRed = function () {
  return this.__amountOfRed
}
LedStrip.prototype.setAmountOfRed = setStripAmountOfRed

LedStrip.prototype.getAmountOfGreen = function () {
  return this.__amountOfGreen
}
LedStrip.prototype.setAmountOfGreen = setStripAmountOfGreen

LedStrip.prototype.getAmountOfBlue = function () {
  return this.__amountOfBlue
}
LedStrip.prototype.setAmountOfBlue = setStripAmountOfBlue

LedStrip.prototype.getOpacity = function () {
  return this.__opacity
}
LedStrip.prototype.setOpacity = setStripOpacity

LedStrip.prototype.getColor = function () {
  var color =
    'rgba(' +
    this.__amountOfRed +
    ',' +
    this.__amountOfGreen +
    ',' +
    this.__amountOfBlue +
    ',' +
    this.__opacity +
    ')'

  return color
}

LedStrip.prototype.setColor = function (red, green, blue, opacity) {
  this.setAmountOfRed(red)
  this.setAmountOfGreen(green)
  this.setAmountOfBlue(blue)
  this.setOpacity(opacity)
}
