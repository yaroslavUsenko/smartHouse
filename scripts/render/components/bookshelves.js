var $bookshelf1 = document.querySelector('.bookshelf-1')
var $bookshelf2 = document.querySelector('.bookshelf-2')
var $bookshelf1Book1 = document.querySelector('.bookshelf-1_book-1')

createComplex3DNode($bookshelf1, function () {
  var parentNodeName = $bookshelf1.classList[0]

  for (var i = 1; i <= 4; i++) {
    var $bookshelf1Book = document.createElement('div')

    $bookshelf1Book.classList = parentNodeName + '_book-' + i
    $bookshelf1.append($bookshelf1Book)
    create3DBook($bookshelf1Book)
  }
})

createComplex3DNode($bookshelf2, function () {
  var parentNodeName = $bookshelf2.classList[0]
  var $bookshelf2Box = document.createElement('div')
  var $bookshelf2BoxTop = document.createElement('div')
  var $bookshelf2BoxBottom = document.createElement('div')

  $bookshelf2Box.classList = parentNodeName + '_box'
  $bookshelf2BoxTop.classList = parentNodeName + '_box-top'
  $bookshelf2BoxBottom.classList = parentNodeName + '_box-bottom'

  $bookshelf2.append($bookshelf2Box)
  $bookshelf2Box.append($bookshelf2BoxTop)
  $bookshelf2Box.append($bookshelf2BoxBottom)

  create3DNode($bookshelf2BoxTop)
  create3DNode($bookshelf2BoxBottom)
})

function create3DBook($book) {
  var $bookFront = document.createElement('div')
  var $bookSpine = document.createElement('div')
  var $bookBack = document.createElement('div')
  var $bookContent = document.createElement('div')

  $bookFront.classList = 'book-front'
  $bookSpine.classList = 'book-spine'
  $bookBack.classList = 'book-back'
  $bookContent.classList = 'book-content'

  $book.append($bookFront)
  $book.append($bookSpine)
  $book.append($bookBack)
  $book.append($bookContent)

  create3DNode($bookFront)
  create3DNode($bookSpine)
  create3DNode($bookBack)
  create3DNode($bookContent)
}
