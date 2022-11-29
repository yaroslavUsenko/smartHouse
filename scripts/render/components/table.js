var $tableLeg1 = document.querySelector('.table-leg-1')
var $tableLeg2 = document.querySelector('.table-leg-2')
var $tableLeg3 = document.querySelector('.table-leg-3')
var $tableLeg4 = document.querySelector('.table-leg-4')
var $tableLeg5 = document.querySelector('.table-leg-5')
var $tableLeg6 = document.querySelector('.table-leg-6')
var $tableBase = document.querySelector('.table-base')
var $tableTabletop = document.querySelector('.table-tabletop')

create3DNode($tableLeg1)
create3DNode($tableLeg2)
create3DNode($tableLeg3)
create3DNode($tableLeg4)
create3DNode($tableLeg5)
create3DNode($tableLeg6)
create3DNode($tableBase)

createComplex3DNode($tableTabletop, function () {
  var $tableTabletopTop = document.querySelector('.table-tabletop__top')
  var $light = document.createElement('div')
  var parentNodeName = $tableTabletopTop.classList[0]

  $light.classList = parentNodeName + '-light lamp-light disabled'

  $tableTabletopTop.append($light)
})
