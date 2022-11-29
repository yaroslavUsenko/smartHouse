'use strict'

// =============== Tablet ================
var tablet = new Tablet()
tablet.addUIFunctional()

// =============== Smart House ================
var smartHouse = new SmartHouse()
smartHouse.addUIFunctional()

// =============== Table ================
var table = new Table('smartTable2508', 'table')
smartHouse.addDevice(table)
table.addUIFunctional()
table.setCurrentMode(table.getCurrentMode())

// =============== Window ================
var windowDevice = new WindowDevice('smartWindow2508', 'window')
smartHouse.addDevice(windowDevice)
windowDevice.addUIFunctional()
windowDevice.setCurrentMode(windowDevice.getCurrentMode())

// =============== Lamp ================
var lamp = new Lamp('lamp515', 'lamp')
smartHouse.addDevice(lamp)
lamp.addUIFunctional()

// =============== Air condition ================
var airCondition = new AirCondition('smartAirCondition2508', 'airCondition')
smartHouse.addDevice(airCondition)
airCondition.addUIFunctional()

// =============== Camera ================
var camera = new Camera('smartCamera2508', 'camera')
smartHouse.addDevice(camera)
camera.addUIFunctional()

// =============== Led strip ================
var ledStrip = new LedStrip('smartLedStrip2508', 'ledStrip')
smartHouse.addDevice(ledStrip)
ledStrip.addUIFunctional()

// =============== Voice Recognition ================
var voiceRecognition = new VoiceRecognition(
  'smartVoiceRecognition2508',
  'voiceRecognition'
)
smartHouse.addDevice(voiceRecognition)
voiceRecognition.addUIFunctional(smartHouse)
