var $cameraFastening = document.querySelector('.camera-fastening')
var $cameraLeg = document.querySelector('.camera-leg')
var $cameraHolder = document.querySelector('.camera-holder')
var $cameraDevice = document.querySelector('.camera-device')

create3DNode($cameraFastening)
create3DNode($cameraLeg)
create3DNode($cameraHolder)

createComplex3DNode($cameraDevice, function () {
  var $cameraDeviceRight = document.querySelector('.camera-device__right')
  var $cameraDeviceLight = document.createElement('div')

  $cameraDeviceLight.classList = 'camera-device-light'
  $cameraDeviceRight.append($cameraDeviceLight)
})
