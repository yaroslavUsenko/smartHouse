'use strict'

var cameraDevice = document.querySelector('.camera-device')
var cameraDeviceLight = document.querySelector('.camera-device-light')
var turnOnCameraButton = document.querySelector('.turn-on-camera-button')
var cameraDisplay = document.querySelector('.camera-display')
var cameraDisplayScreens = document.querySelectorAll('.camera-display-screen')

var cameraAnimateTimerId = null
var currentAngle = null
var desireAngle = null
var currentCameraLocation = null
var desireCameraLocation = null
var cameraSpeed = 8000

var minAngle = -50
var maxAngle = 0
var minLocation = 0
var maxLocation = -100 * cameraDisplayScreens.length + 100

function addUICameraFunctional() {
  var camera = this

  turnOnCameraButton.addEventListener('click', function () {
    if (!camera.getStatus()) {
      camera.turnOn()
    } else {
      camera.turnOff()
    }
  })
}

function turnOnCameraUI(camera) {
  if (!camera.getStatus()) {
    cameraDisplay.classList.remove('disabled')
    cameraAnimateTimerId = setTimeout(function () {
      cameraAnimation(camera)
    }, 0)
  }
}

function turnOffCameraUI(camera) {
  if (camera.getStatus()) {
    clearTimeout(cameraAnimateTimerId)
    cameraAnimateTimerId = null

    cameraDevice.style.transform =
      'translateZ(21.1vw) rotateY(39deg) rotateZ(' + desireAngle + 'deg)'

    turnOnCameraButton.disabled = true

    setTimeout(function () {
      turnOnCameraButton.disabled = false
      cameraDisplay.classList.add('disabled')
    }, cameraSpeed)
  }
}

function setCameraCurrentPosition(numberOfPosition) {
  if (numberOfPosition > 0 && numberOfPosition <= this.getNumberOfPosition()) {
    this.__currentPosition = numberOfPosition
  }
}

function cameraAnimation(camera) {
  setPositionProperty(camera, minAngle, maxAngle, minLocation, maxLocation)

  cameraDevice.animate(
    [
      {
        transform:
          'translateZ(21.1vw) rotateY(39deg) rotateZ(' + currentAngle + 'deg)',
      },
      ,
      {
        transform:
          'translateZ(21.1vw) rotateY(39deg) rotateZ(' + desireAngle + 'deg)',
      },
    ],
    {
      duration: cameraSpeed,
      iterations: 1,
    }
  )

  if (camera.getCurrentPosition() === 1) {
    for (var i = 0; i < cameraDisplayScreens.length - 1; i++) {
      var delay = (cameraSpeed / cameraDisplayScreens.length) * i
      var cameraScreen =
        cameraDisplayScreens[cameraDisplayScreens.length - i - 1]

      setTimeout(animatePosition1, delay, cameraScreen)
    }
  } else if (camera.getCurrentPosition() === 2) {
    for (var i = 1; i < cameraDisplayScreens.length; i++) {
      var delay = (cameraSpeed / cameraDisplayScreens.length) * i
      var cameraScreen = cameraDisplayScreens[i]

      setTimeout(animatePosition2, delay, cameraScreen)
    }
  }

  cameraDeviceLight.style.backgroundColor = 'red'

  cameraDeviceLight.animate(
    [{ opacity: 0.2 }, { opacity: 1 }, { opacity: 0.2 }],
    {
      duration: cameraSpeed / 5,
      iterations: 5,
    }
  )

  cameraAnimateTimerId = setTimeout(function () {
    cameraAnimation(camera)
  }, cameraSpeed)
}

function setPositionProperty(
  camera,
  minAngle,
  maxAngle,
  minLocation,
  maxLocation
) {
  if (camera.getCurrentPosition() === 1) {
    currentAngle = minAngle
    desireAngle = maxAngle

    currentCameraLocation = minLocation
    desireCameraLocation = maxLocation

    camera.setCurrentPosition(2)
  } else if (camera.getCurrentPosition() === 2) {
    currentAngle = maxAngle
    desireAngle = minAngle

    currentCameraLocation = maxLocation
    desireCameraLocation = minLocation

    camera.setCurrentPosition(1)
  }
}

function animatePosition1(screen) {
  return (function (screen) {
    screen.style.opacity = 0
  })(screen)
}

function animatePosition2(screen) {
  return (function (screen) {
    screen.style.opacity = 1
  })(screen)
}
