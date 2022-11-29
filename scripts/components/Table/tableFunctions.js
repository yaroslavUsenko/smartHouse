'use strict'

var turnOnTableButton = document.querySelector('.turn-on-table-button')
var tableModes = document.querySelectorAll('.table-mode')
var tableMovingPart = document.querySelector('.table-moving-part')
var lamp = document.querySelector('.lamp')
var computer = document.querySelector('.computer')

var itemsOnTable = [lamp, computer]

function addUITableFunctional() {
  var table = this

  turnOnTableButton.addEventListener('click', function () {
    if (!table.getStatus()) {
      table.turnOn()
    } else {
      table.turnOff()
    }
  })

  tableModes.forEach(function (button, index) {
    var reverseIndex = table.__numberOfModes - index

    button.addEventListener('click', function () {
      table.setCurrentMode(reverseIndex)
    })
  })
}

function turnOnTableUI(table) {
  if (!table.getStatus()) {
    tableModes.forEach(function (button) {
      button.disabled = false
    })
  }
}

function turnOffTableUI(table) {
  if (table.getStatus()) {
    tableModes.forEach(function (button) {
      button.disabled = true
    })
  }
}

function setTableCurrentMode(modeNumber) {
  if (typeof modeNumber === 'number') {
    if (modeNumber >= 0 && modeNumber <= this.getNumberOfModes()) {
      if (this.getStatus()) {
        this.__currentMode = modeNumber

        moveTable(modeNumber)
      }
    }
  }
}

function moveTable(modeNumber) {
  tableMovingPart.style.transform = 'translateZ(' + (modeNumber - 2) + 'vw)'

  itemsOnTable.forEach(function (item) {
    item.style.transform = 'translateZ(' + (modeNumber - 2) + 'vw)'
  })
}
