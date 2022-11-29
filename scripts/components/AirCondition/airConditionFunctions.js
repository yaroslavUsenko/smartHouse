'use strict'

var thermostatButton = document.querySelector('.thermostat-button')
var thermostatError = document.querySelector('.thermostat-error')
var temperatureInput = document.querySelector('#temperature')
var turnOnAirConditionButton = document.querySelector(
  '.turn-on-air-condition-button'
)
var airConditionDoor = document.querySelector('.air-condition-door')
var airConditionIndicator = document.querySelector('.air-condition-indicator')
var thermometerMovingPart = document.querySelector('.thermometer-moving-part')

function addUIConditionFunctional() {
  var airCondition = this

  turnOnAirConditionButton.addEventListener('click', function () {
    if (!airCondition.getStatus()) {
      airCondition.turnOn()
    } else {
      airCondition.turnOff()
    }
  })

  thermostatButton.addEventListener('click', function () {
    if (airCondition.getStatus()) {
      var temperature = parseFloat(temperatureInput.value)

      if (
        temperature < airCondition.getMinTemperature() ||
        temperature > airCondition.getMaxTemperature()
      ) {
        thermostatError.innerHTML = 'Temperatures must be between 15 to 25'

        setTimeout(function () {
          thermostatError.innerHTML = ''
        }, 2000)
      } else {
        airCondition.setTemperature(temperature)
      }
    }
  })
}

function turnOnConditionUI(airCondition) {
  if (!airCondition.getStatus()) {
    thermostatButton.disabled = false
    temperatureInput.disabled = false

    airConditionDoor.style.transform =
      'translateZ(0.5vw) rotateZ(270deg) rotateX(20deg)'
    airConditionIndicator.style.backgroundColor = 'red'
    airConditionIndicator.style.boxShadow =
      '0px 0px 1.6vw 0.05vw red, 0px 0px 0.6vw 0.05vw red, 0px 0px 0.2vw 0.1vw red'
  }
}

function turnOffConditionUI(airCondition) {
  if (airCondition.getStatus()) {
    thermostatButton.disabled = true
    temperatureInput.disabled = true

    airConditionDoor.style.transform =
      'translateZ(-0.1vw) rotateZ(270deg) rotateX(-17deg)'
    airConditionIndicator.style.backgroundColor = ''
    airConditionIndicator.style.boxShadow = ''
  }
}

function setConditionTemperature(temperature) {
  if (this.getStatus()) {
    if (typeof temperature === 'number') {
      if (
        temperature >= airCondition.getMinTemperature() &&
        temperature <= airCondition.getMaxTemperature()
      ) {
        this.__temperature = temperature

        changeTemperature(temperature)
      }
    }
  }
}

function changeTemperature(temperature) {
  thermometerMovingPart.style.height = (temperature - 10) * 0.4 + 'vw'
}
