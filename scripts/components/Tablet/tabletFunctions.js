'use strict'

var turnOnButton = document.querySelector('.turn-on-button')
var backButton = document.querySelector('.back-button')

var displayOff = document.querySelector('.tablet-display-off')
var statusBar = document.querySelector('.tablet-display_status-bar')
var workspace = document.querySelector('.tablet-display_workspace')
var homeScreen = document.querySelector('.home-screen')
var smartHouseScreen = document.querySelector('.smart_house-screen')
var instructionScreen = document.querySelector('.instruction-screen')

var buttonOnAnimateDuration = 300

function addUITabletFunctional() {
  var tablet = this

  changeScreensFunctional(tablet)

  turnOnButton.addEventListener('click', function () {
    turnOnButton.animate(
      [
        { transform: 'translateZ(0vw)' },
        { transform: 'translateZ(-0.3vw)' },
        { transform: 'translateZ(0vw)' },
      ],
      {
        duration: buttonOnAnimateDuration,
      }
    )

    setTimeout(function () {
      if (!tablet.getStatus()) {
        tablet.turnOn()
      } else {
        tablet.turnOff()
      }

      tablet.setCurrentScreen(homeScreen)
    }, buttonOnAnimateDuration)
  })

  backButton.addEventListener('click', function () {
    var currentScreen = tablet.getCurrentScreen()

    if (tablet.getStatus() && currentScreen !== homeScreen) {
      if (currentScreen === smartHouseScreen) {
        changeDisabledStatus(homeScreen, tablet)
      } else if (currentScreen === instructionScreen) {
        changeDisabledStatus(homeScreen, tablet)
      } else {
        changeDisabledStatus(smartHouseScreen, tablet)
      }
    }
  })
}

function turnOnTablet() {
  this.__status = true

  statusBar.style.display = 'flex'
  homeScreen.style.display = 'flex'
  displayOff.style.display = 'none'
}

function turnOffTablet() {
  this.__status = false

  statusBar.style.display = 'none'
  this.__currentScreen.style.display = 'none'
  displayOff.style.display = 'block'
}
