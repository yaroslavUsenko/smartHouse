'use strict'

var mode1StripButton = document.querySelector('.mode-1-strip-button')
var mode2StripButton = document.querySelector('.mode-2-strip-button')
var mode3StripButton = document.querySelector('.mode-3-strip-button')
var ledStripModes = document.querySelectorAll('.strip-mode')

var mode2TimerId = null
var mode2DiodeTimerIds = []
var mode2Delay = 500
var mode3TimerId = null
var mode3Delay = 500

function addModesUIFunctional() {
  var diodes = ledStrip.getDiodes()

  mode1StripButton.addEventListener('click', function () {
    if (ledStrip.getStatus() && ledStrip.getCurrentMode() !== 1) {
      ledStrip.setCurrentMode(1)
      resetStrip(diodes)

      changeColorMode1(diodes)
    }
  })

  mode2StripButton.addEventListener('click', function () {
    if (ledStrip.getStatus() && ledStrip.getCurrentMode() !== 2) {
      ledStrip.setCurrentMode(2)
      resetStrip(diodes)

      changeColorMode2(diodes)
    }
  })

  mode3StripButton.addEventListener('click', function () {
    if (ledStrip.getStatus() && ledStrip.getCurrentMode() !== 3) {
      ledStrip.setCurrentMode(3)
      resetStrip(diodes)

      changeColorMode3(diodes)
    }
  })
}

function resetStrip(diodesList) {
  clearTimeout(mode2TimerId)
  mode2TimerId = null
  clearTimeout(mode3TimerId)
  mode3TimerId = null

  for (var i = 0; i < mode2DiodeTimerIds.length; i++) {
    clearInterval(mode2DiodeTimerIds[i])
  }

  diodesList.forEach(function (diode) {
    diode.style.backgroundColor = ''
    diode.style.boxShadow = ''
  })
}

function setStripCurrentMode(modeNumber) {
  if (typeof modeNumber === 'number') {
    if (modeNumber >= 0 && modeNumber <= this.getNumberOfModes()) {
      this.__currentMode = modeNumber

      if (modeNumber === 1) {
        resetStrip(this.__diodes)

        changeColorMode1(diodes)
      } else if (modeNumber === 2) {
        resetStrip(this.__diodes)

        changeColorMode2(diodes)
      } else if (modeNumber === 3) {
        resetStrip(this.__diodes)

        changeColorMode3(diodes)
      }
    }
  }
}

function changeColorMode1(diodes) {
  diodes.forEach(function (diode) {
    changeColor(diode)
  })
}

function changeColorMode2(diodes) {
  var isDiodesOn = []

  for (var i = 0; i < diodes.length; i++) {
    isDiodesOn[i] = false
  }

  mode2TimerId = setTimeout(function changeLight() {
    diodes.forEach(function (diode, index) {
      var mode2DiodeTimerId = setTimeout(function () {
        if (!isDiodesOn[index]) {
          changeColor(diode)
        } else {
          diode.style.backgroundColor = ''
          diode.style.boxShadow = ''
        }

        isDiodesOn[index] = !isDiodesOn[index]
      }, (mode2Delay / 4) * index)

      mode2DiodeTimerIds.push(mode2DiodeTimerId)
    })

    mode2TimerId = setTimeout(changeLight, mode2Delay)
  }, mode2Delay)
}

function changeColorMode3(diodes) {
  var isDiodesOn = false

  mode3TimerId = setTimeout(function changeLight() {
    diodes.forEach(function (diode) {
      if (!isDiodesOn) {
        changeColor(diode)
      } else {
        diode.style.backgroundColor = ''
        diode.style.boxShadow = ''
      }

      isDiodesOn = !isDiodesOn
    })

    mode3TimerId = setTimeout(changeLight, mode3Delay)
  }, mode3Delay)
}
