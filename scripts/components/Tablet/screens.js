'use strict'

function changeScreensFunctional(tablet) {
  // ============== Smart House ===================
  var smartHouseApp = document.querySelector('.smart_house-app')
  var smartHouseScreen = document.querySelector('.smart_house-screen')

  smartHouseApp.addEventListener('click', function () {
    changeDisabledStatus(smartHouseScreen, tablet)
  })

  // ============== Table ===================
  var tableButton = document.querySelector('.table_button')
  var tableScreen = document.querySelector('.table-screen')

  tableButton.addEventListener('click', function () {
    changeDisabledStatus(tableScreen, tablet)
  })

  // ============== Window ===================
  var windowButton = document.querySelector('.window_button')
  var windowScreen = document.querySelector('.window-screen')

  windowButton.addEventListener('click', function () {
    changeDisabledStatus(windowScreen, tablet)
  })

  // ============== Air condition ===================
  var airConditionButton = document.querySelector('.air-condition_button')
  var airConditionScreen = document.querySelector('.air-condition-screen')

  airConditionButton.addEventListener('click', function () {
    changeDisabledStatus(airConditionScreen, tablet)
  })

  // ============== Camera ===================
  var cameraButton = document.querySelector('.camera_button')
  var cameraScreen = document.querySelector('.camera-screen')

  cameraButton.addEventListener('click', function () {
    changeDisabledStatus(cameraScreen, tablet)
  })

  // ============== Led strip ===================
  var ledStripButton = document.querySelector('.led-strip_button')
  var ledStripScreen = document.querySelector('.led-strip-screen')

  ledStripButton.addEventListener('click', function () {
    changeDisabledStatus(ledStripScreen, tablet)
  })

  // ============== Turn All ===================
  var turnAllButton = document.querySelector('.turn-all_button')
  var turnAllScreen = document.querySelector('.turn-all-screen')

  turnAllButton.addEventListener('click', function () {
    changeDisabledStatus(turnAllScreen, tablet)
  })

  // ============== Voice ===================
  var comingSoonButton = document.querySelector('.coming-soon_button')
  var comingSoonScreen = document.querySelector('.coming-soon-screen')

  comingSoonButton.addEventListener('click', function () {
    changeDisabledStatus(comingSoonScreen, tablet)
  })

  // ============== Coming soon ===================
  var voiceButton = document.querySelector('.voice_button')
  var voiceScreen = document.querySelector('.voice-screen')

  voiceButton.addEventListener('click', function () {
    changeDisabledStatus(voiceScreen, tablet)
  })

  // ============== Instruction ===================
  var instructionButton = document.querySelector('.instruction_button')
  var instructionScreen = document.querySelector('.instruction-screen')

  instructionButton.addEventListener('click', function () {
    changeDisabledStatus(instructionScreen, tablet)
  })

  // ==========================================
}

function changeDisabledStatus(screen, tablet) {
  var currentScreen = tablet.getCurrentScreen()

  screen.style.display = 'flex'
  currentScreen.style.display = 'none'

  tablet.setCurrentScreen(screen)
}
