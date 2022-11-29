'use strict'

var house = document.querySelector('.house')

var scale3dSize = 1
var rotateZAngle = 30
var translateXPosition = -21
var translateYPosition = 1
var translateZPosition = -15

document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    scale3dSize += 0.1
  } else if (event.key === 'ArrowDown') {
    scale3dSize -= 0.1
  }

  if (event.key === 'ArrowLeft') {
    rotateZAngle -= 1
  } else if (event.key === 'ArrowRight') {
    rotateZAngle += 1
  }

  if (event.key === 'q') {
    translateXPosition += 1
  } else if (event.key === 'a') {
    translateXPosition -= 1
  }

  if (event.key === 'w') {
    translateYPosition += 1
  } else if (event.key === 's') {
    translateYPosition -= 1
  }

  if (event.key === 'e') {
    translateZPosition -= 1
  } else if (event.key === 'd') {
    translateZPosition += 1
  }

  house.style.transform =
    'perspective(90vw) rotateX(65deg) rotateZ(' +
    rotateZAngle +
    'deg) translate3d(' +
    translateXPosition +
    'vw,' +
    translateYPosition +
    'vw,' +
    translateZPosition +
    'vw) scale3d(' +
    scale3dSize +
    ',' +
    scale3dSize +
    ',' +
    scale3dSize +
    ')'
})
