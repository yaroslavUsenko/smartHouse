'use strict'

function SmartHouse() {
  this.__devices = []
  this.__status = false
}

SmartHouse.prototype.addDevice = function (device) {
  this.__devices.push(device)
}

SmartHouse.prototype.removeDevice = function (name) {
  var deviceIndex = this.__devices.filter(function (device, index) {
    if (device.getName() === name) {
      return index
    }
  })

  this.__devices.splice(deviceIndex, 1)
}

SmartHouse.prototype.getDeviceByName = function (name) {
  var desiredDevice = null

  this.__devices.forEach(function (device) {
    if (device.getName() === name) {
      desiredDevice = device
    }
  })

  return desiredDevice
}

SmartHouse.prototype.getDeviceByType = function (type) {
  var desiredDevice = null

  this.__devices.forEach(function (device) {
    if (device.getType() === type) {
      desiredDevice = device
    }
  })

  return desiredDevice
}

SmartHouse.prototype.getStatus = function () {
  return this.__status
}

SmartHouse.prototype.turnOnAllDevices = function () {
  this.__devices.forEach(function (device) {
    device.turnOn()
  })
}

SmartHouse.prototype.turnOffAllDevices = function () {
  this.__devices.forEach(function (device) {
    device.turnOff()
  })
}

SmartHouse.prototype.addUIFunctional = addUISmartHouseFunctional
