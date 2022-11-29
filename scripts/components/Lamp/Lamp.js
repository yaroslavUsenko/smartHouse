'use strict'

function Lamp(name, type) {
  Device.call(this, name, type)
}

Lamp.prototype = Object.create(Device.prototype)
Lamp.prototype.constructor = Lamp

Lamp.prototype.addUIFunctional = addUILampFunctional

Lamp.prototype.turnOnUI = turnOnLampUI

Lamp.prototype.turnOffUI = turnOffLampUI
