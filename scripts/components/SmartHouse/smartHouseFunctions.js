'use strict'

var turnOnAllButton = document.querySelector('.turn-on-all-button')
var turnOffAllButton = document.querySelector('.turn-off-all-button')

function addUISmartHouseFunctional() {
  var smartHouse = this

  turnOnAllButton.addEventListener('click', function () {
    smartHouse.turnOnAllDevices()
  })

  turnOffAllButton.addEventListener('click', function () {
    smartHouse.turnOffAllDevices()
  })
}
