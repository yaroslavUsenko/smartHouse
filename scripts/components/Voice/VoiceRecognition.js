'use strict'

function VoiceRecognition(name) {
  Device.call(this, name)
}

VoiceRecognition.prototype = Object.create(Device.prototype)
VoiceRecognition.prototype.constructor = VoiceRecognition

VoiceRecognition.prototype.addUIFunctional = addUIVoiceRecognitionFunctional

VoiceRecognition.prototype.turnOnUI = function (VoiceRecognition) {}

VoiceRecognition.prototype.turnOffUI = function (VoiceRecognition) {}
