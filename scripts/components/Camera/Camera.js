'use strict'

function Camera(name, type) {
  Device.call(this, name, type)
  this.__numberOfPosition = 2
  this.__currentPosition = 2
}

Camera.prototype = Object.create(Device.prototype)
Camera.prototype.constructor = Camera

Camera.prototype.getNumberOfPosition = function () {
  return this.__numberOfPosition
}

Camera.prototype.getCurrentPosition = function () {
  return this.__currentPosition
}

Camera.prototype.setCurrentPosition = setCameraCurrentPosition

Camera.prototype.addUIFunctional = addUICameraFunctional

Camera.prototype.turnOnUI = turnOnCameraUI

Camera.prototype.turnOffUI = turnOffCameraUI
