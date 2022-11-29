function create3DNode($parentNode) {
  var nodeSides = []
  var parentNodeName = $parentNode.classList[0]

  for (var i = 0; i < 6; i++) {
    var $side = document.createElement('div')

    nodeSides.push($side)
  }

  nodeSides[0].classList = parentNodeName + '__front face'
  nodeSides[1].classList = parentNodeName + '__back face'
  nodeSides[2].classList = parentNodeName + '__right face'
  nodeSides[3].classList = parentNodeName + '__left face'
  nodeSides[4].classList = parentNodeName + '__top face'
  nodeSides[5].classList = parentNodeName + '__bottom face'

  for (var i = 0; i < 6; i++) {
    $parentNode.append(nodeSides[i])
  }
}

function createComplex3DNode($parentNode, callback) {
  create3DNode($parentNode)

  callback()
}
