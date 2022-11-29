'use strict'

function Tablet(name) {
  this.__name = name
  this.__status = false
  this.__currentScreen = displayOff
}

Tablet.prototype.getStatus = function () {
  return this.__status
}

Tablet.prototype.turnOn = turnOnTablet

Tablet.prototype.turnOff = turnOffTablet

Tablet.prototype.getCurrentScreen = function () {
  return this.__currentScreen
}

Tablet.prototype.setCurrentScreen = function (screen) {
  this.__currentScreen = screen
}

Tablet.prototype.addUIFunctional = addUITabletFunctional
