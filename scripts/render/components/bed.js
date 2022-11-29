var $bedLeg1 = document.querySelector('.bed-leg-1')
var $bedLeg2 = document.querySelector('.bed-leg-2')
var $bedLeg3 = document.querySelector('.bed-leg-3')
var $bedLeg4 = document.querySelector('.bed-leg-4')
var $bedBase = document.querySelector('.bed-base')
var $bedHeadboard = document.querySelector('.bed-headboard')
var $bedMattress = document.querySelector('.bed-mattress')
var $bedCover1 = document.querySelector('.bed-cover-1')
var $bedCover2 = document.querySelector('.bed-cover-2')
var $bedCover2Slice1 = document.querySelector('.bed-cover-2__slice-1')
var $bedCover2Slice2 = document.querySelector('.bed-cover-2__slice-2')
var $bedCover2Slice3 = document.querySelector('.bed-cover-2__slice-3')
var $bedCover3 = document.querySelector('.bed-cover-3')
var $bedPillow1 = document.querySelector('.bed-pillow-1')
var $bedPillow2 = document.querySelector('.bed-pillow-2')

create3DNode($bedLeg1)
create3DNode($bedLeg2)
create3DNode($bedLeg3)
create3DNode($bedLeg4)
create3DNode($bedBase)
create3DNode($bedHeadboard)
create3DNode($bedCover1)
create3DNode($bedCover2)
create3DNode($bedCover2Slice1)
create3DNode($bedCover2Slice2)
create3DNode($bedCover2Slice3)
create3DNode($bedCover3)
create3DNode($bedPillow1)
create3DNode($bedPillow2)

createComplex3DNode($bedMattress, function () {
  for (var i = 1; i <= 6; i++) {
    var $bedMattressTop = document.querySelector('.bed-mattress__top')
    var $slice = document.createElement('div')
    var parentNodeName = $bedMattressTop.classList[0]

    $slice.classList = parentNodeName + '-slice-' + i + ' face'

    $bedMattressTop.append($slice)
  }
})
