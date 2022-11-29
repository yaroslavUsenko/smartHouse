'use strict'

var turnOnWindowButton = document.querySelector('.turn-on-window-button')
var windowModes = document.querySelectorAll('.window-mode')
var windowMovingPart = document.querySelector('.window-moving-part')

function addUIWindowFunctional() {
  var windowDevice = this

  turnOnWindowButton.addEventListener('click', function () {
    if (!windowDevice.getStatus()) {
      windowDevice.turnOn()
    } else {
      windowDevice.turnOff()
    }
  })

  windowModes.forEach(function (button, index) {
    var reverseIndex = windowDevice.__numberOfModes - index

    button.addEventListener('click', function () {
      windowDevice.setCurrentMode(reverseIndex)
    })
  })
}

function turnOnWindowDeviceUI(windowDevice) {
  if (!windowDevice.getStatus()) {
    windowModes.forEach(function (button) {
      button.disabled = false
    })
  }
}

function turnOffWindowDeviceUI(windowDevice) {
  if (windowDevice.getStatus()) {
    windowModes.forEach(function (button) {
      button.disabled = true
    })
  }
}

function setWindowCurrentMode(modeNumber) {
  if (typeof modeNumber === 'number') {
    if (modeNumber >= 0 && modeNumber <= windowDevice.getNumberOfModes()) {
      this.__currentMode = modeNumber

      moveWindow(modeNumber)
    }
  }
}

function moveWindow(modeNumber) {
  windowMovingPart.style.transform = 'translateZ(' + modeNumber + 'vw)'
}
