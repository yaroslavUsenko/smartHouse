var $cupboardLeg1 = document.querySelector('.cupboard-leg-1')
var $cupboardLeg2 = document.querySelector('.cupboard-leg-2')
var $cupboardLeg3 = document.querySelector('.cupboard-leg-3')
var $cupboardLeg4 = document.querySelector('.cupboard-leg-4')
var $cupboardWall1 = document.querySelector('.cupboard-wall-1')
var $cupboardWall2 = document.querySelector('.cupboard-wall-2')
var $cupboardWall3 = document.querySelector('.cupboard-wall-3')
var $cupboardRoof = document.querySelector('.cupboard-roof')
var $cupboardDoor1 = document.querySelector('.cupboard-door-1')
var $cupboardDoor2 = document.querySelector('.cupboard-door-2')
var $cupboardShelf1 = document.querySelector('.cupboard-shelf-1')
var $cupboardShelf2 = document.querySelector('.cupboard-shelf-2')
var $cupboardHandle1 = document.querySelector('.cupboard-handle-1')
var $cupboardHandle2 = document.querySelector('.cupboard-handle-2')
var $cupboardHandle3 = document.querySelector('.cupboard-handle-3')
var $cupboardHandle4 = document.querySelector('.cupboard-handle-4')

create3DNode($cupboardLeg1)
create3DNode($cupboardLeg2)
create3DNode($cupboardLeg3)
create3DNode($cupboardLeg4)
create3DNode($cupboardWall1)
create3DNode($cupboardWall2)
create3DNode($cupboardWall3)
create3DNode($cupboardRoof)
create3DNode($cupboardDoor1)
create3DNode($cupboardDoor2)
create3DNode($cupboardShelf1)
create3DNode($cupboardShelf2)

create3DHandle($cupboardHandle1)
create3DHandle($cupboardHandle2)
create3DHandle($cupboardHandle3)
create3DHandle($cupboardHandle4)

function create3DHandle($handle) {
  var parentNodeName = $handle.classList[0]
  var $sideA = document.createElement('div')
  var $sideB = document.createElement('div')
  var $sideC = document.createElement('div')

  $sideA.classList = parentNodeName + '_side-a side-a'
  $sideB.classList = parentNodeName + '_side-b side-b'
  $sideC.classList = parentNodeName + '_side-c side-c'

  $handle.append($sideA)
  $handle.append($sideB)
  $handle.append($sideC)

  create3DNode($sideA)
  create3DNode($sideB)
  create3DNode($sideC)
}
