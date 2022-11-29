'use strict'

function WindowDevice(name, type) {
  Device.call(this, name, type)
  this.__numberOfModes = 5
  this.__currentMode = 0
}

WindowDevice.prototype = Object.create(Device.prototype)
WindowDevice.prototype.constructor = WindowDevice

WindowDevice.prototype.getNumberOfModes = function () {
  return this.__numberOfModes
}

WindowDevice.prototype.setCurrentMode = setWindowCurrentMode

WindowDevice.prototype.getCurrentMode = function () {
  return this.__currentMode
}

WindowDevice.prototype.addUIFunctional = addUIWindowFunctional

WindowDevice.prototype.turnOnUI = turnOnWindowDeviceUI

WindowDevice.prototype.turnOffUI = turnOffWindowDeviceUI
