var $tablet = document.querySelector('.tablet')
var $tabletCasePart1 = document.querySelector('.tablet-case-part-1')
var $tabletCasePart2 = document.querySelector('.tablet-case-part-2')
var $tabletCasePart3 = document.querySelector('.tablet-case-part-3')

createComplex3DNode($tablet, function () {
  var $tabletFront = document.querySelector('.tablet__front')
  var $tabletRight = document.querySelector('.tablet__right')
  var $turnOnButton = document.createElement('div')
  var $backButton = document.createElement('div')

  $turnOnButton.classList = 'turn-on-button'
  $backButton.classList = 'back-button'

  $tabletRight.append($turnOnButton)
  $tabletFront.append($backButton)

  create3DNode($turnOnButton)
})

createComplex3DNode($tabletCasePart1, function () {
  for (var i = 1; i <= 8; i++) {
    var $tabletFastening = document.createElement('div')

    $tabletFastening.classList = 'tablet-fastening-' + i
    $tabletCasePart1.append($tabletFastening)

    create3DNode($tabletFastening)
  }
})

create3DNode($tabletCasePart2)
create3DNode($tabletCasePart3)
