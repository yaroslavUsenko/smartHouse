'use strict'

function AirCondition(name, type) {
  Device.call(this, name, type)
  this.__temperature = 20
  this.__minTemperature = 15
  this.__maxTemperature = 25
}

AirCondition.prototype = Object.create(Device.prototype)
AirCondition.prototype.constructor = AirCondition

AirCondition.prototype.getTemperature = function () {
  return this.__temperature
}

AirCondition.prototype.setTemperature = setConditionTemperature

AirCondition.prototype.getMinTemperature = function () {
  return this.__minTemperature
}

AirCondition.prototype.getMaxTemperature = function () {
  return this.__maxTemperature
}

AirCondition.prototype.addUIFunctional = addUIConditionFunctional

AirCondition.prototype.turnOnUI = turnOnConditionUI

AirCondition.prototype.turnOffUI = turnOffConditionUI
