var $lampBase = document.querySelector('.lamp-base')
var $lampLeg = document.querySelector('.lamp-leg')
var $lampHolder = document.querySelector('.lamp-holder')
var $lampBulb = document.querySelector('.lamp-bulb')

create3DNode($lampBase)
create3DNode($lampLeg)
create3DNode($lampHolder)

createComplex3DNode($lampBulb, function () {
  var $lampBulbLight = document.createElement('div')
  var parentNodeName = $lampBulb.classList[0]

  $lampBulbLight.classList = parentNodeName + '-light lamp-light disabled'
  $lampBulb.append($lampBulbLight)
  create3DNode($lampBulbLight)
})
