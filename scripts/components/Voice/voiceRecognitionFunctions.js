'use strict'

var voiceTrigger = document.querySelector('.voice-trigger')
var voiceOutput = document.querySelector('.voice-output')

function addUIVoiceRecognitionFunctional(smartHouse) {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition

  if (window.SpeechRecognition) {
    var recognition = new SpeechRecognition()
    recognition.lang = 'ru-RU'
    recognition.addEventListener('result', function (event) {
      transcriptHandler(event, smartHouse)
    })

    recognition.addEventListener('error', function (event) {
      if (event.error == 'no-speech') {
        voiceTrigger.classList.remove('active')
      }
    })
  } else {
    voiceTrigger.remove()
  }

  voiceTrigger.addEventListener('click', function (event) {
    event.preventDefault()

    voiceTrigger.classList.add('active')

    recognition.start()
  })
}

function transcriptHandler(event, smartHouse) {
  voiceTrigger.classList.remove('active')
  var speechOutput = parseTranscript(event).toLowerCase()

  voiceOutput.innerHTML = speechOutput

  if (!speechOutput.indexOf('включи')) {
    var deviceName = speechOutput.slice(7, speechOutput.length)

    if (deviceName === 'всё') {
      smartHouse.turnOnAllDevices()
    } else {
      var device = getDeviceFromString(deviceName)

      if (device) {
        getDeviceFromString(deviceName).turnOn()
      }
    }
  } else if (!speechOutput.indexOf('выключи')) {
    var deviceName = speechOutput.slice(8, speechOutput.length)

    if (deviceName === 'всё') {
      smartHouse.turnOffAllDevices()
    } else {
      var device = getDeviceFromString(deviceName)

      if (device) {
        getDeviceFromString(deviceName).turnOff()
      }
    }
  } else if (!speechOutput.indexOf('стол')) {
    var numberOfMode = parseInt(speechOutput.slice(4, speechOutput.length))
    smartHouse.getDeviceByType('table').setCurrentMode(numberOfMode - 1)
  } else if (!speechOutput.indexOf('окно')) {
    var numberOfMode = parseInt(speechOutput.slice(4, speechOutput.length))
    smartHouse.getDeviceByType('window').setCurrentMode(numberOfMode - 1)
  } else if (!speechOutput.indexOf('лента')) {
    var numberOfMode = parseInt(speechOutput.slice(6, speechOutput.length))
    smartHouse.getDeviceByType('ledStrip').setCurrentMode(numberOfMode)
  } else if (!speechOutput.indexOf('температура')) {
    var temperature = parseInt(speechOutput.slice(11, speechOutput.length))
    smartHouse.getDeviceByType('airCondition').setTemperature(temperature)
  }
}

function parseTranscript(event) {
  return Array.from(event.results)
    .map(function (result) {
      return result[0]
    })
    .map(function (result) {
      return result.transcript
    })
    .join('')
}

function getDeviceFromString(deviceName) {
  var device = null

  if (deviceName === 'лампу') {
    device = smartHouse.getDeviceByType('lamp')
  } else if (deviceName === 'стол') {
    device = smartHouse.getDeviceByType('table')
  } else if (deviceName === 'окно') {
    device = smartHouse.getDeviceByType('window')
  } else if (deviceName === 'кондиционер') {
    device = smartHouse.getDeviceByType('airCondition')
  } else if (deviceName === 'камеру') {
    device = smartHouse.getDeviceByType('camera')
  } else if (deviceName === 'ленту') {
    device = smartHouse.getDeviceByType('ledStrip')
  }

  return device
}
