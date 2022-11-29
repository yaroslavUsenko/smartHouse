var $airCondition = document.querySelector('.air-condition')

createComplex3DNode($airCondition, function () {
  var $airConditionLeft = document.querySelector('.air-condition__left')

  var $airConditionIndicator = document.createElement('div')
  var $airConditionDoor = document.createElement('div')

  $airConditionIndicator.classList = 'air-condition-indicator'
  $airConditionDoor.classList = 'air-condition-door'

  $airConditionLeft.append($airConditionIndicator)
  $airCondition.append($airConditionDoor)

  create3DNode($airConditionDoor)
})
