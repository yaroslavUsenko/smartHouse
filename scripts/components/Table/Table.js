'use strict'

function Table(name, type) {
  Device.call(this, name, type)
  this.__numberOfModes = 5
  this.__currentMode = 2
}

Table.prototype = Object.create(Device.prototype)
Table.prototype.constructor = Table

Table.prototype.getNumberOfModes = function () {
  return this.__numberOfModes
}

Table.prototype.setCurrentMode = setTableCurrentMode

Table.prototype.getCurrentMode = function () {
  return this.__currentMode
}

Table.prototype.addUIFunctional = addUITableFunctional

Table.prototype.turnOnUI = turnOnTableUI

Table.prototype.turnOffUI = turnOffTableUI
