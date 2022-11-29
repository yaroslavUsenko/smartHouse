var $computerMonitorFrame = document.querySelector('.computer-monitor_frame')
var $computerMonitorDisplay = document.querySelector(
  '.computer-monitor_display'
)
var $computerMonitorLeg = document.querySelector('.computer-monitor_leg')
var $computerMonitorStand = document.querySelector('.computer-monitor_stand')
var $computerKeyboard = document.querySelector('.computer-keyboard')
var $computerMouse = document.querySelector('.computer-mouse')
var numberOfKeyboardButtons = 46

create3DNode($computerMonitorFrame)
create3DNode($computerMonitorDisplay)
create3DNode($computerMonitorLeg)
create3DNode($computerMonitorStand)

createComplex3DNode($computerKeyboard, function () {
  var $computerKeyboardKeys = document.createElement('div')

  $computerKeyboardKeys.classList = 'computer-keyboard-keys'
  $computerKeyboard.append($computerKeyboardKeys)

  for (var i = 0; i <= numberOfKeyboardButtons; i++) {
    var $keyButton = document.createElement('div')

    $keyButton.classList = 'key-button'
    $computerKeyboardKeys.append($keyButton)
  }
})

createComplex3DNode($computerMouse, function () {
  var $computerMouseWheel = document.createElement('div')

  $computerMouseWheel.classList = 'computer-mouse-wheel'
  $computerMouse.append($computerMouseWheel)

  create3DNode($computerMouseWheel)
})
