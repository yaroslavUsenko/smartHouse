'use strict'

function Device(name, type) {
  SmartHouse.call(this)
  this.__name = name
  this.__type = type
}

Device.prototype = Object.create(SmartHouse.prototype)
Device.prototype.constructor = Device

Device.prototype.turnOn = function () {
  this.turnOnUI(this)

  this.__status = true
}

Device.prototype.turnOff = function () {
  this.turnOffUI(this)

  this.__status = false
}

Device.prototype.getName = function () {
  return this.__name
}

Device.prototype.getType = function () {
  return this.__type
}
